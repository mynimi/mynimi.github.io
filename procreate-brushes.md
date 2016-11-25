---
title: Procreate Brushes
group: navigation-05
lang: en
id: brushes
description: All of my Procreate Brushes
enable-comments: yes
---
{% assign new = site.data.brushes | where:"cat", "new" %}
{% assign premium = site.data.brushes | where:"cat", "premium" %}
{% assign free = site.data.brushes | where:"cat", "free" %}
{% assign special = site.data.brushes | where:"cat", "special" %}
{% assign custom = site.data.brushes | where:"cat", "custom" %}
{% assign favorite = site.data.brushes | where:"cat", "favorite" %}
{% assign essential = site.data.brushes | where:"cat", "essential" %}
{% assign nonlettering = site.data.brushes | where:"cat", "nonlettering" %}
{% assign single = site.data.brushes | where:"cat", "single" %}
{% assign set = site.data.brushes | where:"cat", "set" %}

<!--
new
premium
free
special
custom
favorite
essential
nonlettering
single
set
-->
<p>Here you find all of my procreate brushes. Use the categories to find what you're looking for.</p>
<p>Check the Sidebar for more on the subject.</p>
<div class="brush-nav">
    <span class="toggle-tab active" data-toggles-tab="new">new [{{ new.size}}]</span>
    <span class="toggle-tab" data-toggles-tab="premium">premium [{{ premium.size}}]</span>
    <span class="toggle-tab" data-toggles-tab="free">free [{{ free.size}}]</span>
    <span class="toggle-tab" data-toggles-tab="special">special [{{ special.size}}]</span>
    <span class="toggle-tab" data-toggles-tab="custom">custom [{{ custom.size}}]</span>
    <span class="toggle-tab" data-toggles-tab="favorite">favorite [{{ favorite.size}}]</span>
    <span class="toggle-tab" data-toggles-tab="essential">essential [{{ essential.size}}]</span>
    <span class="toggle-tab" data-toggles-tab="nonlettering">nonlettering [{{ nonlettering.size}}]</span>
    <span class="toggle-tab" data-toggles-tab="single">single [{{ single.size}}]</span>
    <span class="toggle-tab" data-toggles-tab="set">set [{{ set.size}}]</span>
</div>
<div class="brush-tab-wrapper">
    <div class="brush-tab visible" id="new">
        <div class="box">
            {% for brush in new %}
            <div class="mix {{ brush.cat | join: ' ' }}">
                <a href="/procreate-brushes/img/{{ brush.img }}.jpg" data-lightbox="true">
                    <img src="/procreate-brushes/img/{{ brush.img }}.jpg" alt="{{ brush.img }}">
                </a>
                <a href="{{ brush.url }}">
                    <i class="fa fa-download"></i>
                    Download
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
    <div class="brush-tab" id="premium">
        <div class="box">
            {% for brush in premium %}
            <div class="mix {{ brush.cat | join: ' ' }}">
                <a href="/procreate-brushes/img/{{ brush.img }}.jpg" data-lightbox="true">
                    <img src="/procreate-brushes/img/{{ brush.img }}.jpg" alt="{{ brush.img }}">
                </a>
                <a href="{{ brush.url }}">
                    <i class="fa fa-download"></i>
                    Download
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
    <div class="brush-tab" id="free">
        <div class="box">
            {% for brush in free %}
            <div class="mix {{ brush.cat | join: ' ' }}">
                <a href="/procreate-brushes/img/{{ brush.img }}.jpg" data-lightbox="true">
                    <img src="/procreate-brushes/img/{{ brush.img }}.jpg" alt="{{ brush.img }}">
                </a>
                <a href="{{ brush.url }}">
                    <i class="fa fa-download"></i>
                    Download
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
    <div class="brush-tab" id="special">
        <div class="box">
            {% for brush in special %}
            <div class="mix {{ brush.cat | join: ' ' }}">
                <a href="/procreate-brushes/img/{{ brush.img }}.jpg" data-lightbox="true">
                    <img src="/procreate-brushes/img/{{ brush.img }}.jpg" alt="{{ brush.img }}">
                </a>
                <a href="{{ brush.url }}">
                    <i class="fa fa-download"></i>
                    Download
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
    <div class="brush-tab" id="custom">
        <div class="box">
            {% for brush in custom %}
            <div class="mix {{ brush.cat | join: ' ' }}">
                <a href="/procreate-brushes/img/{{ brush.img }}.jpg" data-lightbox="true">
                    <img src="/procreate-brushes/img/{{ brush.img }}.jpg" alt="{{ brush.img }}">
                </a>
                <a href="{{ brush.url }}">
                    <i class="fa fa-download"></i>
                    Download
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
    <div class="brush-tab" id="favorite">
        <div class="box">
            {% for brush in favorite %}
            <div class="mix {{ brush.cat | join: ' ' }}">
                <a href="/procreate-brushes/img/{{ brush.img }}.jpg" data-lightbox="true">
                    <img src="/procreate-brushes/img/{{ brush.img }}.jpg" alt="{{ brush.img }}">
                </a>
                <a href="{{ brush.url }}">
                    <i class="fa fa-download"></i>
                    Download
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
    <div class="brush-tab" id="essential">
        <div class="box">
            {% for brush in essential %}
            <div class="mix {{ brush.cat | join: ' ' }}">
                <a href="/procreate-brushes/img/{{ brush.img }}.jpg" data-lightbox="true">
                    <img src="/procreate-brushes/img/{{ brush.img }}.jpg" alt="{{ brush.img }}">
                </a>
                <a href="{{ brush.url }}">
                    <i class="fa fa-download"></i>
                    Download
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
    <div class="brush-tab" id="nonlettering">
        <div class="box">
            {% for brush in nonlettering %}
            <div class="mix {{ brush.cat | join: ' ' }}">
                <a href="/procreate-brushes/img/{{ brush.img }}.jpg" data-lightbox="true">
                    <img src="/procreate-brushes/img/{{ brush.img }}.jpg" alt="{{ brush.img }}">
                </a>
                <a href="{{ brush.url }}">
                    <i class="fa fa-download"></i>
                    Download
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
    <div class="brush-tab" id="single">
        <div class="box">
            {% for brush in single %}
            <div class="mix {{ brush.cat | join: ' ' }}">
                <a href="/procreate-brushes/img/{{ brush.img }}.jpg" data-lightbox="true">
                    <img src="/procreate-brushes/img/{{ brush.img }}.jpg" alt="{{ brush.img }}">
                </a>
                <a href="{{ brush.url }}">
                    <i class="fa fa-download"></i>
                    Download
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
    <div class="brush-tab" id="set">
        <div class="box">
            {% for brush in set %}
            <div class="mix {{ brush.cat | join: ' ' }}">
                <a href="/procreate-brushes/img/{{ brush.img }}.jpg" data-lightbox="true">
                    <img src="/procreate-brushes/img/{{ brush.img }}.jpg" alt="{{ brush.img }}">
                </a>
                <a href="{{ brush.url }}">
                    <i class="fa fa-download"></i>
                    Download
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
</div>