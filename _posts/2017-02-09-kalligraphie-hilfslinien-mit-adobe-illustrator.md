---
date: 2017-02-09 20:45:45 +0100
title: Kalligraphie Hilfslinien in 4 Pfaden
subtitle: Ein Adobe Illustrator Tutorial
name: KHmAI
tags: [tutorial, adobe illustrator, calligraphy, lettering]
description: Wie man mit Adobe Illustrator Hilflinien f&uuml;r Kalligraphie zeichnet
lang: de
category: de
---
Mir ist aufgefallen, dass es nicht wirklich Tutorials zum Thema Kalligraphie Linienblätter in Adobe Illustrator (ich verwende CC) gibt.

Es gibt verschiedene WEge wie man Hilfslinien erstellen kann, ich hab's früher mit einem [online generator](http://liniuszek.prv.pl/) gemacht, mit dem hab ich auch die Downloads auf meiner [freebies seite](http://halfapx.com/de/freebies) erstellt, aber irgendwann hab ich mich dann doch für Illustrator entschieden, weil es einfach schlussendlich schneller geht kurz Farben anzupassen, x-Höhen anzupassen, Ränder oder Papiergrösse etc.

Also hier ein Illustrator Tutorial wie man mit nur vier Pfaden eine super schnell anpassbare Linienhilfe erstellt.

<!-- more -->
# Videos
Ich hab kurze Videos gefilmt, wie ich das erstellt habe, ich hab dabei versucht extra langsam zu arbeiten und möglichst alle Fenster zu suchen anstelle über Shortcuts zu gehen, es sollte also auch so mehr oder weniger nachvollziehbar sein.

## Linien erstellen
<div class="video"><iframe src="https://www.youtube.com/embed/Y23fViAcsxU" frameborder="0" allowfullscreen></iframe></div>


# Übersetzung
Ich verwende selbst Illustrator auf Englisch, habe aber hier Deutsche Übersetzungen in der Erklärung drin. Übersetzung gefunden auf [drweb.de](https://www.drweb.de/magazin/adobe-illustrator-fuer-tutorial-freunde-die-komplette-uebersetzung-von-englisch-zu-deutsch-53457/).

# 1. Seite einrichten
Als erstes erstellen wir die Seite und fügen Ränder ein.
Ich hab das a4 Preset genommen, verwendet hier einfach das Papier auf das ihr drucken wollt. Preset ist CMYK und 300dpi.

Ich setze meine Ränder auf 15mm, dort fügen wir Hilfslinien ein. Falls ihr keine MM habt könnt ihr das ändern unter: Bearbeiten>Voreinstellungen>Einheit (Windows) oder Illustrator>Voreinstellungen>Einheit (Mac OS).

Falls die Lineale nicht sichtbar sind einmal sichtbar machen (Ctrl+R &middot; Cmd+R) und dann zwei horizontale und zwei vertikale Hilfslinien ziehen.

[![guides]({{site.img_dir}}/guides.png)]({{site.img_dir}}/guides.png)

Den ersten der beiden vertikalen anklicken machen und das Transformierungsfenster aufmachen (Shift+f8). Hier den x-Wert auf den Rand setzen, also in meinem Fall 15mm.

Der zweite Vertikale muss dann auf Breite - Rand gesetzt werden. Also in meinem Fall 210mm - 15mm = 195mm.

Beim Horizontalen ist es dann einfach der Y-Wert funktioniert aber gleich. Einmal Rand, Einmal Höhe - Rand.

[![margin]({{site.img_dir}}/margin.png)]({{site.img_dir}}/margin.png)

Okay, jetzt zu den eigentlichen Linien.

# 2. Hauptlinien
Ziehe eine LInie von Links nach rechtsm die horizontal grade ist, halte Shift gedrückt, dann ist sie sicher nicht schief.

Jetzt musst du wissen wie deine Linien aussehen sollen. Ich erstelle ein Copperplate Blatt, mit der Ratio 1.5:1:1.5, für Engrosser's Script ist 2:1:2 üblicher, aber ich mag das Verhältnis nicht so. Meine x-Höhe ist 5mm. Und dann möchte ich noch Zwischenlinien also alle 2.5mm eine gepunktete Linie zur Orientierung wo i-Punkte hingehören oder ts anfangen.

Also wir brauchen 4 durchgestrichene Linien die je 5mm auseinander sind und dann 5 gepunktete Linien die da jeweils dazwischen sind.

Hier wie man das macht:

Selektiere die Linie und gehe dann zu 
Select your line and then go to Effekt>Verzerrungs- und Transformationsfilter>Transformieren. Beim Verschieben dann die x-Höhe beim vertikalen Wert angeben. 3 Kopien erstellen und die Vorschau anmachen zum sehen obs richtig ist.

[![transformeffect]({{site.img_dir}}/transformeffect.png)]({{site.img_dir}}/transformeffect.png)

# 3. Zwischenlinien
Dann duplizieren wir und fügen an der gleichen stelle wieder ein. Ctrl+C (Cmd+C for Mac), Ctrl+F (Cmd+F). Dann enter drücken und das Verschieben Fenster geht auf.

Beim vertikalen dann die Hälfte der x-Höhe in negativ eingeben. Also -2.5mm für mich.

[![move]({{site.img_dir}}/move.png)]({{site.img_dir}}/move.png)

Das selektiert lassen und das Kontur fenster aufmachen(Ctrl+f10 &middot; Cmd+f10). Dann eine gestrichelte linie erstellen, für gepunkted den dash auf 0 stellen und der zwischenraum auf etwas wie .6 und dann statt eckige ecken runde ecken auswählen.

[![dash]({{site.img_dir}}/dash.png)]({{site.img_dir}}/dash.png)

[![dotted]({{site.img_dir}}/dotted.png)]({{site.img_dir}}/dotted.png)

Da noch einie LInie fehlt müssen wir noch eine Kopie mehr haben in unserem Effekt. Dafür das Aussehen Fenster öffnen (Shift+f6), Dann sollte die Transformation dort sein und ein fx symbol. Dieses anklicken und dann den effekt bearbeiten, eine Kopie mehr und das ist schon alles was es bruacht. 

[![editfx]({{site.img_dir}}/editfx.png)]({{site.img_dir}}/editfx.png)

Jetzt zu den schrägen Linien.

# 4. Schräglinien
Erstelle eine Vertikale Linie, dann das Transformations Fenster öffnen. (shift+f8) und den Winkel eingeben. Für mich ist das 55°. 

[![degree]({{site.img_dir}}/degree.png)]({{site.img_dir}}/degree.png)

Auf den Linien positionieren und etwas kürzer machen, falls sie zu lang war. Und dann wieder der gleiche Effekt anwenden.

Ich mag meine Linien recht eng zusammen. 4mm auseinander und dann 44 Kopien.

[![slant]({{site.img_dir}}/slant.png)]({{site.img_dir}}/slant.png)

Dann kann man die Linien anpassen wie man möchte optisch.

# (4.5) Grundlinie
Ich mag's wenn meine Grundlinie etwas dicker ist, dafür einfach nochmal einen neuen Pfad erstellen und denn oben drüber legen.

# 5. Die Seite füllen
Jetzt haben wir mal eine Zeile, um die ganze Page zu füllen, verwenden wir nochmal den gleichen Effekt.

Die Elemente der Zeile alle markieren und gruppieren (Ctrl+G &middot; Cmd+G). Die oberste Linie platzieren und dann den Effekt anwenden.

Du musst wissen wie hoch Deine Zeile ist (20mm in meinem Fall) und dann noch den Abstand, den du haben möchtest, das ist der Wert den du brauchst.

[![page]({{site.img_dir}}/page.png)]({{site.img_dir}}/page.png)

Und das war's.

# Extra: Linien anpassen und Illustrator Hilfslinien erstellen
Für die Hilfslinien hab ich Ctrl+5 gedrückt, am Ende. (Cmd+5 auf Mac).
<div class="video"><iframe src="https://www.youtube.com/embed/3MH9GqmX2EM" frameborder="0" allowfullscreen></iframe></div>
