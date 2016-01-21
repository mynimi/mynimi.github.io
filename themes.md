---
title: Themes
group: navigation-03
lang: de
id: themes
description: Alle meine themes und templates. Kostenlos responsive Blogger und jekyll themes
---
<div class="filtering">
    <span class="filter" data-filter="all">Alle Anzeigen</span> &bull;
    <span class="filter" data-filter=".jekyll">jekyll</span> &bull;
    <span class="filter" data-filter=".blogger">Blogger</span>
</div>

<div class="portfolio-wrapper" id="container">
    {% assign themes = site.themes | sort: "date" | reverse | where:"lang", page.lang %}
    {% for theme in themes %}
        <div class="theme-wrapper mix {{ theme.category }}">
            {% if theme.title and theme.theme-preview %}
                <a href="{{ theme.url | remove: '/index.html' }}">
                    {% if theme.theme-preview%}
                        {% if theme.theme-preview contains '.png'%}
                            {% assign featimg = theme.theme-preview | replace: '.png', '' %}
                            <img src="{{ site.img_dir }}/{{ featimg | append: '-450x450.png' }}" alt="{{ image.alttext }}">
                        {% elsif theme.theme-preview contains '.jpg'%}
                            {% assign featimg = theme.theme-preview | replace: '.jpg', '' %}
                            <img src="{{ site.img_dir }}/{{ featimg | append: '-450x450.jpg' }}" alt="{{ image.alttext }}">
                        {% endif %}
                    {% endif %}
                    {% if theme.title %}
                        <h1>{{ theme.title }}</h1>
                    {% endif %}
                    {% if theme.subtitle %}
                        <h2 class="subtitle">{{ theme.subtitle }}</h2>
                    {% endif %}
                        <p>{% include date.html %}</p>
                </a>
            {% endif %}
        </div>
    {% endfor %}
</div>
