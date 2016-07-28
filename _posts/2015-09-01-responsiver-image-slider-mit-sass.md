---
date: 2015-09-01 17:10:22 +0200
title: Ein responsiver Image-Slider mit Sass
name: ErImS
lang: de
subtitle: Mit einem Sass Mixin JavaScript Arbeit machen
tags: [sass, tutorial, mixin, slider, ♦♦♦♦]
description: Ein Tutorial, wie man mit einem Sass Mixin einen flexiblen responsiven Slider baut.
mathjax: true
---
Ich war auf der Suche nach einem schönen responsiven Slider, der minimales Markup und möglichst wenig Code erfordert. Er sollte simpel sein, ohne grossen Schnickschnack und wirklich bloss durch eine Reihe von Bildern scrollen. Auf der Suche bin ich bei [diesem CodePen](http://codepen.io/dudleystorey/pen/ehKpi/) gelandet, der genau das gemacht hat, was ich mir gewünscht hatte. Als ich allerdings versuchte die Keyframes für eine andere Anzahl Bilder zu berechnen, ist mir aufgefallen, dass mir das viel zu viel Mathe ist, um jedes Mal neu zu berechnen, wenn sich die Anzahl Bilder für den Slider ändern. Also habe ich die CSS in Sass übersetzt und für die Keyframes ein Mixin geschrieben. Das möchte ich euch heute vorstellen. Die <a href="/demo/responsive-image-slider-with-sass/" target="_blank">Demo</a> könnt ihr euch auch noch separat ansehen.
<!-- more -->

<iframe src="/demo/responsive-image-slider-with-sass/" width="100%" height="900px"></iframe>

# Markup
In meinem Beispiel habe ich einen Slider mit einem fixen Verhältnis (3:2) gewollt, folglich brauchte ich noch einen Container für den padding hack[^1]. Ansonsten brauchen wir einen Wrapper, dem wir `overflow: hidden` geben werden und darin einen "imagestrip" In dem werden alle Bilder nebeneinander angeordnet, und wir scrollen dann durch. Damit die Animation smooth abläuft, platzieren wir das erste Bild am Ende noch einmal. Ich habe die Bilder als Hintergrund von Containern eingefügt, anstelle als imgs, weil ich sie damit einfacher positionieren kann und es ist einfacher ein fixes Format zu haben, auch wenn die verwendeten Bilder verschiedene Formate besitzen.

[^1]: Der Padding Hack wurde wohl als erstes [hier](http://alistapart.com/article/creating-intrinsic-ratios-for-video) vorgestellt, wo es darum ging videos responsive einzubetten. Seither ist der Padding Hack allzeit beliebt irgendetwas responsive zu bekommen, das auf ein fixes Seitenverhältnis angewiesen ist.

Markup in jade:

```slim
.size-control
    #slider
        .wrap
            .img(style="background-image: url(1.png)")
            .img(style="background-image: url(2.png)")
            .img(style="background-image: url(3.png)")
            .img(style="background-image: url(4.png)")
            .img(style="background-image: url(5.png)")
            .img(style="background-image: url(6.png)")
            .img(style="background-image: url(1.png)")
```

und HTML davon:

```html
<div class="size-control">
    <div id="slider">
        <div class="wrap">
            <div style="background-image: url(1.png)" class="img"></div>
            <div style="background-image: url(2.png)" class="img"></div>
            <div style="background-image: url(3.png)" class="img"></div>
            <div style="background-image: url(4.png)" class="img"></div>
            <div style="background-image: url(5.png)" class="img"></div>
            <div style="background-image: url(6.png)" class="img"></div>
            <div style="background-image: url(1.png)" class="img"></div>
        </div>
    </div>
</div>
```

# Grundstyles
Beim Styling brauchen wir auf jeden Fall die Anzahl Bilder. Ich habe hier sechs verschiedene, doch da das erste Bild zwei Mal vorkommt, liegt mein Total von Bildern bei 7. Ausserdem möchte ich, dass jedes Bild 6s angezeigt wird, also müssen wir für die Animationslänge $$ Anzahl Bilder \cdot Bildanzeigedauer $$ rechnen, um den Wert zu bekommen.
Ausgedrückt habe ich das in zwei Sass Variabeln:

```scss
$amount-slider-imgs: 7;
$animation-time: 6s * $amount-slider-imgs;
```

Sass sollte ansonsten recht selbsterklärend sein, bis auf die Keyframes ist der Slider super einfach zu schreiben:

```scss
// paddinghack mixin
@mixin paddinghack($cw, $rw, $rh, $c:null){
    position: relative;
    width: $cw;
    height: 0;
    padding: (($rh / $rw) * $cw) 0 0 0;

    @if $c != null{
        #{$c} {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
        }
    }
}

// mittige Positionierung innerhalb des bodys
.size-control{
    @include paddinghack(60%, 1500, 1000, "#slider");
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

// slider style
#slider{
    overflow: hidden;
    box-sizing: border-box;

    .wrap{
        position: relative;
        width: $amount-slider-imgs * 100%; // berechnet die Breite des Bildstrips
        height: 100%;
        margin: 0;
        left: 0;
        text-align: left;
        font-size: 0;
        animation: $animation-time slidy infinite;

        .img{
            width: 100% / $amount-slider-imgs;
            float: left;
            height: 100%;
            background: {
                size: cover;
                position: center;
            }
        }
    }
}
```

# Keyframe Mixin
Sobald Sass steht, kommen wir zur Keyframes Generation, die überraschenderweise gar nicht so einfach war, wie ich es zuerst gedacht hatte.

## Gewünschtes Ergebnis
Das Ziel ist wie folgt. Wir wollen am Ende Keyframes haben, die wie folgt aussehen:
Auf der Suche werden wir später nach $$ x $$ sein, was unsere Anzeigedauer (in %) ist.

```scss
$pics-count: $n;
$img-width: 100% / $n;
$w: $img-width;

@keyframes slider-goal {
    (0 * $w) + (0 * x) { left: 0 * 100% * -1; }
    (1 * $w) + (0 * x) { left: 0 * 100% * -1; }

    (1 * $w) + (1 * x) { left: 1 * 100% * -1; }
    (2 * $w) + (1 * x) { left: 1 * 100% * -1; }

    (2 * $w) + (2 * x) { left: 2 * 100% * -1; }
    (3 * $w) + (2 * x) { left: 2 * 100% * -1; }

    ...

    (($n - 1) * $w) + (($n - 1) * x) { left: ($n - 1) * 100% * -1; }
}
```

Wie ihr sehen könnt, müssen wir für jedes Bild ein Keyframe-Paar generieren. Das heisst auf jeden Fall, dass wir eine for-Schleife brauchen werden, da der grösste Teil der Werte vom Index (`$i`) abhängig ist. Die Wiederholung des gleichen Werts für `left` stellt die Zeit dar in der das Bild stillsteht. $$ x $$ repräsentiert also unsere 6s Animationsdauer, die wir dann sozusagen in die Keyframe Prozente übersetzen müssen. Wenn der letzte Keyframe nicht nötig wäre, wäre diese Zahl zu finden nicht schwer, da wir allerdings für das letzte Bild keinen Stillstand möchten, sondern bloss den Slide und dann wieder mit dem ersten Bild beginnen, brauchen wir für das letzte Bild nicht das ganze Paar, sondern nur den ersten Teil davon. Ausserdem muss der Prozentsatz des letzten Keyframes 100% ergeben. Das ist die Lösung. Denn mit einer Gleichung lassen sich Unbekannte einfach finden.

## Mathe
Als erstes müssen wir mal festlegen welche Zahlen wir im Allgemeinen für unser Mixin brauchen. Wir können unserem Mixin allerdings nur eine einzige Variable weitergeben. Und das ist unsere Anzahl Bilder. Grundsätzlich müssen wir also unser komplettes Mixin von dieser Variable abhängig machen.

Beginnen wir mit der Deklaration:

```scss
// keyframes mixin
@mixin generate-slide-keyframes($pics){
    // mixin content
}
```

Wir wissen auch, dass wir vom index abhängen, also beginnen wir unser Mixin mit einer for-Schleife:

```scss
@for $i from 0 to $pics {
    // content
}
```

Nun zu den Dingen, die wir wissen.
Wir können die Breite des Bildes schnell berechnen. ($$ iw $$ = $img-width | $$ \sum pics $$ = $pics)

$$ iw = \frac{100\%}{\sum pics} $$

Der `left`-Wert lässt sich auch schnell berechnen. Dazu rechnen wir

$$ l = -(i \cdot 100\%) $$

Die beiden keyframe Prozente sind auch einfach. Ich nenne sie `$p` (percentage) und `$s` (step), aber verwendet was auch immer ihr wollt.
`$dur` ist noch immer unsere Unbekannte ($$ x $$).

$$ \begin{align*}
p &= (i \cdot \frac{100\%}{\sum pics}) + (i \cdot x) \\
s &=  ((i \cdot \frac{100\%}{\sum pics}) + (i \cdot x)) + \frac{100\%}{\sum pics}
\end{align*} $$

Das Ganze lässt sich dann natürlich auch zusammenfassen, wenn wir die Variabeln in der richtigen Reihenfolge schreiben. Folglich ergibt sich auch das Keyframe-Paar.

```scss
$img-width: (100 / $pics);
$dur: x;
$p: (($i * $img-width) + ($i * $dur));
$l: ($i * 100% * -1);
$s: $p + $img-width;

#{$p} { left: $l; }
#{$s} { left: $l; }
```

So, nun kommen wir zu diesem Sagenumwobenen $$ x $$. Um es herauszufinden, müssen wir bloss eine Gleichung umformen.

Wenn ihr zurück auf mein Beispiel für das Ziel blickt, haben wir folgendes herausgefunden:

$$ iw(\sum pics - 1) + x(\sum pics - 1) = 100\% $$

Das können wir nun nach $$ x $$ auflösen (damit die Gleichung einfacher verständlich ist, hab ich hier `$pics` und `($pics - 1)` durch neue Variabeln ersetzt.

$$
\begin{align*}
100 &= 100\% \\
y &= \sum pics \\
z &= \sum pics - 1 \\[5ex]
z \cdot \frac{100}{y} + zx &= 100 && \text{(1)} \\
\frac{100z}{y} + zx &= 100 && \text{(2)} \\
\frac{100z + y(zx)}{y} &= 100 && \text{(3)} \\
\frac{z(100 + yx)}{y} &= 100 && \text{(4)} \\
z(100 + yx) &= 100y && \text{(5)} \\
zyx + 100z &= 100y && \text{(6)} \\
zyx &= 100y - 100z && \text{(7)} \\[3ex]
x &= \frac{100(y - z)}{yz}
\end{align*}
$$

**Legende: Schritte um zur nächsten Formel zu gelangen**
(1): links $$ z $$ in Bruch aufnehmen
(2): links $$ zx \to \frac{zx}{1} \xrightarrow{\cdot y} \frac{y(zx)}{1y} $$ und auf einen Bruch
(3): links $$ z $$ ausklammern
(4): auf beiden Seiten $$ \cdot y $$
(5): links Klammern aufheben
(6): auf beiden Seiten $$ -100z $$
(7): auf beiden Seiten $$ \mathbin{/} yz $$

Was wir dann noch beachten müssen ist, dass wir den `$s` keyframe nicht brauchen, da `$p` für die letzte Zahl in der for-Schleife 100% ergibt.
Das heisst wir packen den `$s` keyframe einfach in ein `@if`.

Und dann ergibt sich folgendes Mixin:

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

Und um unser Stylesheet zu beenden, ergänzen wir es um die folgende Stelle:

```scss
@keyframes slidy {
    @include generate-slide-keyframes($amount-slider-imgs);
}
```

Den Code für das Demo könnt ihr euch auch noch ansehen.

<a class="btn" href="https://github.com/mynimi/mynimi.github.io/tree/source/demo/responsive-image-slider-with-sass"><i class="fa fa-github"></i> Demo Code</a>
