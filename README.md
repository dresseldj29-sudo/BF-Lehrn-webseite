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

## Supabase und Veröffentlichung
1. Kostenloses Projekt unter https://supabase.com erstellen.
2. `supabase/schema.sql` im Supabase SQL Editor ausführen.
3. Project URL und anon/public key unter Project Settings → API kopieren.
4. Die Werte in `config.js` unter `SUPABASE_URL` und `SUPABASE_ANON_KEY` eintragen. Niemals den `service_role`-Key im Browser verwenden.
5. GitHub Pages unter Repository → Settings → Pages aktivieren.
6. In Supabase unter Authentication → URL Configuration die veröffentlichte Website-Adresse als Site URL und Redirect URL eintragen.
7. Konto registrieren und anmelden.

Ohne eingerichtetes Supabase läuft nur der lokale Gastmodus. Dann bleiben Daten ausschließlich in diesem Browser auf diesem Gerät. Gemeinsame Online-Lerngruppen benötigen ebenfalls Supabase.

## Hinweis
Die Website ist ein privates Lernangebot und keine offizielle Website der Stadt Nürnberg. Die Fragen sind selbst erstellte Trainingsaufgaben. Inhalte ersetzen weder die offizielle Ausschreibung noch eine Feuerwehr-Ausbildung. Sporttraining langsam und gesundheitsgerecht aufbauen; bei gesundheitlichen Fragen ärztlichen Rat einholen.
