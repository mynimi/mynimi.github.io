---
lang: de
date: 2016-01-11 14:07:27 +0100
title: Ein jekyll Blog mit initium
name: EjBmi
subtitle: Wie man mit initium einen jekyll Blog erstellt
tags: [initium, jekyll, tutorial, theme, ♦♦♦♦]
description: Eine Einf&uuml;hrung zur Benutzung des jekyll starter themes initium
---
Vor einer Weile habe ich es endlich geschafft mein jekyll starter theme "initium;" zu veröffentlichen. Da es ein vollgepacktes theme ist, möchte ich in diesem Post eine Einführung zur Benutzung des Themes geben.
<!-- more -->
<a href="/themes/initium/" class="btn">Initium;</a>

# 0. Was ist initium und ist es für mich?
Okay, das ist die Grundfrage, die sich jeder am Anfang stellen sollte, ehe er (oder sie) hier überhaupt weiterliest.
Initium ist ein jekyll starter theme, also ein theme das Designtechnisch nicht viel mehr als die Grundstyles bietet und eigentlich dafür gemacht wurde, bloss die Grundfunktionalitäten einzufügen. Das default start-theme von jekyll bietet relativ wenig Möglichkeiten an. initium enthält all die Dinge, die ich mir von einem ersten theme gewünscht hätte. Wenn ich gleich von Beginn all das gehabt hätte, hätte ich mir tagelanges googlen und "trial und error" von vielen Dingen erspart. Initium ist das Theme, mit dem ich die meisten meiner jekyll Projekte beginne, es ist die Grundlage meiner eigenen Website und hat folgende Features:

## Features
* Mehrsprachigkeit
* Portfolio basierend auf collections
* Blog posts mit featured image, das als headerbild angezeigt wird
* Ein dynamisches Menu
* Archiv von allen Posts in einer Tabelle
* Blog
* Statische Seiten
* Index-Seite mit neusten Posts und Portfolio Einträgen
* Sidebar
* Support für Galerien
* Verwendet Sass, Jade und Grunt
* Grunt-deploy garantiert, Hosting auf GitHub mit jekyll 3.

Falls ein Feature fehlt, das ihr euch unbedingt wünschen würdet, gebt Bescheid, ich werde gucken, was sich machen lässt.

## Für wen ist initium?
Okay, die Frage was initium ist, wäre geklärt. Doch ob initium für dich geeignet ist, das ist die wohl viel wichtigere Frage.

Initium richtet sich an Leute, die bereits mit jekyll gearbeitet haben, oder bereit sind, erst zu lernen wie jekyll funktioniert, ehe sie sich initium widmen. Initium ist für all die jekyll-User geschrieben, die sich mehr von ihren themes wünschen, aber eigentlich lieber Personalisieren als dass sie Funktionalität coden müssen. Initium bietet alle Features aber noch kein fertiges Design.

Initium verwendet ausserdem den Task-Runner Grunt, wenn man sich damit schon einmal befasst hat, wäre sicher gut, doch da gruntsätzlich keine Anpassungen von Nöten sind, reicht es, wenn man ein Terminal bedienen kann.

initium wurde mit jade und Sass geschrieben. Kenntnisse der beiden Preprocessors wären also ein Vorteil. Beide sind schnell zu lernen und bringen vielen Vorteile, weil ise schneller zu schreiben sind, man kann aber auch mit HTML und CSS arbeiten.


# 1. Installation
In diesem Abschnitt werden wir uns ansehen, wie das die Installation von initium aussieht.

## 1.1 Voraussetzungen
Ich gehe davon aus, dass grunt, node, ruby, sass, git und jekyll vorinstalliert sind. Falls dies noch nicht der Fall ist, findet ihr mit googlen viele Tutorials, wie die Installation von Statten geht.

Gruntfile-Erstellung ist nicht nötig, das machen wir im Repo.

## 1.2 Erstellung Git Repo
Bevor wir loslegen können, müssen wir initium herunterladen. Dann erstellen wir ein neues Repo in unserem Git-Account und fügen initium diesem Repo hinzu. Ausserdem passen wir unser gruntfile schon einmal an.
Wie all das funktioniert könnt ihr im unteren Video sehen.

<div class="video">
    <iframe src="https://www.youtube.com/embed/uc1tv6AlEyc" frameborder="0" allowfullscreen></iframe>
</div>

Wie ihr vielleicht wisst gibt es zwei Möglichkeiten, wie ihr GitHub Pages verwenden könnt. Einmal als eure persönliche Seite. Dann muss euer Repo `username.github.io` benannt werden und ihr solltet nicht in den master-branch pushen sondern einen neuen branch namens source für den Code erstellen.
Oder ihr erstellt ein anderes repo und hostet auf einem gh-pages branch. Der Source Code bleibt dann auf dem master branch. Wenn ihr das mit dem gh-pages branch macht, wird eure Seite dann unter der URL `username.github.io/reponame` auffindbar sein. Ich werde mit diesem Schema arbeiten, weil es wohl die häufigere Variante ist.

*Alternativ* könnt ihr das Repo auch einfach forken, dann habt ihr aber die ganze bestehende history drin. Ich persönlich fange lieber von Null an, darum mache ich es so. Aber macht was euch lieber ist.

## 1.3 Grunt
Grunt ist ein Task-Runner und hilft dabei, den ganzen jekyll Prozess zu automatisieren. Grunt braucht leider recht viel Speicherplatz, was ein ziemlich grosser Nachteil ist, wenn ihr viele jekyll Projekte habt (so wie ich...), aber es ist es auf jeden Fall wert.

### 1.3.1 Installieren
Installieren tut ihr den lokalen grunt in einem terminal, in eurem repository-Ordner. Mit npm install.
Und das dauert eine Weile.

![npm install terminal]({{ site.img_dir }}/npm-install.png)

### 1.3.2 Bilder zuschneiden und verkleinern
Ich habe initium zwei Module hinzugefügt, die für das Zuschneiden der Preview-Bilder zuständig sind und die Bilder komprimieren. Imagemin ist leider extrem langsam, doch es lohnt sich auf jeden Fall. Der img-Ordner ist der, in den ihr eure Bilder einfügt. Responsive_images wird dann die Bilder zuschneiden und imagemin wird alles komprimieren und im Ordner media/compressed einfügen. Dort sind die files nicht mehr in einzelnen Ordnern sortiert, sondern alle beisammen.

### 1.3.3 Die einzelnen Commands
Okay, es gibt folgende grunt commands:

```bash
grunt serve
```
Dieser Task ist grundsätzlich jekyll serve, er launched den server für die Live-Ansicht der Seite unter http://localhost:4000

```bash
grunt
```
Das ist der Default-Task, der alles ausführt. Als erstes führt er die beinden Bild-Tasks aus, dann minifiziert er die JavaScript files, compiled Sass, lässt Autoprefixer drüber, compiled jade, baut die Seite, kopiert die js und css files, öffnet die Live-Ansicht und überwacht dann den Ordner, ob Änderungen gemacht werden. Wenn Änderungen gemacht werden, führt grunt die entsprechenden Tasks aus, um die Seite zu aktualisieren.

```bash
grunt build
```
Dieser Task führt praktisch alles von grunt aus, bis auf den watch-task und den Öffnungs-Task. Er baut also die Seite, ohne dass er sie uns am Ende zeigt.

```bash
grunt deploy
```
Dieser Task ist für die Live-Schaltung zuständig. Ich gehe später noch genauer darauf ein. Vorher minifiziert dieser Command aber auch noch alle HTML-Files.

```bash
grunt deploy-pretty
```
Dieser Task minifiziert die HTML-Files nicht, sondern lässt prettify drüber laufen, formatiert das HTML also schön, hier kommt es drauf an, was ihr bei eurem HTML lieber mögt.


# 2. Hochladen
Okay, das Hochladen ist etwas kompliziert, darum eine etwas längere Erklärung.

GitHub selbst hat jekyll auf den Servern installiert, allerdings eine ältere Version als die aktuelle jekyll Version (3.0). Jekyll 3 hat viele Veränderungen gebracht, dabei auch Updates zum Beispiel von liquid. Liquid ist die SPrache, mit der die ganze jekyll-Logik programmiert wird. Das heisst in 3.0 wurden Änderungen vorgestellt, die zum Besseren sind.
Was GitHub ausserdem auch macht, ist eine Blockade aller Plugins, die jekyll bietet. Das mag ich nicht besonders, weil ich zum Teil echt gerne Plugins verwende. initium verwendet Plugins bei der Erstellung von Tag-Pages. Und wenn ihr das Internet durchforstet findet ihr viele coole Plugins. Ich möchte all diese benutzen können.

Es gibt eine Möglichkeit genau die auf dem Laptop generierte Seite auf GitHub zu hosten. Dabei wird der Inhalt des generierten Ordners auf den Branch hochgeladen, der für das hosting verwendet wird, also in meinem Fall jetzt gh-pages und genau diese HTML-Files werden dann gehostet. Das ganze umzukopieren erfordert zig git commands. Grunt Buildcontrol, welches für den deploy Command verwendet wird, führt all diese Commands aus und sorgt somit dafür, dass das Hosten nur ein einziger command länger wird, als wenn ich GitHub das generieren der Seite überlassen würde. Und ich bin bereit einen command mehr einzugeben, damit ich genau das bekomme, was ich haben will.

# 3. Personalisieren
initium ist ein Starter Theme. Start-Themes wollen personalisiert werden.
Am besten ist es natürlich, wenn ihr möglichst versucht euch mal den ganzen Code durchzugucken und versucht den ganzen Aufbau zu verstehen. Die ganzen Layout-Files sind wie bereits erwähnt in jade geschrieben. Wenn ihr aber lieber alleine mit HTML arbeitet, findet ihr die Files auch dort. Dann müssted ihr allerdings im gruntfile alles was mit jade zu tun hat entfernen, sonst überschreibt der compiler alle Änderungen. ODer ihr löscht einfach den ganzen Jade-Ordner in den Layouts. Gleiches gilt auch für den Sass-Ordner und die CSS. CSS ist allerding minifiziert, eventuell müsst ihr im Gruntfile den output erst ändern, dann einmal Sass laufen lassen und dann den Ordner löschen. Aber ich empfehle vor allem Sass absolut *jedem* und denke es lohnt sich, sich das mal anzusehen.

## 3.0 Config
Bevor es allgemein losgeht, müssen wir im config-file ein paar Dinge anpassen.

Im Folgenden all die Dinge, die man ändern kann (und soll) Mit `#` beginnt ein Kommentar, der die Variable und die Ausprägung noch einmal erklärt.

File: `_config.yml`

```yaml
name: initium; # der Name der Seite
url: http://halfapx.com # Die Grund-URL der Seite. Per default ist das http://username.github.io
baseurl: /jekyll-starter # Base-URL ist hier der repository-Name in meinem Beispiel also /my-initium, das ist immer so, wenn ihr auf einem gh-pages Branch hosted
custom_logo: initium.png # dazu gleich unten mehr
destination: jekyllbuild # Default ist _site, doch da Grunt nicht mit Ordnern arbeiten kann, die mit einem _ beginnen, habe ich den Ordner umbenannt, ändert hier nichts.
excerpt_separator: "<!-- more -->" # Benutzt das in euren Posts um den Break zu setzen. Alles was vor diesem Separator steht, wird auf der Übersichtsseite zu sehen sein.
```

## 3.1 Headerbild Hochladen
Wenn ihr anstelle des Titels als Text ein Bild verwenden wollt, könnt ihr das einfach im config-file bei `custom_logo` hinzufügen. Es geht hier jedes Format, das in einen image-tag passt. Das Bild hat aktuell eine maximale Breite von 300px, aber das könnt ihr im CSS ändern.

## 3.2 Style-Settings
Hier möchte ich einfach das Settings-File betonen. Viele Sachen können alleine dort angepasst werden. Es ist der Ort, an dem die CSS gesteuert wird. Schriften, Farben, Grössen all das wird an diesem Ort angepasst. Passt hier Variabeln an, um mit eurer Personalisierung zu starten und geht dann zu den anderen Sass-Files über.

Das Settings-File findet ihr unter `sass/base/_settings.scss`

## 3.4 grössere Anpassungen
Wie ihr Code-Anpassungen macht, wird wohl klar sein. Startet Grunt, öffnet den Code, spielt herum und seht wie sich was verändert.

# 4. Mehrsprachigkeit
initium hat ein Feature für die Mehrsprachigkeit. Jede Seite, die in mehreren Sprachen verfügbar ist, braucht also einmal eine `lang`-Variable im Front Matter und eine `id` BlogPosts brauchen statt der id einen `name` Dabei haben immer jeweils die gleichen Versionen eines Files die gleiche id/name.
Bei allen Files die nicht Blogposts sind, müsst ihr für die Version, die nicht in eurer default-sprache sind, die `permalink`-Variable anpassen. Bei den Posts fügt ihr einfach eine `category` mit eurem Kürzel hinzu. Also permalinks hätten dann immer `/en/` am Anfang und posts `category: en` Alternativ könnt ihr die pages auch einfach in einen Ordner mit eurem Kürzel schmeissen, das hätte die gleiche Folge, ich hab den Permalink lieber. Wenn ihr die Kategorie nicht mögt, könnt ihr auch überall eine permalink-Variable auswählen.

Ich habe hier jetzt Deutsch als Default-Sprache und English für den Rest verwendet. Wenn ihr es anders wollt, passt einfach die lang-Variabeln an und die Permalinks an.

Eine Version von initium ohne Mehrsprachigkeit ist geplant und wird demnächst veröffentlicht.

# 5. Content Erstellen
Wie man Inhalt erstellt ist grundsätzlich für alle jekyll pages gleich, aber hier gehe ich nochmal auf die Front-Matter Möglichkeiten ein.

## 5.1 Pages schreiben
Pages haben folgende Front Matter Variabeln (Kommentar nach dem `#`)

```yaml
---
layout: page # optional, da bereits in den defaults definiert (in _config.yml)
group: "navigation-02" # Das ist für das Einfügen in das Menu. Die Zahl am Ende bestimmt die Reihenfolge im Menu. Diese Page erscheint an zweiter Stelle
title: Blog # Titel der Page
page-title: no # Wenn diese Variable eingefügt ist, wir der Seiten-Titel nicht angezeigt. Macht Sinn auf einer Übersichtsseite wie Blog.
name: blog # Die id für die Mehrsprachigkeit
lang: en # definition der Sprache
permalink: /en/blog/ # Permalink
description: The blog overview. # Meta-Beschreibung, die wird dan z.Bsp. in Google Resultaten angezeigt
header-pic: image.jpg # fall ein Header-Bild gewünscht ist, wird dieses als Hintergrund eingefügt
site-title-display: false # Falls der Titel der Site (also initium) nicht angezeigt werden soll, diese Variable einfügen
---
```

Galerien können in Pages auch eingefügt werden, wie steht in 5.4

## 5.2 Post schreiben
Posts haben folgende Variabel-Möglichkeiten im Front Matter

```yaml
---
layout: post # überfällig, da default definiert
lang: en #Sprache
category: en # Falls keine Permalink-Variable gesetzt wird, die Kategory für die Nicht-Default-Sprache
title: Header Image # Post Titel
name: hi1 # ID bei Posts name, weil jeder Post automatisch eine eigene id hat.
subtitle: a post with header image, and no title display # Untertitel, falls gewünscht
tags: [standard, header-pic] # Tags für den Post
description: Ein Post für initium; # Meta-Beschreibung
header-pic: image.jpg # Header-Bild
site-title-display: false # Und wieder falls der Haupt-Site-Titel nicht angezeigt werden soll, diese Variable hinzufügen
---
```
Galerien können in Posts auch eingefügt werden, wie steht in 5.4

## 5.3 Portfolio Eintrag hinzufügen
Portfolio Einträge werden in colections erstellt. Sie haben die Galerien allerdings direkt eingebaut.

```yaml
---
title: 3D Blooms # Titel
subtitle: fractal art # Untertitel
category: [fractal] # Kategorie
lang: en # Sprache
name: 3dblooms # ID
header-pic: gold-beam.png # Header-Bild
permalink: /en/portfolio/3d-blooms/ # Permalink
description: Ein Portfolio-Eintrag für initium; # Meta-Beschreibung
site-title-display: false # Und wieder falls der Haupt-Site-Titel nicht angezeigt werden soll, diese Variable hinzufügen
gallery: # hier beginnt eine Galerie
    - images:
      - filename: add-sparkle.png # Name der Datei
        alttext: Add a little Sparkle #Beschreibung
      - filename: bloom-flat.png
        alttext: Lying in front of you
      - filename: bubbly-blossom.png
        alttext: At the bottom of the ocean
      - filename: Exotic.png
        alttext: Exotic nights
      - filename: flower-perspective.png
        alttext: Dalia
      - filename: gold-beam.png
        alttext: In a golden light
---
```

## 5.4 Galerien
Galerien werden im Front Matter definiert, wie beim Portfolio gesehen, damit die Galerie allerdings zum Content hinzugefügt wird, muss bei Pages und Posts noch ein include platzert werden. Das sieht so aus:

```liquid
{% raw %}{% include gallery.html %}{% endraw %}
```

# Fragen?
So, das wäre meine kurze Einführung in initium gewesen. Falls ihr Fragen habt, oder falls euch noch Dinge auffallen, die nicht funktionieren oder sonstige Probleme bereiten, bitte immer gerne melden. Probleme gerne in GitHub als ![issue](https://github.com/mynimi/jekyll-starter/issues).
Und dann bleibt mir nichts anderes übrig als viel Spass beim Experimentieren zu wünschen.
