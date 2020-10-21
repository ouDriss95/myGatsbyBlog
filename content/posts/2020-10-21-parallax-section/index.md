---
title: How to add the Parallax section in your Shopify
author: Driss Oudmine
date: 2020-10-21
hero: ./images/hero.jpg
excerpt: In this article, you will learn how to add a section with a parallax effect to boost the visual experience of your home page.
---
In this tutorial article we will be adding a parallax section with fixed scrolling using HTML and CSS and LIQUID. You will see that when you scroll the image inside the section will stay in place, so let me show you how to add it to your Shopify store.

1. From your Shopify admin, go to **Online Store** > **Themes**.
2. Find the Minimal theme, and then click **Actions** > **Duplicate**.
3. Find the theme that called *Copy of Minimal* then click **Actions** > **Edit Code**.
4. On the left bar, search for a folder called *Assets* then add the following code inside the "theme.scss.liquid" file
```css
// Parallax Featured Product Style
.featured {
  position: relative !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  height: 400px;
  color: #fff;
  font-size: 18px;
  font-size: 1.125rem;
  overflow: hidden;
}
.featured h3 {
  color: #fff;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1;
  font-size: 36px;
  font-size: 2.25rem;
}
.featured .price_box {
  display: inline-block;
  margin-right: 15px;
  float: left;
}
.featured .price_box .new_price {
  font-size: 2rem;
  color: #fff;
}
.featured .price_box .old_price {
  color: #999;
  text-decoration: line-through;
  display: inline-block;
  white-space: nowrap;
  font-weight: 500;
  font-size: 16px;
  font-size: 1rem;
  margin-left: 5px;
  font-size: 1.125rem;
}
.opacity-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
}
.align-items-center {
  -ms-flex-align: center!important;
  align-items: center!important;
}
.d-flex {
  display: -ms-flexbox!important;
  display: flex!important;
}
.margin_60 {
  padding-top: 60px;
  padding-bottom: 60px;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 40px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.column-one {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

@media (max-width: 767px) {
  .featured {
    font-size: 16px;
  }
  .featured h3 {
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1;
    font-size: 28px;
  }
  .featured .price_box .new_price {
    font-size: 20px;
    color: #fff;
  }
  .margin_60 {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .column-one {
    -ms-flex: 0 0 50%;
    flex: 0 0 90%;
    max-width: 100%;
  }
}
```
**5.** Again on the left bar, search for a folder called *Sections* then create a new file called "parallax-featured-product.liquid"

**6.** Copy and paste the following code inside the "parallax-featured-product.liquid" file
```js
 {% comment %}
   custom
   code by
   https://www.doudmine.com/
{% endcomment %}
{%- assign featured_product = all_products[section.settings.featured_product_handle] -%}
<div class="featured lazy" style="background: url({% if section.settings.img_product %}{{ section.settings.img_product | img_url: 'master' }}{% else %}https://via.placeholder.com/1200x800{% endif %}) 50% 70%;">
   <div class="opacity-mask d-flex align-items-center">
      <div class="container margin_60">
         <div class="row justify-content-center justify-content-md-start">
            <div class="column-one">
               <h3>{{ featured_product.title }}</h3>
               <p>{{ featured_product.description | truncate: 100 }}</p>
               <div class="feat_text_block">
                  <div class="price_box">
                     <span class="new_price">{{ featured_product.variants.first.price | money }}</span>
                     {%- if featured_product.variants.first.compare_at_price > featured_product.variants.first.price -%}
                     <span class="old_price">{{ featured_product.variants.first.compare_at_price | money }}</span>
                     {%- endif -%}
                  </div>
                  <a class="btn" href="{{ featured_product.url }}" role="button">{{ section.settings.txt_button }}</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<!-- /featured -->

{% schema %}
{
  "name": "Featured Product Parallax",
  "settings": [
    {
      "type": "header",
      "content": "Parallax featured product"
    },
    {
      "type": "image_picker",
      "id": "img_product",
      "label": "Section image"
    },
    {
      "type": "text",
      "id": "txt_button",
      "label": "Button text",
      "default": "View more"
    },
    {
      "type": "product",
      "id": "featured_product_handle",
      "label": "Select product"
    }
  ],
  "presets": [
    {
      "name": "Featured Product Parallax",
      "category": "Products"
    }
  ]
}
{% endschema %}
```
That's it now, your Section is ready to showcase your featured product. I hope this article is helpful for you!

If you have any issues don't hesitate to DM me on [Instagram](https://www.instagram.com/doudmine)