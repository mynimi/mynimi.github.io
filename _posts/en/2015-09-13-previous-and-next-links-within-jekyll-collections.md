---
date: 2015-09-13 19:14:58 +0200
title: previous and next links within jekyll collections ♦♦♦
name: VunLfjc
subtitle: how a navigator for jekyll collections is written
tags: [jekyll, page navigator, liquid, ♦♦♦]
description: How paginator links are placed within jekyll collections
category: en
---
If you want to add some navigation links within jekyll posts that bring you to the previous and next one, it's a fairly simple thing to achieve, since all articles are found within the paginator. I'm showing you how to do the same thing for collections.

<!-- more -->
Collections are a really cool feature of jekyll but also a little complicated if you dive into them for the first time. They are neither pages nor posts. If you are familiar with WordPress you could compare collections with WP custom post types. In jekyll pages they are mostly used for things like a portfolio (for me it's the themes section, as an example).
I was a big fan of them, but then I wanted to navigate through them and had some trouble. So I did some liquid experimenting, as soon as you know what to do it's fairly simple, but the problem is getting there...

So the solution came to me, as soon as I had found the forloop variables.

What we need is just one variable within the front matter that we'll use for sorting. For me it was the date. Each file in my collection has `date` within the front matter, just like a post.

And then it basically goes like this:

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

This navigator is not only good for collectins. If you have a multilingual blog like me you might want to use this for posts as well because it's rather hard with the paginator, sinve multilingual posts are not natively supported by jekyll. So that's why I went with this solution. Every post of mine has a `lang` variable.

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