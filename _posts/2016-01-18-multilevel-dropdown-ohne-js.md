---
date: 2016-01-18 14:07:27 +0100
title: Ein responsives Mulit-Level Menu ohne JavaScript
id: armlmwj
subtitle: Wie man mit dem checked-hack ein responsives Dropdwon schreibt
tags: [sass, navigation, tutorial ♦♦]
description: Wie man ein multi-level dropdown mit dem checked hack und ohne javascript schreibt.
lang: de
---
Ich dachte ich könnte mal wieder einen Post ohne JavaScript schreiben. Was eignet sich da besser als eine Navigation.
Diesmal ein Dropdown Menu mit verschiedenen Levels, das auch noch responsive ist.

<!--more-->

### Klassisches Dropdown
Als erstes beginnen wir mit dem klassischen Dropdown Code. Ineinander verschachtelte Listen. Wir vergeben noch ein paar Klassen um die Levels zu kennzeichnen, aber CSS können wir auch ohne diese Klassen schreiben. ICh schreib nur immer gern alles an für den Fall.
Ich habe in diesem Fall vier Levels gemacht, aber ich könnt hier beliebig tief gehen.

```html
<div class="menu">
    <ul class="nav level-one">
        <li>
            <a href="#">Item 1</a>
        </li>
        <li class="parent">
            <a href="#">Item 2</a>
            <ul class="level-two">
                <li>
                    <a href="#">Child 1</a>
                </li>
                <li>
                    <a href="#">Child 2</a>
                </li>
                <li class="parent">
                    <a href="#">Child 3</a>
                    <ul class="level-three">
                        <li>
                            <a href="#">Grandchild 1</a>
                        </li>
                        <li class="parent">
                            <a href="#">Grandchild 2</a>
                            <ul class="level-four">
                                <li>
                                    <a href="#">Grandgrandchild 1</a>
                                </li>
                                <li>
                                    <a href="#">Grandgrandchild 2</a>
                                </li>
                                <li>
                                    <a href="#">Grandgrandchild 3</a>
                                </li>
                            </ul> <!-- /.level-four -->
                        </li>
                    </ul> <!-- /.level-three -->
                </li>
            </ul> <!-- /.level-two -->
        </li>
        <li class="parent">
            <a href="#">Item 3</a>
            <ul class="level-two">
                <li>
                    <a href="#">Child 1</a>
                </li>
                <li>
                    <a href="#">Child 2</a>
                </li>
                <li class="parent"><a href="#">Child 3</a>
                    <ul class="level-three">
                        <li>
                            <a href="#">Grandchild 1</a>
                        </li>
                        <li>
                            <a href="#">Grandchild 2</a>
                        </li>
                        <li>
                            <a href="#">Grandchild 3</a>
                        </li>
                    </ul> <!-- /.level-three -->
                </li>
                <li>
                    <a href="#">Child 4</a>
                </li>
            </ul> <!-- /.level-two -->
        </li>
        <li>
            <a href="#">Item 4</a>
        </li>
        <li>
            <a href="#">Item 5</a>
        </li>
        <li>
            <a href="#">Item 6</a>
        </li>
    </ul>
</div>
```

### :checked-Hack
Um die Submenus zu öffnen, verwenden wir checkboxen. Diese Boxen platzieren wir jeweils in den parent-elementen. Die Labels dienen dabei als Klicker. Es gibt im Internet zahlreiche Posts, die den Hack erklären. Grundsätzlich können wir basierend auf dem Zustand der Checkboxen, Folgeelemente anzeichen oder verstecken.

#### Markup
Das Markup ergänzen wie folgt aus.

```html
<div class="menu">
    <ul class="nav level-one">
        <li>
            <a href="#">Item 1</a>
        </li>
        <li class="parent">
            <a href="#">Item 2 </a>
            <label for="toggle-level-2-01" class="toggle">toggle submenu</label>
            <input type="checkbox" id="toggle-level-2-01"/>
            <ul class="level-two">
                <li>
                    <a href="#">Child 1</a>
                </li>
                <li>
                    <a href="#">Child 2</a>
                </li>
                <li class="parent">
                    <a href="#">Child 3</a>
                    <label for="toggle-level-3-01" class="toggle">toggle submenu</label>
                    <input type="checkbox" id="toggle-level-3-01"/>
                    <ul class="level-three">
                        <li>
                            <a href="#">Grandchild 1</a>
                        </li>
                        <li class="parent">
                            <a href="#">Grandchild 2</a>
                            <label for="toggle-level-4-01" class="toggle">toggle submenu</label>
                            <input type="checkbox" id="toggle-level-4-01"/>
                            <ul class="level-four">
                                <li>
                                    <a href="#">Grandgrandchild 1</a>
                                </li>
                                <li>
                                    <a href="#">Grandgrandchild 2</a>
                                </li>
                                <li>
                                    <a href="#">Grandgrandchild 3</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="parent">
            <a href="#">Item 3</a>
            <label for="toggle-level-2-02" class="toggle">toggle submenu</label>
            <input type="checkbox" id="toggle-level-2-02"/>
            <ul class="level-two">
                <li>
                    <a href="#">Child 1</a>
                </li>
                <li>
                    <a href="#">Child 2</a>
                </li>
                <li class="parent">
                    <a href="#">Child 3</a>
                    <label for="toggle-level-3-02" class="toggle">toggle submenu</label>
                    <input type="checkbox" id="toggle-level-3-02"/>
                    <ul class="level-three">
                        <li>
                            <a href="#">Grandchild 1</a>
                        </li>
                        <li>
                            <a href="#">Grandchild 2</a>
                        </li>
                        <li>
                            <a href="#">Grandchild 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Child 4</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">Item 4</a>
        </li>
        <li>
            <a href="#">Item 5</a>
        </li>
        <li>
            <a href="#">Item 6</a>
        </li>
    </ul>
</div>
```

#### Öffnen
Das Öffnen der Submenus, machen wir mit folgender CSS.

```css
.menu ul > li ul {
  display: none;
}
.menu ul > li input[type="checkbox"]:checked + ul {
  display: block;
}
```

Das schaut dann so aus:
<style>#demo-toggle ul > li ul{display: none}#demo-toggle ul > li input[type="checkbox"]:checked + ul{display: block}</style><div id="demo-toggle"><ul class="nav level-one"><li><a href="#">Item 1</a> </li><li class="parent"> <a href="#">Item 2 </a> <label for="toggle-level-2-01" class="toggle">toggle submenu</label> <input type="checkbox" id="toggle-level-2-01"/> <ul class="level-two"> <li> <a href="#">Child 1</a> </li><li> <a href="#">Child 2</a> </li><li class="parent"> <a href="#">Child 3</a> <label for="toggle-level-3-01" class="toggle">toggle submenu</label> <input type="checkbox" id="toggle-level-3-01"/> <ul class="level-three"> <li> <a href="#">Grandchild 1</a> </li><li class="parent"> <a href="#">Grandchild 2</a> <label for="toggle-level-4-01" class="toggle">toggle submenu</label> <input type="checkbox" id="toggle-level-4-01"/> <ul class="level-four"> <li> <a href="#">Grandgrandchild 1</a> </li><li> <a href="#">Grandgrandchild 2</a> </li><li> <a href="#">Grandgrandchild 3</a> </li></ul> </li></ul> </li></ul> </li><li class="parent"> <a href="#">Item 3</a> <label for="toggle-level-2-02" class="toggle">toggle submenu</label> <input type="checkbox" id="toggle-level-2-02"/> <ul class="level-two"> <li> <a href="#">Child 1</a> </li><li> <a href="#">Child 2</a> </li><li class="parent"> <a href="#">Child 3</a> <label for="toggle-level-3-02" class="toggle">toggle submenu</label> <input type="checkbox" id="toggle-level-3-02"/> <ul class="level-three"> <li> <a href="#">Grandchild 1</a> </li><li> <a href="#">Grandchild 2</a> </li><li> <a href="#">Grandchild 3</a> </li></ul> </li><li> <a href="#">Child 4</a> </li></ul> </li><li> <a href="#">Item 4</a> </li><li> <a href="#">Item 5</a> </li><li> <a href="#">Item 6</a> </li></ul></div>

### Styling
Jetzt müssen wir das ganze noch gestalten.
Ich hab mich für eine fixierte Bar entschieden.

```css
.menu {
  font-size: 16px;
  font-family: Roboto Slab, serif;
  background-color: #C06574;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 10;
}
.menu input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  left: -9999px;
}
.menu a {
  color: white;
  text-decoration: none;
  -webkit-transition: .3s all ease;
  transition: .3s all ease;
}
.menu a:hover {
  color: #E3DFE6;
}
.menu label.toggle {
  color: transparent;
  position: relative;
}
.menu label.toggle:hover {
  cursor: pointer;
}
.menu label.toggle:hover:before {
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent transparent transparent #E3DFE6;
  border-width: 5.33333px;
}
.menu label.toggle:before {
  content: "";
  font-size: 16px;
  -webkit-transition: .3s all ease;
  transition: .3s all ease;
  position: absolute;
  top: 50%;
  left: 5px;
  -webkit-transform: translateY(0%) rotate(90deg);
          transform: translateY(0%) rotate(90deg);
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent transparent transparent white;
  border-width: 5.33333px;
}
.menu ul {
  position: relative;
}
.menu ul,
.menu ul li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu ul > li {
  display: inline;
  padding: 0 10px;
  position: relative;
}
.menu ul > li > ul {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  background: #C06574;
  display: none;
}
.menu ul > li > ul > li {
  display: block;
  white-space: nowrap;
}
.menu ul > li > ul > li label.toggle:before {
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}
.menu ul > li > ul ul {
  left: 100%;
  top: 0;
}
.menu ul > li input[type="checkbox"]:checked + ul {
  display: block;
}
```

Aussehen tut das dann so:

<p data-height="266" data-theme-id="7132" data-slug-hash="MKOebO" data-default-tab="result" data-user="mynimi" class='codepen'>See the Pen <a href='http://codepen.io/mynimi/pen/MKOebO/'>Checkbox-Hack Dropdown (non-responsive)</a> by Myri (<a href='http://codepen.io/mynimi'>@mynimi</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Responsive
Das Markup muss noch etwas angepasst werden.
Wir schreiben noch einmal einen checkbox hack und dann machen wir einfach ein off-canvas Menu draus.

Die responsive Version schaut so aus:

```html
<div class="menu">
  <label for="toggle-responsive" class="toggle-menu">Menu</label>
  <input type="checkbox" id="toggle-responsive"/>
  <ul class="nav level-one">
    <li><a href="#">Item 1</a></li>
    <li class="parent"><a href="#">Item 2 </a>
      <label for="toggle-level-2-01" class="toggle">o</label>
      <input type="checkbox" id="toggle-level-2-01"/>
      <ul class="level-two">
        <li><a href="#">Child 1</a></li>
        <li><a href="#">Child 2</a></li>
        <li class="parent"><a href="#">Child 3</a>
          <label for="toggle-level-3-01" class="toggle">o</label>
          <input type="checkbox" id="toggle-level-3-01"/>
          <ul class="level-three">
            <li><a href="#">Grandchild 1</a></li>
            <li class="parent"><a href="#">Grandchild 2</a>
              <label for="toggle-level-4-01" class="toggle">o</label>
              <input type="checkbox" id="toggle-level-4-01"/>
              <ul class="level-four">
                <li><a href="#">Grandgrandchild 1</a></li>
                <li><a href="#">Grandgrandchild 2</a></li>
                <li><a href="#">Grandgrandchild 3</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="parent"><a href="#">Item 3</a>
      <label for="toggle-level-2-02" class="toggle">o</label>
      <input type="checkbox" id="toggle-level-2-02"/>
      <ul class="level-two">
        <li><a href="#">Child 1</a></li>
        <li><a href="#">Child 2</a></li>
        <li class="parent"><a href="#">Child 3</a>
          <label for="toggle-level-3-02" class="toggle">o</label>
          <input type="checkbox" id="toggle-level-3-02"/>
          <ul class="level-three">
            <li><a href="#">Grandchild 1</a></li>
            <li><a href="#">Grandchild 2</a></li>
            <li><a href="#">Grandchild 3</a></li>
          </ul>
        </li>
        <li><a href="#">Child 4</a></li>
      </ul>
    </li>
    <li><a href="#">Item 4</a></li>
    <li><a href="#">Item 5</a></li>
    <li><a href="#">Item 6</a></li>
  </ul>
</div>
```

In diesem Beispiel liegt der Breakpoint bei 2000px, sodass die responsive Version auf jedem Bildschirm zu sehen ist. Die Werte des media queries müssten dann natürlich entsprechend angepasst werden.

```css
.menu {
  font-size: 16px;
  font-family: Roboto Slab, serif;
  background-color: #C06574;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 10;
}
.menu input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  left: -9999px;
}
.menu a, .menu .toggle-menu {
  color: white;
  text-decoration: none;
  -webkit-transition: .3s all ease;
  transition: .3s all ease;
}
.menu a:hover, .menu .toggle-menu:hover {
  color: #E3DFE6;
}
.menu .toggle-menu {
  display: none;
  padding-left: 10px;
}
.menu .toggle-menu:hover {
  cursor: pointer;
}
@media screen and (max-width: 2000px) {
  .menu .toggle-menu {
    display: block;
  }
}
@media screen and (max-width: 2000px) {
  .menu .nav {
    background: #b95364;
    position: fixed;
    height: 100%;
    width: 320px;
    top: 41px;
    left: 0;
    -webkit-transition: .3s all ease;
    transition: .3s all ease;
    -webkit-transform: translateX(-320px);
            transform: translateX(-320px);
    overflow-y: auto;
    font-size: 18px;
  }
  .menu #toggle-responsive:checked ~ .nav {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
.menu label.toggle {
  color: transparent;
  position: relative;
}
.menu label.toggle:hover {
  cursor: pointer;
}
.menu label.toggle:hover:before {
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent transparent transparent #E3DFE6;
  border-width: 5.33333px;
}
.menu label.toggle:before {
  content: "";
  font-size: 16px;
  -webkit-transition: .3s all ease;
  transition: .3s all ease;
  position: absolute;
  top: 50%;
  left: 5px;
  -webkit-transform: translateY(0%) rotate(90deg);
          transform: translateY(0%) rotate(90deg);
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent transparent transparent white;
  border-width: 5.33333px;
}
@media screen and (max-width: 2000px) {
  .menu label.toggle:before {
    left: 15px;
  }
}
.menu ul {
  position: relative;
}
.menu ul,
.menu ul li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu ul > li {
  position: relative;
  padding: 10px;
}
@media screen and (min-width: 2001px) {
  .menu ul > li {
    display: inline;
    padding: 0 10px;
  }
}
.menu ul > li > ul {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  background: #C06574;
  display: none;
}
@media screen and (max-width: 2000px) {
  .menu ul > li > ul {
    position: relative;
    left: -10px;
    background: rgba(0, 0, 0, 0.1);
    width: calc(100% + 20px);
  }
}
@media screen and (min-width: 2001px) {
  .menu ul > li > ul > li {
    display: block;
    white-space: nowrap;
  }
  .menu ul > li > ul > li label.toggle:before {
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
  }
  .menu ul > li > ul ul {
    left: 100%;
    top: 0;
  }
}
.menu ul > li input[type="checkbox"]:checked + ul {
  display: block;
}
```

<p data-height="340" data-theme-id="7132" data-slug-hash="dGZvMG" data-default-tab="result" data-user="mynimi" class='codepen'>See the Pen <a href='http://codepen.io/mynimi/pen/dGZvMG/'>Checkbox-Hack Dropdown (responsive)</a> by Myri (<a href='http://codepen.io/mynimi'>@mynimi</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Und das ist dann schon alles.

### Ist das besser als mit JavaScript?
Die Frage ist natürlich, ob man in der realen Welt auf diese Lösung zurückgreifen sollte. Falls ihr mal tatsächlich ohne JavaScript arbeiten müsstet - ja. Im Leben allgemein haben Lösungen die mit JavaScript funktionieren definitiv den besseren Browsersupport. Ältere Betriebssysteme auf Handys haben manchmal Probleme mit diesem Hack. Glücklicherweise gibt es ja heutzutage Tools wie Analytics. Je nach dem, wie eure Besucher aussehen, kann man diese Lösung verwenden. Ich für meinen Teil gehe eigentlich immer mit der JavaScript-Variante, aber ich bin trotzdem ein grosser Fan von solchen reinen CSS-Lösungen, weil sie wieder aufzeigen, wie mächtig man mittlerweile mit HTML und CSS doch sein kann.