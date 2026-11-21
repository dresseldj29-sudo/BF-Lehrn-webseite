// Erweiterter, eigener Fragenpool für die BF-Lernplattform (keine Original-Prüfungsfragen).
(function(){
 const q=[
 ['deutsch','Welche Form ist korrekt: „Die Einsatzkräfte ___ vor Ort“?',['ist','sind','seid','sein'],1,'„Einsatzkräfte“ steht im Plural: sind.'],
 ['deutsch','Welches Wort ist ein Synonym für „umsichtig“?',['unvorsichtig','vorausschauend','hektisch','gleichgültig'],1,'Umsichtig bedeutet vorausschauend und bedacht.'],
 ['deutsch','Welche Schreibweise ist richtig?',['Einsatzleitung','Einsatzleittung','Einsatzleitunng','Einsazleitung'],0,'Einsatzleitung wird mit einem t in Leitung geschrieben.'],
 ['deutsch','Was ist ein zusammengesetztes Substantiv?',['schnell laufen','das Löschfahrzeug','sehr groß','arbeitet sorgfältig'],1,'Löschfahrzeug ist ein zusammengesetztes Substantiv.'],
 ['deutsch','Welches Satzzeichen beendet eine direkte Frage?',['Punkt','Komma','Fragezeichen','Doppelpunkt'],2,'Eine direkte Frage endet mit einem Fragezeichen.'],
 ['deutsch','Welche Zeitform ist „Die Mannschaft hatte alarmiert“?',['Präsens','Präteritum','Plusquamperfekt','Futur I'],2,'„Hatte alarmiert“ ist Plusquamperfekt.'],
 ['deutsch','Welche Variante ist höflich und sachlich?',['Gib mir sofort das Gerät!','Könnten Sie mir bitte das Gerät reichen?','Mach hin!','Du musst jetzt!'],1,'Die zweite Formulierung ist höflich und eindeutig.'],
 ['deutsch','Was bedeutet „chronologisch“?',['Nach Größe geordnet','In zeitlicher Reihenfolge','Alphabetisch geordnet','Nach Wichtigkeit sortiert'],1,'Chronologisch bedeutet nach der zeitlichen Abfolge.'],
 ['deutsch','Welcher Begriff ist richtig geschrieben?',['Rettungsdienst','Retungsdienst','Rettungsdiensst','Rettungsdinst'],0,'Rettungsdienst wird mit doppeltem t geschrieben.'],
 ['deutsch','Was ist das Prädikat in „Die Gruppe kontrolliert das Material“?',['Die Gruppe','kontrolliert','das Material','Material'],1,'Das Prädikat ist das Verb „kontrolliert“.'],
 ['logik','Welche Zahl folgt? 5, 10, 20, 40, …',['45','60','80','100'],2,'Die Zahlen werden jeweils verdoppelt.'],
 ['logik','Welche Zahl fehlt? 2, 5, 8, 11, …',['12','13','14','15'],2,'Die Folge steigt jeweils um 3.'],
 ['logik','Alle Fahrzeuge benötigen Energie. Ein Löschfahrzeug ist ein Fahrzeug. Was folgt?',['Das Löschfahrzeug benötigt Energie.','Alle Energie ist ein Fahrzeug.','Kein Löschfahrzeug benötigt Energie.','Das lässt sich nicht sagen.'],0,'Das Löschfahrzeug gehört zur Gruppe der Fahrzeuge.'],
 ['logik','Welcher Begriff passt nicht?',['Helm','Handschuh','Stiefel','Wasser'],3,'Die ersten drei sind persönliche Schutzausrüstung, Wasser nicht.'],
 ['logik','Welche Buchstabenfolge setzt fort? A, C, E, G, …',['H','I','J','K'],1,'Es wird jeweils ein Buchstabe übersprungen.'],
 ['logik','Ein Raum hat vier Ecken. In jeder Ecke sitzt eine Katze. Jede Katze sieht drei Katzen. Wie viele Katzen sind im Raum?',['3','4','8','12'],1,'Vier Katzen sitzen jeweils in einer Ecke und sehen die anderen drei.'],
 ['logik','Welche Zahl ist am kleinsten?',['0,08','0,8','0,18','0,108'],0,'0,08 ist kleiner als die anderen Werte.'],
 ['logik','Wenn heute Mittwoch ist, welcher Tag ist in 10 Tagen?',['Freitag','Samstag','Sonntag','Montag'],1,'Sieben Tage später ist Mittwoch, drei weitere Tage später Samstag.'],
 ['technik','Welche Einheit misst elektrische Stromstärke?',['Volt','Ampere','Watt','Ohm'],1,'Die Stromstärke wird in Ampere gemessen.'],
 ['technik','Welche Einheit wird für Kraft verwendet?',['Joule','Newton','Pascal','Watt'],1,'Die SI-Einheit der Kraft ist Newton.'],
 ['technik','Was beschreibt ein Flaschenzug?',['Eine elektrische Schaltung','Eine Kombination von Rollen und Seil zur Kraftübertragung','Einen Druckluftbehälter','Ein Messgerät'],1,'Ein Flaschenzug kann die benötigte Zugkraft verringern.'],
 ['technik','Was passiert bei einem Kurzschluss typischerweise?',['Der Stromkreis wird unterbrochen','Es entsteht eine sehr niederohmige Verbindung','Die Spannung wird immer null','Der Akku lädt schneller'],1,'Ein Kurzschluss verbindet Punkte mit sehr geringem Widerstand.'],
 ['technik','Welche Aussage zum Schwerpunkt ist richtig?',['Er ist der gedachte Angriffspunkt der Gewichtskraft.','Er liegt immer außerhalb des Körpers.','Er ist bei jedem Körper gleich hoch.','Er hat keine Bedeutung für Stabilität.'],0,'Die Lage des Schwerpunkts beeinflusst die Stand- und Kippsicherheit.'],
 ['technik','Wozu dient ein Manometer?',['Temperatur messen','Druck messen','Länge messen','Strom messen'],1,'Ein Manometer ist ein Druckmessgerät.'],
 ['technik','Welche Maßnahme schützt vor Stromunfällen?',['Beschädigte Kabel weiterverwenden','Vor Arbeiten Spannungsfreiheit feststellen lassen','Nasse Hände verwenden','Schutzabdeckungen entfernen'],1,'Arbeiten an elektrischen Anlagen nur fachgerecht und nach Sicherheitsregeln.'],
 ['allgemein','Wie lautet die europaweite Notrufnummer?',['112','114','118','911'],0,'112 ist die europaweite Notrufnummer.'],
 ['allgemein','Wie viele Bundesländer hat Deutschland?',['14','15','16','17'],2,'Deutschland hat 16 Bundesländer.'],
 ['allgemein','Welche Gewalt spricht Recht?',['Legislative','Exekutive','Judikative','Kommunale'],2,'Die Judikative ist die rechtsprechende Gewalt.'],
 ['allgemein','Welche Stadt ist die Landeshauptstadt von Bayern?',['Nürnberg','Augsburg','Regensburg','München'],3,'Die Landeshauptstadt Bayerns ist München.'],
 ['allgemein','Was bedeutet „Demokratie“?',['Herrschaft des Volkes','Herrschaft einer Person','Herrschaft des Militärs','Herrschaft ohne Gesetze'],0,'Demokratie bedeutet Volksherrschaft.'],
 ['allgemein','Welche Institution gehört zur Europäischen Union?',['Europäische Kommission','NASA','WHO','NATO'],0,'Die Europäische Kommission ist ein Organ der EU.'],
 ['allgemein','Welche Farbe hat das Gefahrensymbol für entzündbare Stoffe im GHS-System typischerweise?',['Flamme auf rotem Kreis','Flamme im roten Rhombus mit weißem Hintergrund','Totenkopf auf blauem Quadrat','Baum auf grünem Dreieck'],1,'Das GHS-Flammensymbol steht im rot umrandeten Rhombus.'],
 ['praxis','Wofür wird ein Schraubenschlüssel verwendet?',['Schrauben und Muttern drehen','Holz sägen','Glas schneiden','Strom messen'],0,'Ein Schraubenschlüssel dient zum Anziehen und Lösen von Schraubverbindungen.'],
 ['praxis','Welches Werkzeug eignet sich zum Messen einer kurzen Länge?',['Zollstock','Hammer','Kneifzange','Schraubendreher'],0,'Ein Zollstock ist ein Längenmesswerkzeug.'],
 ['praxis','Was ist vor der Benutzung eines Werkzeugs wichtig?',['Auf sichtbare Schäden prüfen','Schutzvorrichtungen entfernen','Werkzeug zweckentfremden','Mit beschädigtem Griff arbeiten'],0,'Werkzeuge müssen vor dem Einsatz auf sicheren Zustand geprüft werden.'],
 ['praxis','Was ist bei schwerem Heben grundsätzlich sinnvoll?',['Rücken rund machen und ruckartig heben','Last körpernah halten und Beine einsetzen','Last weit vom Körper entfernt halten','Beim Heben den Oberkörper verdrehen'],1,'Körpernahe Lastführung und kontrollierter Einsatz der Beine entlasten den Rücken.'],
 ['sport','Was ist beim Ausdauertraining sinnvoll?',['Belastung schrittweise steigern','Jeden Tag maximal trainieren','Aufwärmen auslassen','Schmerzen ignorieren'],0,'Ein schrittweiser Trainingsaufbau mit Erholung ist sinnvoll.'],
 ['sport','Welche Fähigkeit wird beim Beugehang besonders gefordert?',['Griff- und Haltekraft','Nur Sprinttempo','Nur Beweglichkeit der Füße','Reaktionszeit beim Hören'],0,'Beim Beugehang ist vor allem Haltekraft im Oberkörper und Griff gefragt.'],
 ['sport','Warum ist Aufwärmen vor Belastung sinnvoll?',['Es bereitet Körper und Bewegungsapparat vor.','Es ersetzt jedes Training.','Es verhindert garantiert jede Verletzung.','Es senkt die Körpertemperatur.'],0,'Aufwärmen bereitet den Körper auf die folgende Belastung vor.'],
 ['interview','Wie reagierst du auf einen Fehler im Team?',['Vertuschen','Sachlich ansprechen und gemeinsam eine Lösung suchen','Schuldige öffentlich bloßstellen','Nicht weiterarbeiten'],1,'Offene Kommunikation und lösungsorientiertes Verhalten sind wichtig.'],
 ['interview','Was bedeutet Teamfähigkeit?',['Alle Entscheidungen allein treffen','Zuverlässig zusammenarbeiten und Informationen teilen','Kritik grundsätzlich ablehnen','Aufgaben immer abgeben'],1,'Teamfähigkeit umfasst Kooperation, Kommunikation und Verlässlichkeit.'],
 ['interview','Wie gehst du mit konstruktiver Kritik um?',['Zuhören, prüfen und Verbesserungen ableiten','Sofort persönlich nehmen','Kritik ignorieren','Mit Gegenangriff reagieren'],0,'Konstruktive Kritik kann helfen, das eigene Verhalten zu verbessern.'],
 ['konzentration','Welche Zeichenfolge stimmt exakt mit „F8K-41P“ überein?',['F8K-14P','F8K-41P','F8X-41P','F8K-41R'],1,'Nur die zweite Zeichenfolge stimmt exakt.'],
 ['konzentration','Welche Zahl kommt in der Folge zweimal vor? 4, 7, 2, 9, 7, 5',['4','2','9','7'],3,'Die 7 kommt zweimal vor.'],
 ['raum','Wie viele Kanten hat ein Würfel?',['6','8','12','16'],2,'Ein Würfel hat zwölf Kanten.'],
 ['raum','Wie viele Ecken hat ein Quader?',['4','6','8','12'],2,'Ein Quader hat acht Ecken.'],
 ['raum','Welche Form hat die Grundfläche eines Zylinders?',['Dreieck','Kreis','Quadrat','Rechteck'],1,'Ein Zylinder besitzt kreisförmige Grund- und Deckfläche.']
 ];
 // 70+ unterschiedliche Rechenaufgaben pro Seitenaufruf mit zufälligen Zahlen und plausiblen Antwortmöglichkeiten.
 for(let n=0;n<80;n++){
  const a=12+Math.floor(Math.random()*88),b=3+Math.floor(Math.random()*17),op=n%4;
  let prompt,correct,wrong,explain;
  if(op===0){correct=a+b;prompt='Berechne: '+a+' + '+b+'.';explain=a+' + '+b+' = '+correct+'.';wrong=[correct+2,correct-3,correct+10]}
  else if(op===1){const x=Math.max(a,b),y=Math.min(a,b);correct=x-y;prompt='Berechne: '+x+' − '+y+'.';explain=x+' − '+y+' = '+correct+'.';wrong=[correct+2,correct+5,correct-1]}
  else if(op===2){correct=a*b;prompt='Berechne: '+a+' × '+b+'.';explain=a+' × '+b+' = '+correct+'.';wrong=[correct+b,correct-a,correct+10]}
  else {const base=2+Math.floor(Math.random()*18),mult=2+Math.floor(Math.random()*12);correct=base;prompt='Ein Materiallager enthält '+(base*mult)+' gleiche Gegenstände in '+mult+' Kisten. Wie viele sind in jeder Kiste?';explain=(base*mult)+' ÷ '+mult+' = '+base+'.';wrong=[base+1,Math.max(1,base-2),base+3]}
  const opts=[correct,...wrong].map(String);
  q.push(['mathe',prompt,opts,0,explain]);
 }
 window.BF_EXTRA_QUESTIONS=q;
})();