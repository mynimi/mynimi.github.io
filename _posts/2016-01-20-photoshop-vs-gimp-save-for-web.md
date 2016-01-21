---
date: 2016-01-20 23:22:24 +0100
title: Photoshop vs GIMP&colon; Save for Web [Toolbox Smackdown]
name: PvGSfW[S
subtitle: Wer schneidet besser beim Weboptimierten Speichern ab?
tags: [toolbox smackdown, save for web, photoshop, gimp]
description: Ein Vergleich zwischen Photoshop und Gimp welches der beiden Programme Bilder f&uuml;r das Web speichert
lang: de
---
Toolbox Smackdown. In dieser neuen Serie möchte ich Open Source Programme mit ihren teuren Pendants bezüglich gewisser Skills vergleichen. Hier werde ich vorwiegend über Illustrator und Inkscape sowie Photoshop und GIMP sprechen. Ich weiss, das hier hat nichts direkt mit Code zutun, aber wenn es um Webdesign und die ganze Identität einer Website geht, dann ist Bildmaterial sicher nicht zu unterschätzen. Und ich dachte mal ein bisschen Content, der nicht mit Code zu tun hat, kann auch mal nicht schaden.

In diesem ersten Teil des Toolbox Smackdowns möchte ich GIMP und Photoshop bezüglich ihrer Fähigkeiten testen, wenn es um das Weboptimierte Speichern geht.
<!-- more -->

### Märchenstunde
Zu Beginn vielleicht etwas Vorgeschichte. Ich kann mich erinnern, dass ich GIMP zum ersten Mal vor etwa 10 Jahren vor mir hatte. Ich war also um die 12 als ich die erste Begegnung mit diesem Programm hatte und ich liebte es, weil es so viel toller war als Paint, mit dem ich meine Wallpaper bis zu diesem Zeitpunkt gebastelt hatte. Seither war ich immer jemand, der GIMP auf dem Computer hatte und sich mit dem Programm einarbeitete. Die ersten Versuche mit Photoshop machte ich erst viel später. Gekauft habe ich Photoshop erst in der Version CS6, als ich es mir zu einem Studentenpreis besorgen konnte. Meine Geschichte mit GIMP geht also schon eine Weile zurück. Und auch wenn ich mittlerweile GIMP für gewöhnlich nur noch öffne, um weisse Hintergründe zu entfernen, habe ich wohl mehr eine emotionale Verbindung zu GIMP als Photoshop. Aber natürlich liebe ich mein PS schon ziemlich.

### Versionen
Ich verwende für diesen Test von beiden Programmen die aktuellste Version.
Photoshop CC 2015 1.1 Release
GIMP 2.8.16

### Bildmaterial
Ich dachte ich teste das mal mit den verschiedenen Bildformaten, die man so benutzt. Bei den Einstellungen habe ich mich jeweils für die Defaults entschieden.

Original Bilder:
[![chichen itza original]({{ site.img_dir }}/chichenitza_original.jpg)]({{ site.img_dir }}/chichenitza_original.jpg)

Klassiches Beispiel für ein jpg. Foto wurde nach der Retusche mit Photoshop verkleinert, aber nicht fürs Web gespeichert. Grösse: 1.52 MB

[![transparent original]({{ site.img_dir }}/transparent_original.png)]({{ site.img_dir }}/transparent_original.png)

PNG Bild mit transparentem Hintergrund und Halbtransparentem Textschatten. Bild wurde mit Photoshop erstellt, aber nicht fürs Web gespeichert Grösse: 47.1 KB

[![animation original]({{ site.img_dir }}/typing_original.gif)]({{ site.img_dir }}/typing_original.gif)

GIF-Animation. Animation wurde mit [LICEcap](http://www.cockos.com/licecap/) erstellt. Grösse 3.83 KB

### Photoshop
Okay, ein Bild fürs Web zu speichern ist in Photoshop ein Kinderspiel.
Einfach Ctrl+Alt+Shift+S (auf Mac Ctrl durch Cmd ersetzen) und das Fenster öffnet sich. Photoshop bietet Möglichkeiten fürs Anpassen. Ich bin mit folgenden Einstellungen gegangen (Defaults)

#### JPG
[![save for web jpg ps]({{ site.img_dir }}/save_jpg_ps.jpg)]({{ site.img_dir }}/save_jpg_ps.jpg)
[![chichen itza ps]({{ site.img_dir }}/chichenitza_ps.jpg)]({{ site.img_dir }}/chichenitza_ps.jpg)

#### PNG
[![save for web png ps]({{ site.img_dir }}/save_png_ps.jpg)]({{ site.img_dir }}/save_png_ps.jpg)
[![transparent ps]({{ site.img_dir }}/transparent_ps.png)]({{ site.img_dir }}/transparent_ps.png)

#### GIF
[![save for web ps]({{ site.img_dir }}/save_gif_ps.jpg)]({{ site.img_dir }}/save_gif_ps.jpg)
[![animation ps]({{ site.img_dir }}/typing_ps.gif)]({{ site.img_dir }}/typing_ps.gif)

### GIMP
Bei Gimp gibt es kein spezifisches Save For Web, GIMP komprimiert beim allgemeinen Exportieren. Shift+Ctrl+E

Einstellungen wieder in den Bildern

#### JPG
[![save for web jpg gimp]({{ site.img_dir }}/save_jpg_gimp.jpg)]({{ site.img_dir }}/save_jpg_gimp.jpg)
[![chichen itza gimp]({{ site.img_dir }}/chichenitza_gimp.jpg)]({{ site.img_dir }}/chichenitza_gimp.jpg)

#### PNG
[![save for web png gimp]({{ site.img_dir }}/save_png_gimp.jpg)]({{ site.img_dir }}/save_png_gimp.jpg)
[![transparent gimp]({{ site.img_dir }}/transparent_gimp.png)]({{ site.img_dir }}/transparent_gimp.png)

#### GIF
[![save for web gimp]({{ site.img_dir }}/save_gif_gimp.jpg)]({{ site.img_dir }}/save_gif_gimp.jpg)
[![animation gimp]({{ site.img_dir }}/typing_gimp.gif)]({{ site.img_dir }}/typing_gimp.gif)

### Resultat

#### Filegrösse

 File | Original | Photoshop | GIMP
--- | --- | --- | ---
JPG | 1.52 MB | 247 KB | 235 KB
PNG | 47.1 KB | 48.2 KB | 32.3 KB
GIF | 3.83 KB | 4.07 KB | 3.37 KB

Ich war überrascht, muss ich ehrlich sagen. Ich habe bei Save For Web eigentlich nie daran gedacht, das ganze mit Gimp zu machen. Wahrscheinlich vor allem weil das Verkleinern der Bilder nicht direkt im gleichen Schritt geht, bei Gimp, wie es bei Photoshop der Fall ist und meistens bin ich jemand, der Bilder verkleinert.
Ich versuche vor allem mit JPG zu gehen, wann immer es geht. PNG und GIF wähle ich immer nur dann, wenn ich entweder mit Transparenzen oder Animationen wähle, aber es hat mich definitiv überrascht, dass das kostenlose Programm die Files kleiner gemacht hat.

#### Qualität
Wie ist die Qualität der Files?
Ich habe im folgenden ein grosses File für euch, wo alle drei JPGs nebeneinander zu sehen sind. Beide liefern natürlich nicht so qualitativ hochwertige Bilder wie es ein unkomprimiertes Bild liefern würde (was man vor allem im Himmel des Fotos sehen kann) aber keines der Bilder sieht schlecht aus. Für das Internet reichen die Bilder auf jeden Fall. Rein optisch könnte ich nicht sagen, dass eines der Bilder schlechter auf mich wirkt. Bei PNG und GIF sieht man bei meinen Beispielen wirklick auch im Vergleich zum Original mit blossem Augen keinen Unterschied.

[![comparison jpg]({{ site.img_dir }}/chichenitza_all.jpg)]({{ site.img_dir }}/chichenitza_all.jpg)
Bild anklicken um in voller Grösse zu sehen.

#### Wer gewinnt?
Geht es nur danach, wie gross die Files im Endeffekt sind, dann ist GIMP bei diesem Smackdown der Gewinner. Ich finde es auch schön, dass GIMP Bilder automatisch komprimiert, da man damit definitiv nicht riesengrosse Bilder bekommt. Aber dadurch, dass das Save For Web Feature nicht so direkt existiert wie bei Photoshop wird es für jemanden der nach Kompressionen sucht etwas schwerer zu finden. Ausserdem kommt GIMP nicht mit der Möglichkeit daher, dass man die Bilder vor dem Speichern nochmal kleiner machen kann, was mein absoslut meist verwendetes Feature bei Photoshop Save For Web ist.

Im Durchschnitt würde ich mich deswegen für ein Unentschieden entscheiden.
