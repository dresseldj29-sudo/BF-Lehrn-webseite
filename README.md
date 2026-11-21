# Berufsfeuerwehr Nürnberg – Einstellungstest Trainer

Kostenloser, responsiver Übungstrainer zur Vorbereitung auf das veröffentlichte Auswahlverfahren der **Berufsfeuerwehr Nürnberg** für den Einstieg in den mittleren feuerwehrtechnischen Dienst (2. Qualifikationsebene).

## Auf die Nürnberger Prüfung abgestimmte Bereiche

### Schriftlicher Einstellungstest
Die Stadt Nürnberg nennt vier schriftliche Testbereiche mit jeweils 30 Minuten:
- **Deutsch:** Fehlersuche im Text, Bildbeschreibung, Zusammenfassung von Textabschnitten und Wiedergabe beschriebener Sachverhalte.
- **Mathematik:** Rechenaufgaben ohne Taschenrechner oder Formelsammlung, unter anderem Dezimalzahlen, Potenzen, Volumen und Sachaufgaben.
- **Allgemeinwissen:** Politik, Bundesländer und Landeshauptstädte, deutsche Geschichte und staatsbürgerliches Wissen.
- **Logiktest:** Muster, Reihen und logische Zusammenhänge.

Der Trainer enthält eigene Übungsfragen und eine gemischte Simulation. Es sind **keine Originalfragen** der Stadt Nürnberg.

### Sportlicher Einstellungstest
Die offizielle Nürnberger Seite nennt für Bewerbende ab 18 Jahren unter anderem folgende Anforderungen:
- Kasten-Bumerang-Test: höchstens 20 Sekunden
- 3.000-Meter-Lauf: höchstens 15:00 Minuten
- 42 Wechselsprünge über 33 cm in 30 Sekunden
- Beugehang: mindestens 44 Sekunden
- Personenrettung: 75-kg-Dummy in höchstens 60 Sekunden
- 200-Meter-Schwimmen: höchstens 5:00 Minuten
- Streckentauchen: bis 15 Meter
- 30 Meter Drehleitersteigen: höchstens 60 Sekunden

**Wichtig:** Laut Stadt Nürnberg erfolgt der Sporttest im K.-o.-System. Für Minderjährige können abweichende Grenzwerte gelten. Verbindlich sind immer die aktuelle offizielle Ausschreibung und die Angaben der Stadt Nürnberg.

### Praktischer Test und Gespräch
Übungsschwerpunkte sind handwerkliches Geschick, Lasten mit Hebeln bewegen, Längen und Gewichte abschätzen, Werkstoffe mit geeignetem Werkzeug bearbeiten, einfache Erste-Hilfe-Situationen und Orientierung in engen/dunklen Räumen. Im Bewerbungsgespräch legt die Stadt nach eigener Beschreibung besonderen Wert auf Teamfähigkeit und Belastbarkeit. Eine gesundheitliche Prüfung gehört ebenfalls zum Auswahlverfahren.

## Weitere Funktionen
- Supabase-Anmeldung und persönliches Konto
- Speicherung von Lernfortschritt und Trefferquote
- tägliches Lernziel
- Lerngruppen mit Raumcode
- gemischte schriftliche Übungssimulation
- Feedback nach Themenbereichen
- kostenlose und offizielle Informationslinks

## Offizielle Nürnberger Quellen
- **Einstellungstest und Auswahlverfahren:** https://www.nuernberg.de/internet/arbeitgeberin/einstellungstest.html
- **Offizielle Sporttest-Trainingsempfehlungen (PDF):** https://www.nuernberg.de/imperia/md/feuerwehr/dokumente/vorbereitung_sporttest.pdf
- **Berufswege bei der Feuerwehr Nürnberg:** https://www.nuernberg.de/internet/feuerwehr/jobs_feuerwehr.html

## Firebase und Veröffentlichung

Die Lernplattform verwendet **Firebase Authentication** für Nutzerkonten und **Cloud Firestore** für Lernfortschritt, Profile und Lerngruppen.

### 1. Firebase-Projekt erstellen
1. Öffne https://console.firebase.google.com/ und erstelle ein Projekt.
2. Öffne im Projekt das Zahnrad → **Projekteinstellungen** → **Allgemein**.
3. Unter „Deine Apps“ auf das Web-Symbol `</>` klicken, eine Web-App registrieren und die angezeigte Firebase-Konfiguration kopieren.
4. Trage die Werte in `config.js` ein: `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId` und `appId`. Diese Web-Konfiguration ist für den Browser vorgesehen; niemals private Admin-/Service-Account-Schlüssel veröffentlichen.

### 2. Anmeldung aktivieren
1. Firebase Console → **Authentication** → **Jetzt starten**.
2. Unter „Anmeldemethode“ **E-Mail/Passwort** aktivieren und speichern.
3. Unter Authentication → Einstellungen → Autorisierte Domains die Railway-Domain `feuerwehr-pruefung-v1.up.railway.app` hinzufügen.

### 3. Datenbank einrichten
1. Firebase Console → **Firestore Database** → **Datenbank erstellen**.
2. Für den Start einen geeigneten Standort auswählen.
3. Öffne den Bereich **Regeln**.
4. Ersetze die Regeln durch den vollständigen Inhalt aus `firestore.rules` und veröffentliche sie.

Die Regeln schützen persönliche Profile, Lernfortschritte und Lernzeiten. Angemeldete Nutzer können Lerngruppen sehen und ihnen beitreten.

### 4. Website verwenden
1. Speichere die Firebase-Konfiguration in `config.js` und committe die Änderung in GitHub.
2. Railway baut die Website nach dem GitHub-Commit automatisch neu.
3. Öffne https://feuerwehr-pruefung-v1.up.railway.app und erstelle ein Konto.
4. Melde dich auf einem zweiten Gerät mit demselben Konto an: dein Profil und Lernfortschritt werden aus Firestore geladen.

Ohne ausgefüllte Firebase-Konfiguration startet weiterhin der lokale Gastmodus. Gastdaten bleiben nur im Browser und werden nicht zwischen Geräten synchronisiert.

## Hinweis
Die Website ist ein privates Lernangebot und keine offizielle Website der Stadt Nürnberg. Die Fragen sind selbst erstellte Trainingsaufgaben. Inhalte ersetzen weder die offizielle Ausschreibung noch eine Feuerwehr-Ausbildung. Sporttraining langsam und gesundheitsgerecht aufbauen; bei gesundheitlichen Fragen ärztlichen Rat einholen.
