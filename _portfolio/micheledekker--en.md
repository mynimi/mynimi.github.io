---
description: Portfolio of Myriam Frisano. Webdesign of micheledekker.ch
title: Michèle's Gallery
subtitle: Design of micheledekker.ch
date: 2016-01-08 12:00:00
category: coding
tags: [jekyll, code, static site, webdesign, sass]
lang: en
name: micheledekker
gallery:
  - images:
    - filename: michele_home.png
      alttext: home page, with a big image slider
    - filename: michele_page.png
      alttext: A static page, about
    - filename: michele_blog.png
      alttext: The blog overview
    - filename: michele_blogpost.png
      alttext: An example blog post
    - filename: michele_gallery.png
      alttext: A gallery overview
    - filename: michele_lightbox.png
      alttext: the lightbox opens, when clicked on an image
permalink: /en/portfolio/micheledekker/
livesite: http://micheledekker.ch
item-preview: michele_home.png
---
I had a lot of fun working on this site. I love big imagery, especially when it's such beautiful photography as Michèle's.

We went for a minimal approach where the focus lies on the images. For the home page I created a full-screen image slideshow with CSS only.

The whole page was written with jekyll.

{% include gallery.html %}
