---
date: 2016-01-18 14:07:27 +0100
title: A Responsive Multi-Level-Menu without JavaScript
name: armlmwj
subtitle: Using the checked-hack to create a responsive dropdown menu
tags: [sass, navigation, tutorial ♦♦]
description: How to create a mutli level dropdown menu without javascript
lang: en
---
It's been a while since I wrote something about doing JavaScript work with CSS. So I decided to create this responsive navigation using the :checked hack.

<!-- more -->

# Classic Dropdown
So we start with a basic dropdown code, that's based on nested lists. I did 4 levels in this case, but you could extend it to however much you wanted.

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

# :checked hack
To open the submenus we'll use checkboxes. If you don't know how the checkbox hack works, just google it, there are some really good posts that go into much detail. But basically we will depend the visibility of the submenu on the state of the checkbox placed before it.

## Markup
So we change our markup to look like this:

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

## Open
The opening will be done using this CSS

```css
.menu ul > li ul {
  display: none;
}
.menu ul > li input[type="checkbox"]:checked + ul {
  display: block;
}
```

The result will look like this:
<style>#demo-toggle ul > li ul{display: none}#demo-toggle ul > li input[type="checkbox"]:checked + ul{display: block}</style><div id="demo-toggle"><ul class="nav level-one"><li><a href="#">Item 1</a> </li><li class="parent"> <a href="#">Item 2 </a> <label for="toggle-level-2-01" class="toggle">toggle submenu</label> <input type="checkbox" id="toggle-level-2-01"/> <ul class="level-two"> <li> <a href="#">Child 1</a> </li><li> <a href="#">Child 2</a> </li><li class="parent"> <a href="#">Child 3</a> <label for="toggle-level-3-01" class="toggle">toggle submenu</label> <input type="checkbox" id="toggle-level-3-01"/> <ul class="level-three"> <li> <a href="#">Grandchild 1</a> </li><li class="parent"> <a href="#">Grandchild 2</a> <label for="toggle-level-4-01" class="toggle">toggle submenu</label> <input type="checkbox" id="toggle-level-4-01"/> <ul class="level-four"> <li> <a href="#">Grandgrandchild 1</a> </li><li> <a href="#">Grandgrandchild 2</a> </li><li> <a href="#">Grandgrandchild 3</a> </li></ul> </li></ul> </li></ul> </li><li class="parent"> <a href="#">Item 3</a> <label for="toggle-level-2-02" class="toggle">toggle submenu</label> <input type="checkbox" id="toggle-level-2-02"/> <ul class="level-two"> <li> <a href="#">Child 1</a> </li><li> <a href="#">Child 2</a> </li><li class="parent"> <a href="#">Child 3</a> <label for="toggle-level-3-02" class="toggle">toggle submenu</label> <input type="checkbox" id="toggle-level-3-02"/> <ul class="level-three"> <li> <a href="#">Grandchild 1</a> </li><li> <a href="#">Grandchild 2</a> </li><li> <a href="#">Grandchild 3</a> </li></ul> </li><li> <a href="#">Child 4</a> </li></ul> </li><li> <a href="#">Item 4</a> </li><li> <a href="#">Item 5</a> </li><li> <a href="#">Item 6</a> </li></ul></div>

# Styling
Now we'll just have to style it. I went with a pretty standard bar.

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

And that will look like this:

<p data-height="266" data-theme-id="7132" data-slug-hash="MKOebO" data-default-tab="result" data-user="mynimi" class='codepen'>See the Pen <a href='http://codepen.io/mynimi/pen/MKOebO/'>Checkbox-Hack Dropdown (non-responsive)</a> by Myri (<a href='http://codepen.io/mynimi'>@mynimi</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

# Responsive
For the responsive version we'll have to adjust some more of the markup. We add another checkbox to toggle the whole navigation.
And then we just adjust the CSS to create this off-canvas Menu

And that's what it looks like:

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

In the example I put the breakpoint at 2000px so that it shows up on all stanard displays. In real life you would have to adjust this, so that the non-responsive version will be shown first.

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

And that's it.

# So is this better than JavaScript?
This is the question. If you should actually go with a solution like this. Well, in case you have to solve this problem without JavaScript - Go with this. In Reallife, though, the javascript solution is the one I would go with. Reason for that being the fact, that it is written faster and all-over support is a little better.
Still, I like trying to tackle some problems without the use of JavaScript, just to see how far you can come with just HTML and CSS.
