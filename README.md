# BF Einstellungstest Trainer

Eine responsive Lernplattform zur Vorbereitung auf den Einstellungstest der Berufsfeuerwehr in Deutschland.

## Lernbereiche
- Deutsch: Rechtschreibung, Grammatik und Textverständnis
- Mathematik: Grundrechenarten, Prozentrechnung, Dreisatz und Einheiten
- Logik: Zahlenreihen, Analogien und Schlussfolgerungen
- Technisches Verständnis: Hebel, Zahnräder, Kräfte und Mechanik
- Allgemeinwissen
- Konzentration und Merkfähigkeit
- Räumliches Denken
- Sporttest-Vorbereitung: Ausdauer, Kraft, Koordination und Schwimmen
- Vorstellungsgespräch: Motivation, Teamfähigkeit und Berufsbild

## Weitere Funktionen
- Persönliches Konto und Anmeldung mit Supabase
- Lernfortschritt und Trefferquote speichern
- Tägliches Lernziel festlegen
- Lerngruppen erstellen und per Raumcode beitreten
- Gemischte Prüfungssimulation
- Feedback nach Themenbereichen
- Verlinkte offizielle Informationen verschiedener Berufsfeuerwehren

## Wichtig: Einstellungstests unterscheiden sich
Es gibt keinen einheitlichen Einstellungstest für alle Berufsfeuerwehren. Ablauf, Aufgaben, Sportdisziplinen und Mindestleistungen unterscheiden sich je nach Stadt, Laufbahn und Ausschreibung. Nutze die Übungen als allgemeine Vorbereitung und prüfe immer die offizielle Karriereseite deiner Wunsch-Berufsfeuerwehr.

## Kostenlose/offizielle Informationsquellen
- Dortmund: https://www.dortmund.de/themen/sicherheit-und-ordnung/helfer-und-retter/berufsfeuerwehr/karriere/ausbildung-zum-zur-brandmeister-in/der-einstellungstest/
- Flensburg: https://berufsfeuerwehr.flensburg.de/Karriere/Einstellungstest/Feuerwehr/
- Nürnberg: https://www.nuernberg.de/internet/arbeitgeberin/einstellungstest.html
- Bremen: https://www.feuerwehr.bremen.de/karriere/einstellungstest-20815
- Stuttgart: https://feuerwehr.stuttgart.de/karriere/informationen-zur-bewerbung/
- Deutsche Feuerwehr-Gewerkschaft: https://blog.dfeug.de/service/vorbereitung-einstellungstest/

## Supabase einrichten
1. Kostenloses Projekt unter https://supabase.com erstellen.
2. `supabase/schema.sql` im SQL Editor ausführen.
3. Project URL und anon/public key unter Project Settings → API kopieren.
4. In `config.js` die Werte `SUPABASE_URL` und `SUPABASE_ANON_KEY` eintragen. Niemals den service_role key im Browser verwenden.
5. GitHub Pages unter Repository → Settings → Pages aktivieren.
6. Supabase Authentication → URL Configuration: veröffentlichte Website-Adresse als Site URL und Redirect URL eintragen.
7. Registrieren und anmelden.

Ohne Supabase läuft nur der lokale Gastmodus; Daten bleiben dann auf diesem Gerät im Browser.

## Hinweis
Die Fragen sind eigens erstellte Übungsaufgaben und keine Originalfragen einer Berufsfeuerwehr. Die Plattform ist keine offizielle Auswahlprüfung und garantiert kein Bestehen. Sporttraining langsam und gesundheitsgerecht aufbauen; bei gesundheitlichen Fragen ärztlichen Rat einholen.
