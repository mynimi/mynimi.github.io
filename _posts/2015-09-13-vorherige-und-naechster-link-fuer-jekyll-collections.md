---
date: 2015-09-13 19:14:58 +0200
title: Vorherige und n&auml;chster Link f&uuml;r jekyll collections
id: VunLfjc
lang: de
subtitle: Wie man einen Navigator in jekyll collections baut
tags: [jekyll, page navigator, liquid, ♦♦♦]
description: Wie man in jekyll links zu vorherigen und n&auml;chsten Elementen in collections schreibt
---
Wenn man in Jekyll Navigationslinks platzieren will, die einen innerhalb der Post zum vorherigen oder nächsten Post bringen, ist das eine einfache Sache, da sich die Artikel alle innerhalb des paginatiors befinden. Wie ihr den gleichen Effekt für Collections erzielt, erkläre ich euch hier.

<!-- more -->
Collections sind wahnsinnig cool aber auch recht kompliziert, wenn man sich zum ersten Mal damit auseinander setzt. Es sind weder Pages noch Posts. Wenn ihr vertraut mit WordPress seid, dann könnte man die collections mit den custom post types vergleichen. In jekyll pages kommen sie meist für Dinge wie ein Portfolio zum Einsatz (bei mir die Themes, sind zum Beispiel in einer collection).
Ich war ein grosser Fan davon, doch als ich festgestellt habe, dass es recht schwer ist, vorherige und nächste Links zu platzieren, habe ich mit liquid experimentiert. Wenn man es mal herausgefunden hat, ist es super einfach, aber wir kennen das ja - bis man es herausgefunden hat...

Die Lösung hat sich mir zumindest dargeboten, als ich die forloop variabeln gefunden habe.

Was wir brauchen ist bloss eine Variable, nach der wir sortieren können. Für mich war das das Datum. Jede Datei in meiner collection hat eine variable `date` wie sie auch bei Post vorzufinden ist. Und dann schaut es wie folgt aus:

```html
{% raw %}{% capture the_collection %}{{page.collection}}{% endcapture %}
{% if page.collection %}
    {% assign  document = site[the_collection] | sort: "date" | reversed %}
{% endif %}

{% for links in document %}
    {% if links.title == page.title %}

        {% unless forloop.first %}
            {% assign prevurl = prev.url %}

            {% assign prevtitle = prev.title %}
        {% endunless %}

        {% unless forloop.last %}
            {% assign next = document[forloop.index] %}

            {% assign nexturl = next.url %}

            {% assign nexttitle = next.title %}
        {% endunless %}
    {% endif %}

    {% assign prev = links %}
{% endfor %}

{% if prevurl or nexturl %}
    <div class="pagination">
        {% if prevurl %}<a href="{{prevurl}}" class="prev"><i class="fa fa-angle-left"></i> {{ prevtitle}}</a>{% endif %}                    
        {% if nexturl %}<a href="{{nexturl}}" class="next">{{nexttitle}} <i class="fa fa-angle-right"></i></a>{% endif %}
    </div>
{% endif %}{% endraw %}
```

Dieser Navigator ist nicht nur für collections gut. Habt ihr beispielsweise einen zweisprachigen Blog, könnt ihr den Paginator eher schlecht benutzen und auf diese Lösung ausweichen. Das würde dann so aussehen (wenn jeder Post eine Variable `lang` hat)

```html
{% raw %}{% assign  document = site.posts | sort: "date" | reversed | where:"lang", page.lang %}
    {% for links in document %}
        {% if links.title == page.title %}

            {% unless forloop.first %}
                {% assign prevurl = prev.url %}

                {% assign prevtitle = prev.title %}
            {% endunless %}

            {% unless forloop.last %}
                {% assign next = document[forloop.index] %}
                {% assign nexturl = next.url %}
                {% assign nexttitle = next.title %}
            {% endunless %}

        {% endif %}

        {% assign prev = links %}
    {% endfor %}

    {% if prevurl or nexturl %}
        <div class="pagination">
            {% if prevurl %}<a href="{{prevurl}}" class="prev"><i class="fa fa-angle-left"></i> {{ prevtitle}}</a>{% endif %}
            {% if nexturl %}<a href="{{nexturl}}" class="next">{{nexttitle}} <i class="fa fa-angle-right"></i></a>{% endif %}
        </div>
    {% endif %}{% endraw %}
```