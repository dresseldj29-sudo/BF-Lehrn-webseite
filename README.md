# BF Lernakademie – Berufsfeuerwehr Training

Eine responsive Lernplattform mit Lernmodulen, Quizfragen, persönlichem Lernfortschritt, Tagesziel und Lerngruppen.

## Funktionen
- E-Mail-Konto mit Anmeldung und Registrierung (Supabase Auth)
- Fortschritt, Quiz-Ergebnisse und Lernziel werden online gespeichert
- Lerngruppen erstellen und per Raumcode beitreten
- Lernmodule: Grundlagen, Brand- und Löschlehre, TH, Atemschutz/Sicherheit, Funk, Führung, Erste Hilfe, Recht/FwDV
- Prüfungstraining mit gemischten Fragen und Feedback
- Sammlung kostenloser Fachquellen
- Gastmodus zum direkten Ausprobieren (Speicherung nur im aktuellen Browser)

## Online-Speicherung aktivieren (kostenloser Supabase-Tarif)
1. Unter https://supabase.com ein kostenloses Projekt erstellen.
2. In Supabase unter **SQL Editor** die Datei `supabase/schema.sql` vollständig einfügen und ausführen.
3. Unter **Project Settings → API** die **Project URL** und den **anon/public key** kopieren.
4. In `config.js` eintragen:
   - `SUPABASE_URL`: Project URL
   - `SUPABASE_ANON_KEY`: anon/public key (niemals den service_role key verwenden!)
5. GitHub Pages veröffentlichen: Repository → Settings → Pages → Deploy from a branch → main → /(root) → Save.
6. Unter Supabase → Authentication → URL Configuration die veröffentlichte GitHub-Pages-Adresse als Site URL und Redirect URL eintragen.
7. Registrieren und anmelden. Lernstand und Profil werden dann serverseitig gespeichert.

## Lokaler Test
`index.html` im Browser öffnen. Ohne Supabase läuft die Plattform im Gastmodus. Online-Konten und echte gemeinsame Lerngruppen benötigen die Supabase-Konfiguration.

## Kostenlose Fachquellen
- Feuerwehr-Lernbar Bayern: https://feuerwehr-lernbar.bayern.de/
- Feuerwehr Wissen: https://feuerwehr-wissen-bb.de/
- DFV-Übersicht Ausbildungsunterlagen: https://www.feuerwehrverband.de/app/uploads/2024/08/DFV-Uebersicht_Ausbildungsunterlagen_Internet_Aug_2024.pdf
- LFV Schleswig-Holstein – Downloads: https://www.lfv-sh.de/der-landesverband/facharbeit/abteilung-1-einsatzvorbereitung-abwicklung
- DFV direkt: https://www.feuerwehrverband.de/veranstaltungen/dfv-direkt/
- Feuerwehr NRW – Arbeitshilfen: https://www.feuerwehr-nrw.de/service/arbeitshilfen/

## Wichtiger Hinweis
Private Lernhilfe, keine offizielle Berufsfeuerwehr-Ausbildungsplattform. Fragen sind selbst erstellt und keine offiziellen Prüfungsfragen. Inhalte ersetzen weder Lehrgänge noch praktische Ausbildung, örtliche Dienstanweisungen oder gültige Vorschriften. Immer aktuelle landesrechtliche und dienstliche Vorgaben prüfen.

## Noch mögliche Ausbaustufen
- Live-Gruppenchat und synchrones Gruppenquiz (Supabase Realtime)
- Upload und Verwaltung eigener Unterrichtsmaterialien
- Ausbilder-/Adminbereich und Kurszuweisung
- Lernzeit-Auswertung mit Tages-/Wochenstatistik und Erinnerungen
