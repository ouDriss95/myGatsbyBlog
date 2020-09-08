---
title: Displaying custom author names using custom fields
author: Driss Oudmine
date: 2020-09-07
hero: ./images/hero.jpg
excerpt: In this Article I'm going to show you how to feature a guest blogger who you would like to credit as the author.
---
By default, Shopify themes will display a blog post author based on staff admin accounts but it’s possible to edit the article template and display any author name you would like with the help of custom fields. So let me show you how to feature a guest blogger who you would like to credit as the author

1. From your Shopify admin, go to **Online Store** > **Themes**.
2. Find the Minimal theme, and then click **Actions** > **Duplicate**.
3. Find the theme that called *Copy of Minimal* then click **Actions** > **Edit Code**.
4. On the left bar, search for a folder called *Sections* then find a file called "article-template.liquid".
5. Inside the "article-template.liquid" file replace the following code 
```
{% if article.metafields.author.name %}
   <span class="meta-sep">&#8226;</span>
   {{ article.metafields.author.name }}
{% else %}
   <span class="meta-sep">&#8226;</span>
   {{ article.author }}
{% endif %}
```
with the one is highlighted below. That highlighted code is between line 25-26 in your code editor
```js {2-3}
{% if section.settings.article_author_enable %}
   <span class="meta-sep">&#8226;</span>
   {{ article.author }}
{% endif %}
```
**6.** Next, On the same folder which is *Sections*. Find a file called "blog-template.liquid" 

**7.** Inside the "blog-template.liquid" file replace the following code 
```
{% if article.metafields.author.name %}
   <span class="meta-sep">&#8226;</span>
   {{ article.metafields.author.name }}
{% else %}
   <span class="meta-sep">&#8226;</span>
   {{ article.author }}
{% endif %}
```
with the one is highlighted below. That highlighted code is between line 27-28 in your code editor
```js {2-3}
{% if section.settings.blog_author_enable %}
   <span class="meta-sep">&#8226;</span>
   {{ article.author }}
{% endif %}
```
**8.** Now, we are going to need custom fields in order to make each post with its own author name! so in this case we
will need to install an app called [Metafields
Guru](https://apps.shopify.com/metafields-editor-2?surface_detail=metafields&surface_inter_position=1&surface_intra_position=4&surface_type=search)

**9.** After you install the app, select Blogs & Posts then choose one of your posts that you want to feature the guest blogger.

**10.** After you choose the post, click on *Create Metafield* button.

**11.** Now you can see a Form appeared after you click on *Create Metafield*, inside the input with name of "Key" start writing **name** and inside the input with the name of "Namespace" start writing **author**. Next, write the name of the author guest inside the last input which is the tallest one!

**12.** After you finish creating the name of the author guest, click on **Save** button. 

Once this is added, we can view the article and the name of guest author will appear as the article author. I hope this article guide is helpful for you!