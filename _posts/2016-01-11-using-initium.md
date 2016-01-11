---
date: 2016-01-11 14:07:27 +0100
title: Setting up a blog with initium
id: EjBmi
subtitle: How to use intium to get your own jekyll blog up and running
tags: [initium, jekyll, tutorial, theme, ♦♦♦♦]
description: an introduction on how to use the jekyll start theme initium
category: en
lang: en
---
A while ago I finally managed to publish my jekyll starter theme "initum;". Since it is a pretty packed theme, I wanted to make this post as an introduction on how to use it.
<!-- more -->
<a href="/en/themes/initium/" class="btn">Initium;</a>

### 0. What is initium and is it for me?
Okay, so that's the basic question everyone should ask themselves before reading on.
initium is a jekyll starter theme. So a theme that is not the prettiest when it comes to design, because it was mostly made to implement basic functionality and not look good. The default theme from jekyll itself does not have an awful lot of features built in. initium has all of the things that I wished my theme to have, when I first started. It would have made my life a lot easier by saving me hours of googling and trial and error that was mostly error. Initium is what I use to start most of my jekyll projects and it comes with all of the following built-in.

#### Features
* Multi-Language-Support
* Portfolio based on collections
* featured images, shown as headers
* A dynamic Menu
* Archive with all posts in a table
* Blog
* static pages
* index with newest posts and portfolio entries
* Sidebar
* Support for Galleries
* Uses Sass, Jade und Grunt
* Grunt-deploy ensures hosting on GitHub with jekyll 3.

In case a feature is missing, that you absolutely want to see in initium, let me know and I will see what I can do.

#### Who is initium for?
Okay, so what initium is should be clear now. Who it's for, not. And that's the most important question, really.

Initium is made for people who have already worked with jekyll or are ready to dig into jekyll before using initium. It is made for everyone that wishes for their themes to be more, but prefer to focus on design instead of implementing functions. The design is not done yet, that's the work you'll have to take care of.

Also, initium uses the task runner grunt. It would be good if you learn a bit about that as well, but there should not be much changes needed. It's probably enough if you can use a terminal.

In addition, I used jade and sass, so if you know these, that's definitely a plus. You can always go with just HTML and CSS, but jade and sass rock.

### 1. Installation
In this section we'll look at installing initium.

#### 1.1 Requirements
I assume grunt, node, ruby, sass, git and jekyll are already installed. If not, Google is a great help at finding out how you get there.
You do not need to install a local grunt yet, we'll do that later.

#### 1.2 Git Repo Creation
Before starting, we need to clone initium. Then create a new repo, where hosting will happen and we'll make a small adjustment to the gruntfile. I prepared this small video where you can see how that's done.

<div class="video">
    <iframe src="https://www.youtube.com/embed/8nLx06ZUH8c" frameborder="0" allowfullscreen></iframe>
</div>

As you may know there's two possibilities on how to host with github pages. You can either use your personal site. Then call your repo `username.github.io`. In case you want to do this, you'll let grunt-deploy push to the master branch, so create a new branch and push all of jekyll-starter into that branch (I'd call it source)
If not, create a normal repo, and hosting will take place in the gh-pages branch. the URL will then look like this: `username.github.io/reponame` I will use with this, because that's what's more common.

*Alternatively*, you can also just fork the jekyll-starter-repo, but you will copy the whole git-history. I just like to get rid of it, so I just have the changes. But maybe that's just some weird personal behaviour.

#### 1.3 Grunt
Grunt is a task runner, that helps with automation. Unfortunately grunt needs quite a lot of space, but it's worth it, if you ask me.

##### 1.3.1 Install
I install the local grunt via terminal in my repo-folder. With `npm install`. Installation might take a while.

![npm install terminal]({{ site.img_dir }}/npm-install.png)

##### 1.3.2 Imagery
I added two modules to initium, which help with imagery. There is one that will crop your images and one that minimizes them. The minification does take a while, but you always want to have compressed images on websites. You add your images within the img-folder. And imagemin will create the compressed files within media/compressed.

##### 1.3.3 Commands
okay, those are the commands you have.

```bash
grunt serve
```
That's basically just jekyll serve.

```bash
grunt
```
This is the default task. It will first run the image tasks, then minify javascript, compile Sass, run Autoprefixer, compile jade, build the site, move js and css files, open the local site and watch for changes. In case changes are made, the required steps will be taken.

```bash
grunt build
```
Basically the same thing as the default task minus the watch thing. SO building the page without showing you. In case you know what the change will look like and you just want to ship it.

```bash
grunt deploy
```
This is for deployment. I go into a bit more detail later. Before that, it will minify your HTML.

```bash
grunt deploy-pretty
```
Alternative to grunt deploy in case you don't want your HTML to be minified but just prettified. The thing jekyll spits out is definitely not pretty, since all of the lines used for liquid stay empty. If minified or prettified is personal preference.

### 2. Upload
Okay, Upload is a little complicated, so here's the long version.

GitHub itself has jekyll installed on their servers. But it's an older version than the current version (3.0). Jekyll 3 introduced a lot of great changes, that I would like to take advantage of. Also GitHub does not allow for plugins, which are used for example to generate the tag pages. I don't really like these restrictions, which is why I don't want to let GitHub build my site, but use my own build.

There is a possibility to have the exact computer build hosted on GitHub. It will require you to compile the site, and then copy the content of this built site to the hosting branch. And the HTML files will be hosted there. To do this manually would take a few steps, but I prefer to let Buildcontrol do the work. So I need one more command, but if it enables me to use plugins and the current version of jekyll, I am not against that.

### 3. Personalization
initium is a starter theme. You want to work on the design of starter themes.
Obviously you want to familiarize yourself with the code and try to understand the structure of the site.
But here a few infos that might help you with the first steps.

#### 3.0 Config
before starting, you want to work on the config-file.
All of the things you want to specially look at below, with a little explanatory comment.

File: `_config.yml`

```yaml
name: initium; # name of the site.
url: http://halfapx.com # The url of the site, withou the base url. Default would be http://username.github.io
baseurl: /jekyll-starter # Base-URL is the repository name. Always use this if you work on gh-pages branch
custom_logo: initium.png # more in the next section about this
destination: jekyllbuild # Default is _site, but Grunt has problems with folders that start with _ so I changed that, keep it for less trouble.
excerpt_separator: "<!-- more -->" # Use this to mark the section of text that will be shown on blog index pages.
```

#### 3.1 Logo
If you don't want to have the title of your site displayed, you can use a custom logo. Just place it within the image folder and add it after the `custom_logo` Variable. It has a max-width, but you can adjust it within CSS.

#### 3.2 Style Settings
Here I just want to put your attention to the settings file. It has a ton of variables that will already give you a lot of options for changes. Start there, if you want some easy adjustments, and then go over to the rest of the sass files.

You find this file under `sass/base/_settings.scss`

#### 3.4 More Changes
How to change things is obvious. Start Grunt, open code, make adjustments, see the changes. Have a lot of fun.

### 4. Multiple Languages
initium supports multiple languages. Each page, post or anything that has multiple languages does need a `lang` variable in the front matter. and an `id`. blog posts are an exception. Instead of an id, they need a `name`. So everything that is the same content, gets the same identifier, so that the language-switcher works fine.
On all files, that are not blogposts and not your default language, you might want to use a `permalink` variable, to add the folder for the language. For the posts you could just add a category of that language short, and the permalink will be created automatically. But you can also go with a permalink variable whatever suits you best.

By default I have German as the default language and english as the additional language. You can change it ou easily.

A version in just one language is planned and will be published soon.

### 5. Content Creation
Creating content is just basic jekyll. I will show you what Variables there are.

#### 5.1 Pages
```yaml
---
layout: page # optional, defaults defined for this
group: "navigation-02" # this is for the dynamic menu. the number in the end gives you the order.
title: Blog # Title of the page
page-title: no # if you add this, the page title will not be displayed. Good for pages like blog
id: blog # identifier for multilang
lang: en # language
permalink: /en/blog/ # Permalink
description: The blog overview. # meta description, used for example in google results
header-pic: image.jpg # if you wish to use a header image, this will be added.
site-title-display: false # if you don't want to add the site title, this hides it.
---
```

How to add galleries will be explained in 5.4

#### 5.2 Posts
```yaml
---
layout: post # optional, defaults defined for this
lang: en
category: en # if you don't want to add permalink, use this for secondary language
title: Header Image # title
name: hi1 # id for posts is name
subtitle: a post with header image, and no title display # subtitle
tags: [standard, header-pic] # Tags
description: Ein Post für initium; # meta description, used for example in google results
header-pic: image.jpg
site-title-display: false
---
```

How to add galleries will be explained in 5.4


#### 5.3 Portfolio Entry
These are created as collections. They have a gallery by default.

```yaml
---
title: 3D Blooms
subtitle: fractal art
category: [fractal]
lang: en
id: 3dblooms
header-pic: gold-beam.png
permalink: /en/portfolio/3d-blooms/
description: Ein Portfolio-Eintrag für initium
site-title-display: false
gallery: # here gallery is definied
    - images:
      - filename: add-sparkle.png # name of the image file
        alttext: Add a little Sparkle # description, will be displayed below in lightbox
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

#### 5.4 Galleries
Galleries are defined within the front matter as shown within the portfolio entry. If you want to add a gallery to a page or post, you will need to add an include within the content section. It looks like this:

```liquid
{% raw %}{% include gallery.html %}{% endraw %}
```

### Questions?
SO, that's all for my short intro to initium. I hope it was helpful. In case you have questions, let me know. If there are any problems or things that don't work out, feel free to create an ![issue](https://github.com/mynimi/jekyll-starter/issues) on GitHub.
And know, go on have fun and let me know what you think of initium.