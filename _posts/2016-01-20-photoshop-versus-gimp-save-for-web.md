---
date: 2016-01-20 23:22:24 +0100
title: Photoshop vs GIMP&colon; Save for Web [Toolbox Smackdown]
name: PvGSfW[S
subtitle: Who's better at saving for web?
tags: [toolbox smackdown, save for web, photoshop, gimp]
description: A comparison between photoshop and GIMP and their ability to save an image for the internet.
lang: en
category: en
---
Toolbox Smackdown. In this new series I'd like to compare Open Soure Programs or Freeware to the professional (expensive) Program that they can replace. The comparison will just talk about one specific skill. I'll mostly talk about Illustrator vs Inkscape or Photoshop vs. GIMP. I know, that's got nothing to do with Code, but when talking about webdesign or the whole identity of a webiste, imagery is a very important actor. Also I thought why not change up the content a little bit.

In this first part I wanted a Phtoshop vs GIMP battle and tested how image compression for web work were competing.
<!-- more -->

### History
To beginn with a little bit of my history with both of these programs. I still can remember that I first encountered GIMP about 10 years ago. So I was around 12 when I first started using GIMP and I fell in love with it, because it offered so much more than Paint, which was what I had used before to help me create my own wallpapers. Since then I was always the one person advocating GIMP and have installed it first thing when setting up a new PC. My first real encounter with Photoshop happened much later. I only got my hands on Photoshop CS6 once I had this student discount, so GIMP and I go way back, but that does not mean that I prefer it. I am absolutely in love with Photoshop, the only time I really go back to GIMP is when I want to rid myself of ugly white backgrounds, because that work is a pain in the ass in Photoshop.

### Versions
For this test I used the current versions of both programs
Photoshop CC 2015 1.1 Release
GIMP 2.8.16

### Test Images
I used the 3 standard image formats.

[![chichen itza original]({{ site.img_dir }}/chichenitza_original.jpg)]({{ site.img_dir }}/chichenitza_original.jpg)

Classic jpg. The image was made a little bit smaller after Photoshop Retouch, but not saved for web. Size: 1.52 MB

[![transparent original]({{ site.img_dir }}/transparent_original.png)]({{ site.img_dir }}/transparent_original.png)

PNG with transparent background and semi-transparent shadow. Image was created in Photoshop but not saved for web. Size: 47.1 KB

[![animation original]({{ site.img_dir }}/typing_original.gif)]({{ site.img_dir }}/typing_original.gif)

GIF Animation. Was created using [LICEcap](http://www.cockos.com/licecap/). Size: 3.83 KB

### Photoshop
Saving an image for web is super easy in Photoshop.
Just Ctrl+Alt+Shift+S (replace Ctrl with Cmd on a Mac) and the window will open. Photoshop offers a lot of options to optimize. I mostly just went with the defaults.

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
In GIMP there's no specific Save for Web. Compression will happen once you export an image. Shift+Ctrl+E

Setting are shown below

#### JPG
[![save for web jpg gimp]({{ site.img_dir }}/save_jpg_gimp.jpg)]({{ site.img_dir }}/save_jpg_gimp.jpg)
[![chichen itza gimp]({{ site.img_dir }}/chichenitza_gimp.jpg)]({{ site.img_dir }}/chichenitza_gimp.jpg)

#### PNG
[![save for web png gimp]({{ site.img_dir }}/save_png_gimp.jpg)]({{ site.img_dir }}/save_png_gimp.jpg)
[![transparent gimp]({{ site.img_dir }}/transparent_gimp.png)]({{ site.img_dir }}/transparent_gimp.png)

#### GIF
[![save for web gimp]({{ site.img_dir }}/save_gif_gimp.jpg)]({{ site.img_dir }}/save_gif_gimp.jpg)
[![animation gimp]({{ site.img_dir }}/typing_gimp.gif)]({{ site.img_dir }}/typing_gimp.gif)

### Result

#### File Size

 File | Original | Photoshop | GIMP
--- | --- | --- | ---
JPG | 1.52 MB | 247 KB | 235 KB
PNG | 47.1 KB | 48.2 KB | 32.3 KB
GIF | 3.83 KB | 4.07 KB | 3.37 KB

I was honestly surprised. I never think about image compression and GIMP together, probably mostly because I really like to decrease the size of my images before anything else, and in GIMP that means an extra step. I also always try to use JPG whenever possible, so that does save quite a lot of space as well. But I was definitely not expecting this. especially not that Photoshop increased file size. Minimally, but PNG and GIF were smaller before compression.

#### Quality
So how's the quality.
Below there is an image for the JPG, which has the most obvious change. Both obviously decreased the image quality, as you can especially see if you have a look at the sky but it's definitely enough for the internet. I could not really say that one image looks better than the other, each has their flaws, but none are so big that they'd ruin the result. The other two formats literally did not make a change that I could see even if I put them right next to each other.

[![comparison jpg]({{ site.img_dir }}/chichenitza_all.jpg)]({{ site.img_dir }}/chichenitza_all.jpg)
click on image to see full size

#### Who Wins?
If we go by file size, GIMP is a clear winner. I really like the fact, that GIMP does take care of compression, but I still would like the extra feature, because someone might be looking for it. Also I really like the image size feature we have in Photoshop. It makes resizing so much faster and better.
So in the end, I think I'd go with a tie. They both do a really good jpb.
