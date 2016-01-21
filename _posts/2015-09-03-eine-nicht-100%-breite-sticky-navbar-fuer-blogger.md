---
date: 2015-09-03 16:09:25 +0200
title: Eine nicht 100% breite sticky navbar f&uuml;r Blogger
name: En1bsnfB
lang: de
subtitle: Wie man eine Navbar in Blogger fixiert, ohne dass sie gleich 100% einnimmt
tags: [blogger, tutorial, jQuery, javascript, navigation, ♦♦]
description: Wie ihr in Blogger ein Menu sticky bekommt, ohne dass die Navbar dann 100% einnimmt
---
Ich glaube das erste was ich mit JavaScript bei Blogger gemacht habe, ist eine sticky nav. Dabei war meine sticky nav immer eine Navbar, die über 100% der ganzen Page ging. Das ist ziemlich einfach, doch wie schaut das aus, wenn wir die Navigationsleiste so haben wollen, wie sie in den Standardtemplates von Blogger ausschauen. Also mittig, aber nur so breit wie der Content-Bereich. Mit einem kleinen Plugin, das ich vor einer Weile geschrieben habe, ist das super einfach.
<!-- more -->
![sticky navbar blogger]({{site.img_dir}}/fixedscroll.gif)

#### ID herausfinden
Bevor wir loslegen können, müssen wir die ID des Elements herausfinden, das wir fixieren möchten.
Am einfachsten geht es, wenn ihr auf das Element geht, rechtsklick und dann Element untersuchen. Dann könnt ihr den Code untersuchen und die ID herausfinden. Falls ihr das Seiten-Gadget verwendet, ist es sehr wahrscheinlich, dass diese ID `#PageList1` sein wird, wie es bei mir der Fall war.

![PageList ID herausfinden]({{ site.img_dir}}/findID.gif)

Wenn ihr die ID habt, merkt ihr euch die.

#### Fixieren
Fixieren geht ganz schnell. Öffnet den Code unter Vorlage>HTML bearbeiten.

Sucht nach `</body>


direkt oben drüber kommt jetzt jQuery und das Script rein.
Falls ihr jQuery bereits einmal eurem Code hinzugefügt habt, müsst ihr das nicht noch einmal tun, ansonsten ist es nötig, da mein Plugin ein jQuery-Plugin ist.

Wir lassen [Google hosten](https://developers.google.com/speed/libraries/?hl=en#jquery), und kopieren meine [minifizierte Script Version](https://gist.github.com/mynimi/d224bbfa487d97102bde#file-jquery-stickynav-min-js) direkt in den Code rein.

Dann schreiben wir noch ein kleines bisschen javascript, um das Menu nicht 100% breit zu machen, denn das macht das Script per default.

Ihr kopiert also überhalt von `</body>` folgendes rein:

```html
<!-- jQuery von Google Hosted Libraries -->
<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js'/>
<script type='text/javascript'>
//<![CDATA[

// jquery.StickyNav.min.js https://gist.github.com/mynimi/d224bbfa487d97102bde
!function(e,t,n,r){e.fn.stickyNav=function(n){function r(){return i.prev("div").css("height",i.height()),windowTop=e(t).scrollTop(),i.css({position:windowTop>o?"fixed":"absolute",top:0,left:0})}n=e.extend({wrapperClass:"sticky-nav-wrapper",placeholderClass:"sticky-nav-placeholder",elementClass:"sticky-nav-element",zIndexValue:10},n),this.addClass(n.elementClass),e("."+n.wrapperClass).length||this.wrap('<div class="'+n.wrapperClass+'" style="position: relative; top: 0; left: 0; z-index: '+n.zIndexValue+';"></div>'),e("."+n.placeholderClass).length||this.before('<div class="'+n.placeholderClass+'"></div>');var i=this,o=this.offset().top;return e(t).on("load resize scroll",function(e){r()}),this}}(jQuery,window,document,this);

$(document).ready( function() {
// wir schnappen uns die ursprüngliche Breite des Menu Widgets
var menuWidth = $('#PageList1').outerWidth(); // ersetze #PageList1 durch deine ID, falls sie anders ist

  // initiiere Plugin
  $('.tabs-outer').stickyNav();

  // äusseres Element bekommt volle Breite
  $('.sticky-nav-element').css('width','100%');

  // Menu bekommt ursprüngliche Breite und Zentrierung
  $('#PageList1').css({
    'margin': '0 auto',
    'max-width': menuWidth
  });
});

//]]>
</script>
```

Und dann sind wir fertig.