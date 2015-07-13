---
permalink: /archiv/
group: "navigation-04"
title: Archiv
lang: de
id: archive
description: Alle Posts von 1/2 a px. Posts über blogger, jekyll, HTML und Sass.
---
{% assign posts = site.posts | where:"lang", page.lang %}
Datum | Titel | Tags
---|---|---
{% for post in posts%}{% include date.md %} | [{{ post.title }}]({{ post.url }}) | {% for tag in post.tags %} <a href="{{ site.tag_dir}}/{{ tag }}" class="tag">{{ tag }}</a> {% endfor %}
{% endfor %}