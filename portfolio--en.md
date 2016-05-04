---
title: Portfolio
group: navigation-04
lang: en
id: portfolio
description: My Portfolio
permalink: /en/portfolio/
---
<div class="portfolio-wrapper" id="container">
    {% assign portfolio = site.portfolio | sort: "date" | reverse | where:"lang", page.lang %}
    {% for item in portfolio %}
        <div class="theme-wrapper mix {{ item.category }}">
            {% if item.title or item.item-preview %}
                <a href="{{ item.url | remove: '/index.html' }}">
                    {% if item.item-preview%}
                        {% if item.item-preview contains '.png'%}
                            {% assign featimg = item.item-preview | replace: '.png', '' %}
                            <img src="{{ site.img_dir }}/{{ featimg | append: '-450x450.png' }}" alt="{{ image.alttext }}">
                        {% elsif item.item-preview contains '.jpg'%}
                            {% assign featimg = item.item-preview | replace: '.jpg', '' %}
                            <img src="{{ site.img_dir }}/{{ featimg | append: '-450x450.jpg' }}" alt="{{ image.alttext }}">
                        {% endif %}
                    {% endif %}
                    {% if item.title %}
                        <h1>{{ item.title }}</h1>
                    {% endif %}
                </a>
            {% endif %}
        </div>
    {% endfor %}
</div>
