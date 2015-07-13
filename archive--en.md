---
group: "navigation-04"
title: Archive
lang: en
id: archive
permalink: /en/archive/
description: All posts by 1/2 a px. Posts about blogger, jekyll, HTML Sass and other things web-related.
---
{% assign posts = site.posts | where:"lang", page.lang %}
Date | Title | Tags
---|---|---
{% for post in posts%}{% include date.md %} | [{{ post.title }}]({{ post.url }}) | {% for tag in post.tags %} <a href="{{ site.tag_dir}}/{{ tag }}" class="tag">{{ tag }}</a> {% endfor %}
{% endfor %}