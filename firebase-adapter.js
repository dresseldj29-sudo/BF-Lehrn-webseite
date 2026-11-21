// Kompatibilitaetsadapter: Die bestehende Lernplattform nutzt eine kleine Supabase-aehnliche API.
// Authentifizierung und Daten laufen tatsaechlich ueber Firebase Authentication und Cloud Firestore.
(function () {
  if (!window.firebase || !window.BF_CONFIG || !window.BF_CONFIG.apiKey || !window.BF_CONFIG.authDomain || !window.BF_CONFIG.projectId) return;
  const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(window.BF_CONFIG);
  const auth = app.auth();
  const db = app.firestore();

  function result(data, error = null) { return { data, error }; }
  function makeError(e) { return { message: e && e.message ? e.message : String(e), code: e && e.code }; }

  class Query {
    constructor(table) { this.table = table; this.action = "select"; this.payload = null; this.filters = []; this.sort = null; this.wantSingle = false; }
    select() { return this; }
    eq(field, value) { this.filters.push([field, value]); return this; }
    order(field, options = {}) { this.sort = [field, options.ascending !== false]; return this; }
    single() { this.wantSingle = true; return this.execute(); }
    maybeSingle() { this.wantSingle = true; return this.execute(true); }
    insert(payload) { this.action = "insert"; this.payload = payload; return this; }
    upsert(payload) { this.action = "upsert"; this.payload = payload; return this; }
    async execute(allowEmpty = false) {
      try {
        const col = db.collection(this.table);
        if (this.action === "insert" || this.action === "upsert") {
          const rows = Array.isArray(this.payload) ? this.payload : [this.payload];
          const saved = [];
          for (const original of rows) {
            const row = { ...original };
            let ref;
            if (this.table === "profiles" && row.id) ref = col.doc(String(row.id));
            else if (this.table === "room_members" && row.room_id && row.user_id) ref = col.doc(String(row.room_id) + "_" + String(row.user_id));
            else if (this.table === "study_rooms" && row.id) ref = col.doc(String(row.id));
            else if (row.id && this.action === "upsert") ref = col.doc(String(row.id));
            else ref = col.doc();
            const data = { ...row, id: row.id || ref.id };
            if (this.table === "study_rooms" && !data.created_at) data.created_at = new Date().toISOString();
            if (this.action === "upsert") await ref.set(data, { merge: true });
            else await ref.set(data);
            saved.push(data);
          }
          return result(Array.isArray(this.payload) ? saved : saved[0]);
        }
        let query = col;
        for (const [field, value] of this.filters) query = query.where(field, "==", value);
        if (this.sort) query = query.orderBy(this.sort[0], this.sort[1] ? "asc" : "desc");
        const snap = await query.get();
        let rows = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        if (this.wantSingle) {
          if (!rows.length && allowEmpty) return result(null);
          if (rows.length !== 1) throw new Error(rows.length ? "Es wurden mehrere Datensaetze gefunden." : "Datensatz nicht gefunden.");
          return result(rows[0]);
        }
        return result(rows);
      } catch (e) { return result(null, makeError(e)); }
    }
    then(resolve, reject) { return this.execute().then(resolve, reject); }
  }

  const api = {
    auth: {
      signUp: async ({ email, password }) => {
        try { const cred = await auth.createUserWithEmailAndPassword(email, password); return { data: { user: cred.user, session: cred.user ? { user: cred.user } : null }, error: null }; }
        catch (e) { return { data: { user: null, session: null }, error: makeError(e) }; }
      },
      signInWithPassword: async ({ email, password }) => {
        try { const cred = await auth.signInWithEmailAndPassword(email, password); return { data: { user: cred.user, session: { user: cred.user } }, error: null }; }
        catch (e) { return { data: { user: null, session: null }, error: makeError(e) }; }
      },
      signOut: async () => { try { await auth.signOut(); return { error: null }; } catch (e) { return { error: makeError(e) }; } },
      getSession: async () => { await auth.authStateReady(); const u = auth.currentUser; return { data: { session: u ? { user: u } : null }, error: null }; },
      onAuthStateChange: callback => {
        const unsubscribe = auth.onAuthStateChanged(u => callback(u ? "SIGNED_IN" : "SIGNED_OUT", u ? { user: u } : null));
        return { data: { subscription: { unsubscribe } } };
      }
    },
    from: table => new Query(table)
  };
  window.BF_FIREBASE_ADAPTER = { create: () => api };
})();
