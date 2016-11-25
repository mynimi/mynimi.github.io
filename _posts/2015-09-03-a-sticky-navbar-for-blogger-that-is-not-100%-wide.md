---
date: 2015-09-03 16:09:25 +0200
title: A sticky navbar for blogger that is not 100% wide
name: En1bsnfB
lang: en
subtitle: how to fix a blogger navbar without it having to be 100% wide.
tags: [blogger, tutorial, jQuery, javascript, navigation, ♦♦]
description: How to get a menu in blogger sticky without it having to be 100% wide.
---
I think the first thing I did using JavaScript in Blogger was wa sticky nav. For me this always meant a sticky nav that's 100% wide. That's pretty simple to accomplish, but what do we need to do, to make this nav only the width of the content, like we have it in pretty much all of the original blogger templates. With a little plugin a wrote a while ago, this will be done in minutes.
<!-- more -->
![sticky navbar blogger]({{site.img_dir}}/fixedscroll.gif)

# ID, please!
Bevore we can start, we need the ID of the element that we want to have sticky. Easiest way to accomplish that is by right-clicking on the element and inspect it. It'll give you the code and you can check the ID. If you are using a PageList Widget most probably your ID will be `#PageList1`.

![PageList ID herausfinden]({{ site.img_dir}}/findID.gif)

As soon as you have the ID, you'll memorize it.

# Sticky
Getting this sticky is a matter of minutes (maybe even seconds :D) Get to your Code via template edit HTML

Look for `</body>`

Immediately before that, we'll add some code.
If you already have jQuery added to your code, you do not need to add it again, if you don't let [Google host]((https://developers.google.com/speed/libraries/?hl=en#jquery)) it for you. Also copy the [minified version of my script](https://gist.github.com/mynimi/d224bbfa487d97102bde#file-jquery-stickynav-min-js)
And then we'll just write a little bit of jQuery to handle the sizing. Paste above `</body>` and we are done!

```html
<!-- jQuery from Google Hosted Libraries -->
<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js'/>
<script type='text/javascript'>
//<![CDATA[

// jquery.StickyNav.min.js https://gist.github.com/mynimi/d224bbfa487d97102bde
!function(e,t,n,r){e.fn.stickyNav=function(n){function r(){return i.prev("div").css("height",i.height()),windowTop=e(t).scrollTop(),i.css({position:windowTop>o?"fixed":"absolute",top:0,left:0})}n=e.extend({wrapperClass:"sticky-nav-wrapper",placeholderClass:"sticky-nav-placeholder",elementClass:"sticky-nav-element",zIndexValue:10},n),this.addClass(n.elementClass),e("."+n.wrapperClass).length||this.wrap('<div class="'+n.wrapperClass+'" style="position: relative; top: 0; left: 0; z-index: '+n.zIndexValue+';"></div>'),e("."+n.placeholderClass).length||this.before('<div class="'+n.placeholderClass+'"></div>');var i=this,o=this.offset().top;return e(t).on("load resize scroll",function(e){r()}),this}}(jQuery,window,document,this);

$(document).ready( function() {
// get original width of menu
var menuWidth = $('#PageList1').outerWidth(); // replace #PageList1 with your ID, if it's different.

  // initiate plugin
  $('.tabs-outer').stickyNav();

  // add width 100% to wrapper element
  $('.sticky-nav-element').css('width','100%');

  // menu gets original width and centering
  $('#PageList1').css({
    'margin': '0 auto',
    'max-width': menuWidth
  });
});

//]]>
</script>
```
