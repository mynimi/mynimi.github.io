---
date: 2016-03-29 21:21:19 +0200
title: Sass Bildslider inklusive Textanimation
name: SBiT
subtitle: Ein responsiver Bildslider mit Textoverlay, ganz ohne JavaScript
tags: [sass, tutorial, no javascript, slider, mixin, ♦♦♦♦]
description: Ein Bildslider ohne JavaScript inklusive Animationen. Geschrieben mit Sass.
lang: de
category: de
---
Vor ein paar Monaten habe ich bereits gezeigt, wie man mit einem Sass-Mixin einen responsiven Bildslider schreiben kann. Vor einer Weile wurde ich dann allerdings gefragt, ob ich einen Bildslider mit Textoverlay schreiben könnte. Im Zuge dessen, habe ich den Code von damals erweitert. Diesen erweiterten Code, möchte ich heute vorstellen.
In dem Zuge auch noch einmal entschuldigung, dass es so lange gedauert hat. Studium und Arbeit lassen wenig Zeit fürs bloggen, aber ich will mich besser.
<!-- more -->

Falls ihr den ursprünglichen Code noch nicht kennt, lest ihr euch den am besten noch einmal schnell durch.
<a class="btn" href="/responsiver-image-slider-mit-sass/">Image Slider mit Sass</a>

Auch dieses Mal gibt es ein Demo. Wer es sich noch separat ansehen will, klicke einmal bitte <a href="http://halfapx.com/demo/responsive-image-and-text-slider-with-sass/">hier</a>.

<iframe src="/demo/responsive-image-and-text-slider-with-sass/" width="100%" height="400px"></iframe>

# Markup
Das Markup funktioniert noch immer gleich, doch diesmal fügen wir noch Text ein. In diesem Fall habe ich mich für einen Slider entschieden, der den ganzen Bildschirm abdeckt, also keinen Padding-Hack. Das heisst, dass wir keinen size-control container brauchen (ansonsten funktioniert das noch genau gleich, wie beim letzten Mal) Wir erweitern allerdings die Image-Container um einen container der den Inhalt enthält. Diesen werden wir dann animieren.
Im Content kann alles Mögliche platziert werden, was Inahlt angeht. Ich habe mich für den Titel entschieden.

Jade:

```slim
#slider
    .wrap
        .img(style="background-image: url(/img/posts/responsive-slider-with-sass-1.png)")
            .slider-content
                h1 Floating
        .img(style="background-image: url(/img/posts/responsive-slider-with-sass-2.png)")
            .slider-content
                h1 Start of Spring
        .img(style="background-image: url(/img/posts/responsive-slider-with-sass-3.png)")
            .slider-content
                h1 Honey Drops
        .img(style="background-image: url(/img/posts/responsive-slider-with-sass-4.png)")
            .slider-content
                h1 Dalia
        .img(style="background-image: url(/img/posts/responsive-slider-with-sass-5.png)")
            .slider-content
                h1 Exotic Dreams
        .img(style="background-image: url(/img/posts/responsive-slider-with-sass-6.png)")
            .slider-content
                h1 Ice Queen
        .img(style="background-image: url(/img/posts/responsive-slider-with-sass-1.png)")
            .slider-content
                h1 Floating
```

HTML:

```html
<div id="slider">
  <div class="wrap">
    <div style="background-image: url(/img/posts/responsive-slider-with-sass-1.png)" class="img">
      <div class="slider-content">
        <h1>Floating</h1>
      </div>
    </div>
    <div style="background-image: url(/img/posts/responsive-slider-with-sass-2.png)" class="img">
      <div class="slider-content">
        <h1>Start of Spring</h1>
      </div>
    </div>
    <div style="background-image: url(/img/posts/responsive-slider-with-sass-3.png)" class="img">
      <div class="slider-content">
        <h1>Honey Drops</h1>
      </div>
    </div>
    <div style="background-image: url(/img/posts/responsive-slider-with-sass-4.png)" class="img">
      <div class="slider-content">
        <h1>Dalia</h1>
      </div>
    </div>
    <div style="background-image: url(/img/posts/responsive-slider-with-sass-5.png)" class="img">
      <div class="slider-content">
        <h1>Exotic Dreams</h1>
      </div>
    </div>
    <div style="background-image: url(/img/posts/responsive-slider-with-sass-6.png)" class="img">
      <div class="slider-content">
        <h1>Ice Queen</h1>
      </div>
    </div>
    <div style="background-image: url(/img/posts/responsive-slider-with-sass-1.png)" class="img">
      <div class="slider-content">
        <h1>Floating</h1>
      </div>
    </div>
  </div>
</div>
```

# Textanimation
Die Art der Animation spielt grundsätzlich keine grosse Rolle.
Was wir wissen müssen ist, wie die Textanimation mit der slide-Animation zusammenspielt. Es gibt keine Möglichkeit zu sagen, dass wenn der Slide sichtbar ist, folgende Animation abgespielt werden muss.
Das bedeutet, dass wir dem Content irgendwie anders sagen müssen, dass er aktuell sichtbar ist.

Die Grundüberlegung ist, dass wir die gesamte Komposition ansehen müssen. Wir haben die Bildanimation, die im gleichen Zeitraum abläuft, wie der Slide sichtbar sein soll und dann vergeht eine Weile, in der nichts passiert, ehe die Animation des Contents erneut abgespielt werden muss.
Das heisst unsere Content-Animationen müssen genau so lange sein, wie die komplette Animation, aber nur bei dem Prozentsatz in dem das Bild angezeigt wird, darf der entsprechende Content animiert werden.

Sehen wir uns das im Detail für das zweite Bild an.

Wenn wir das Mixin das wir im letzten Tutorial geschrieben haben ansehen, compiled das in meinem Beispiel zu folgender CSS:

```css
@keyframes slidy {
    0% {
        left: 0%;
    }
    /* Bild 1 sichtbar */
    14.2857142857% {
        left: 0%;
    }

    16.6666666667% {
        left: -100%;
    }
    /* Bild 2 sichtbar */
    30.9523809524% {
        left: -100%;
    }

    33.3333333333% {
        left: -200%;
    }
    /* Bild 3 sichtbar */
    47.619047619% {
        left: -200%;
    }

    50% {
        left: -300%;
    }
    /* Bild 4 sichtbar */
    64.2857142857% {
        left: -300%;
    }

    66.6666666667% {
        left: -400%;
    }
    /* Bild 5 sichtbar */
    80.9523809524% {
        left: -400%;
    }

    83.3333333333% {
        left: -500%;
    }
    /* Bild 6 sichtbar */
    97.619047619% {
        left: -500%;
    }

    100% {
        left: -600%;
    }
}
```

Okay, unser zweites Bild ist also von 16% bis 30% der Animationszeit sichtbar. Das heisst, unsere Textanimation für das zweite Bild muss sich innerhalb diesen Bereichs bewegen. Bei Bild 3 sieht das anders aus. Und bei Bild x ebenfalls.

Wir realisieren: eine einzelne Animation reicht nicht, so wie es beim Bildslider der Fall ist. Wir brauchen für jeden einzelnen Content eine eigene Animation. Also eine eigene Keyframedeklaration. Zum Glück bietet Sass die Möglichkeit for-Schleifen zu schreiben.

Wie also müssen wir unser Mixin schreiben und wie schreiben wir die for-Schleife? Brauchen wir mehr als eine? (Oh ja, es sind ganze zwei!)

Keine Sorge, diesmal brauchen wir nicht so viel Mathe ;)

Okay, holen wir nochmal das Mixin von letztem Mal.

```scss
@mixin generate-slide-keyframes($pics){
    @for $i from 0 to $pics{
        $img-width: (100 / $pics);
        $dur: (100% * ($pics - ($pics - 1))) / ($pics * ($pics - 1));
        $p: (($i * $img-width) + ($i * $dur));
        $l: ($i * 100% * -1);
        $s: $p + $img-width;

        #{$p} { left: $l; }

        @if $s <= 100% {
            #{$s} { left: $l; }
        }
    }
}
```

Okay, wir gehen von Null durch bis zu unserer Bildnummer und schreiben die Prozentsätze für jedes Bild auf. Da wir aber jetzte einzelne Animationen machen müssen, brauchen wir keine for-Schleife mehr. Wir müssen die Zahlen nur für unser bestimmtes Bild wissen. Dafür geben wir unserem neuen Mixin also einfach unsere Bildnummer mit. Und der Rest bleibt sich ähnlich.

```scss
@mixin generate-slide-content-keyframes($picNum, $total){
    $i: $picNum - 1;
    $img-width: (100 / $total);
    $dur: (100% * ($total - ($total - 1))) / ($total * ($total - 1));
    $p: (($i * $img-width) + ($i * $dur));
    $s: $p + $img-width;

    #{$p} {
        /* Bild erscheint */
    }
    #{$s} {
        /* Bild geht */
    }
}
```
Wir ihr sehen könnt, wird `$i` zu Beginn definiert. Wir ziehen 1 davon ab, weil die Anzahl Bilder ja eins mehr ist, da im Markup das erste Bild zwei Mal vorkommt, um die Animation flüssig abspielen zu lassen.

Jetzt ist die Frage, wie die Animation aussehen soll. Meine Animation ist sehr simpel. Ich möchte, dass der Titel von etwas weiter oben nach unten fährt und dabei schön eingeblendet wird. Und ehe das Bild verschwindet, möchte ich den Titel wieder ausblenden.
Ergo sieht mein Mixin folgendermassen aus.

```scss
@mixin generate-slide-content-keyframes($picNum, $total){
    $i: $picNum - 1;
    $img-width: (100 / $total);
    $dur: (100% * ($total - ($total - 1))) / ($total * ($total - 1));
    $p: (($i * $img-width) + ($i * $dur));
    $s: $p + $img-width;

    #{$p} {
        opacity: 0;
        top: 20%;
    }
    #{$p + 1}{
        opacity: 1;
    }
    #{$p + 3}{
        top: 50%;
    }
    #{$s - 1}{
        opacity: 1;
    }
    #{$s} {
        opacity: 0;
        top: 50%;
    }
}
```

Wie aber rufen wir das jetzt auf? Mit einer for-Schleife. Wir schreiben eine for-Schleife um das keyframe und eine um die CSS, in der wir die Animation aufrufen.

Hier eine isolierte Version, in der nur die entsprechenden Stellen drin sind.

```scss
#slider{
    .wrap{
        .img{
            @for $i from 1 to $amount-slider-imgs {
                &:nth-of-type(#{$i}){
                    .slider-content{
                        animation: $animation-time img-#{$i}-content infinite;
                    }
                }
            }
        }
    }
}

@for $i from 1 to $amount-slider-imgs {
    @keyframes img-#{$i}-content{
        @include generate-slide-content-keyframes($i, $amount-slider-imgs);
    }
}
```

Und so funktioniert die Ergänzung. Natürlich müssen wir dann noch ein paar andere Styles schreiben. Mein Sass für die Demo sieht wie folgt aus:

```scss
// Einstellungen
$amount-slider-imgs: 7;
$animation-time: 6s * $amount-slider-imgs;

// keyframes mixin
@mixin generate-slide-keyframes($pics){
    @for $i from 0 to $pics{
        $img-width: (100 / $pics);
        $dur: (100% * ($pics - ($pics - 1))) / ($pics * ($pics - 1));
        $p: (($i * $img-width) + ($i * $dur));
        $l: ($i * 100% * -1);
        $s: $p + $img-width;

        #{$p} { left: $l; }

        @if $s <= 100% {
            #{$s} { left: $l; }
        }
    }
}

// slide content mixin
@mixin generate-slide-content-keyframes($picNum, $total){
    $i: $picNum - 1;
    $img-width: (100 / $total);
    $dur: (100% * ($total - ($total - 1))) / ($total * ($total - 1));
    $p: (($i * $img-width) + ($i * $dur));
    $s: $p + $img-width;

    #{$p} {
        opacity: 0;
        top: 20%;
    }
    #{$p + 1}{
        opacity: 1;
    }
    #{$p + 3}{
        top: 50%;
    }
    #{$s - 1}{
        opacity: 1;
    }
    #{$s} {
        opacity: 0;
        top: 50%;
    }
}

// the smallest reset ever
body{ margin: 0; padding: 0; background: black; }

// Slider styles
#slider{
    // deckt den kompletten Bildschirm ab
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    // styles des Slide-Inhalts, absolut positioniert, mittig
    .slider-content{
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: auto;
        max-height: 100%;
        overflow: auto;
        color: white;
        opacity: 0;
    }

    .wrap{
        // das ist von letztem Mal bekannt
        position: relative;
        width: $amount-slider-imgs * 100%;
        height: 100%;
        margin: 0;
        left: 0;
        text-align: left;
        animation: $animation-time slidy infinite;

        .img{
            width: 100% / $amount-slider-imgs;
            float: left;
            height: 100%;
            position: relative; // wir ergänzen hier relative, damit das mit der positionierung des contents klappt
            background: {
                size: cover;
                position: center;
            }

            // für die content animation
            @for $i from 1 to $amount-slider-imgs {
                &:nth-of-type(#{$i}){
                    .slider-content{
                        animation: $animation-time img-#{$i}-content infinite;
                    }
                }
            }
        }
    }
}

// keyframes slider
@keyframes slidy {
    @include generate-slide-keyframes($amount-slider-imgs);
}

// keyframes content
@for $i from 1 to $amount-slider-imgs {
    @keyframes img-#{$i}-content{
        @include generate-slide-content-keyframes($i, $amount-slider-imgs);
    }
}
```

Und das ist alles.
