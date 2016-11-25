---
date: 2015-08-12 01:28:36 +0200
title: Sticky Header mit Extras
name: SHmE
lang: de
category: de
subtitle: Wie ein Header smooth sticky fixiert wird und ein Element bei Scroll schrumpft
tags: [header, jquery, javascript, tutorial, ♦♦]
description: Wie ein Header smooth sticky fixiert wird und ein Element bei Scroll schrumpft
---
Ich wurde vor einer Weile gefragt, wie man eine Navigationsbar [wie diese](http://boxer-soratemplates.blogspot.com) hinbekommt. Als ich mir den Code der Seite angesehen habe, war ich eher weniger begeistert, wie das Problem gelöst wurde und habe versucht das möglichst schneller und einfacher zu lösen. Was dabei herausgekommen ist, könnt ihr euch im [Demo](http://halfapx.com/shrinking-sticky-header/) ansehen.

<!-- more -->
<br>
<iframe src="http://halfapx.com/shrinking-sticky-header/" width="100%" height="500px"></iframe>

Damit wir überhaupt erst einmal anfangen können, brauchen wir einen Grundaufbau mit etwas styles.

Hierfür habe ich mein [start-off Repo](https://github.com/mynimi/start-off) gecloned und dann bloss Header und Navigation eingefügt. Die Navigation schaut dabei so aus:

```html
<nav>
    <div class="container">
        <img src="shrinkme.jpg">
        <div class="menu">
            <a href="/">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
    </div>
</nav>
```

Ihr seht ich habe einen allgemeinen Container, darin ist ein `div` welches dafür sorgt, dass der Inhalt des Menus die maximale Breite des Contents nicht überschreitet. Dann hab ich das Bild eingebunden, welches wir verkleinern werden und dann einen weiteren container, der die Links für das eigentliche Menu enthält.

Damit das einigermassen ausschaut, wird das Menu noch gestyled (zuerst sass, dann generiertes CSS)

```scss
$menu-bg: #4C7C6E;

@mixin flexbox($d, $w, $j, $a) {
    display: flex;
    flex-direction: $d;
    flex-wrap: $w;
    justify-content: $j;
    align-items: $a;
}

nav {
    width: 100%;
    background: $menu-bg;

    .container{
        padding: 0;
        @include flexbox(row, wrap, flex-start, center);
    }

    img{
        border-radius: 50%;
        margin-right: 20px;
        border: 7px solid $menu-bg;
        transition: .5s all ease-in-out;
        padding: 0;

        &.small{
            height: 100% !important;
            border: 0px solid transparent;
            padding: 2px;
        }
    }

    .menu {
        padding: 14px 0;
        a {
            color: white;
            padding: 0 7px;
            &:hover {
                color: white;
                opacity: .7;
            }
        }
    }
}
```

```css
nav {
  width: 100%;
  background: #4C7C6E;
}
nav .container {
  padding: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}
nav img {
  border-radius: 50%;
  margin-right: 20px;
  border: 7px solid #4C7C6E;
  -webkit-transition: .5s all ease-in-out;
          transition: .5s all ease-in-out;
  padding: 0;
}
nav img.small {
  height: 100% !important;
  border: 0px solid transparent;
  padding: 2px;
}
nav .menu {
  padding: 14px 0;
}
nav .menu a {
  color: white;
  padding: 0 7px;
}
nav .menu a:hover {
  color: white;
  opacity: .7;
}
```

Ihr seht die Animation für das Bild ist hier schon vorbereitet. Das Ziel ist es, mithilfe von jQuery eine neue Klasse zu vergeben, die das Bild kleiner macht und den Rand entfernt. Die Klasse heisst `small`. Da wir ausserdem für das Element eine transition definiert haben, läuft das ganze in einer Länge von .5s ab. Für die Positionierung des Bildes benutze ich Flexbox, weil das einfach viel schneller geht, als sich mit den ewigen floats herumzuschlagen.

Und dann sind wir schon bereit für Javascript.

Als erstes integrieren wir jQuery und dann verwende ich für die sticky Fixierung ein kleines Plugin, das ich vor einer Weile mal geschrieben habe. Dann geht das mit der Integration recht schnell. [<i class="fa fa-download"></i> stickyNav](https://gist.github.com/mynimi/d224bbfa487d97102bde)

Das Plugin muss nach jQuery eingebunden werden und dann muss man es nur noch aktivieren.

Ladet also jquery und das plugin herunter und verlinkt sie. In diesem Beispiel sind die beiden Files in einem `js` Ordner drin.
Oberhalb des schliessenden body-Tags unserer Seite (`</body>`) fügen wir also folgendes ein:

```html
<script src="/js/jquery-2.1.4.min.js"></script>
<script src="/js/jquery.stickyNav.min.js"></script>
<script src="/js/main.js"></script>
```

`main.js` ist in diesem Augenblick noch eine leere Datei. In diese kommen nun unsere ganzen Anpassungen. Eine der ersten, die auffällt ist, dass das Menu noch nicht wirklich gut aussieht, nachdem die CSS hinzugefügt ist. Der Grund dafür ist, dass die Bar momentan noch gleich hoch wie das Bild ist. Für den angestrebten Effekt, müssen wir der Bar eine fixe Höhe geben. Das machen wir, indem wir die Höhe des `.menu` containers lesen und sie dem ganzen Menu geben.

Ausserdem müssen wir für eine schöne Animation dem Bild am Anfang eine Höhe geben. Da ich das hier unabhängig von irgendwelchen Grössen machen wollte, habe ich mit jQuery die Höhe gemessen und sie dem Bild als CSS gegeben.

`Main.js` schaut also im Moment so aus:

```js
$(document).ready( function() {
    $('nav img').css('height', $('nav img').height());
    $('nav .container').css('height', $('.menu').outerHeight());    
});
```

als nächstes mamchen wir die Navigation sticky. Dazu müssen wir bloss das Plugin ausführen. Das geht mit einer kurzen Zeile:

```js
$('nav').stickyNav();
```

Für die Animation vergeben wir die Klasse basierend auf der Scroll-Position. Wenn der obere Teil des Bildes am Rand des Bildschirms ist, wird die Klasse `small` vergeben und sonst wird sie wieder entfernt. Das triggered die Animation bei Scroll.

```js
$(window).scroll( function(){
    if ($(window).scrollTop() > $('nav img').offset().top){
        $('nav img').addClass('small');
    } else{
        $('nav img').removeClass('small');
    }
});
```

Das ganze Script schaut also wie folgt aus:

```js
$(document).ready( function() {

    $('nav img').css('height', $('nav img').height());

    $('nav .container').css('height', $('.menu').outerHeight());
    $('nav').stickyNav();

    $(window).scroll( function(){
        if ($(window).scrollTop() > $('nav img').offset().top){
            $('nav img').addClass('small');
        } else{
            $('nav img').removeClass('small');
        }
    });
});
```

Und dann sind wir fertig. Der Effekt geht also wirklich super schnell und schaut meiner Meinung nach recht cool aus.
