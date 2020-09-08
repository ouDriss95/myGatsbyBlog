---
title: How to add Accordion to your Minimal theme
author: Driss Oudmine
date: 2020-09-03
hero: ./images/hero.jpg
excerpt: Improve your Store UI/UX and increase your sales by organizing Products Descriptions.
---
An "accordion" is a great way to display Products descriptions to your ecommerce store, since it allows the user to
quickly and easily browse your Product informations without much scrolling. And luckily, it's simple and easy to add one
to your store! Let me show you how

1. From your Shopify admin, go to **Online Store** > **Themes**.
2. Find the Minimal theme, and then click **Actions** > **Duplicate**.
3. Find the theme that called *Copy of Minimal* then click **Actions** > **Edit Code**.
4. On the left bar, search for a folder called *Snippets* click *Add a new Snippet*.
5. Create a snippet with a name of "accordion-description".
6. Copy the following code and paste it in the file that you just created which is "accordion-description"
```
<style>
   .accordian {
      max-width: 600px;
      display: block;
   }
   .accordian .card {
      float: left;
      width: 100%;
   }
   .accordian .card .card-header h3 {
      background-color: #eee;
      color: #444;
      cursor: pointer;
      padding: 18px;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 15px;
      transition: 0.4s;
      margin: 0;
   }
   .accordian .card .card-header:hover h3 {
      background-color: #ccc !important;
   }
   .active,
   .card-header__title {
      background-color: #ccc !important;
   }
   .noActive {
      background-color: #eee !important;
   }
   .accordian .card .card-header {
      position: relative;
   }
   .accordian .card .card-header span {
      position: absolute;
      right: 20px;
      top: 16px;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      text-align: center;
      line-height: 25px;
      font-size: 13px;
   }
   .accordian .card .card-header span.fa-plus::after {
      content: '\002B';
      color: #777;
      font-weight: bold;
      float: right;
      margin-left: 5px;
   }
   .accordian .card .card-header span.fa-minus::after {
      content: "\2212";
      color: #777;
      font-weight: bold;
      float: right;
      margin-left: 5px;
   }
   .accordian .card .card-body {
      padding: 20px;
   }
   .accordian .card .card-body {
      display: none;
   }
   /*open one card by default*/
   .accordian .card:nth-child(1) .card-body {
      display: block;
   }
   .accordian .card .card-body p {
      font-size: 15px;
      line-height: 24px;
      color: #444444;
      margin: 0px;
   }
</style>
<div class="accordian">
   {%- if product.metafields.tab1.title and product.metafields.tab1.content -%}
   <div class="card">
      <div class="card-header">
         <h3 class="card-header__title">{{ product.metafields.tab1.title }}</h3>
         <span class="fa-minus"></span>
      </div>
      <div class="card-body">
         <p>
            {{ product.metafields.tab1.content }}
         </p>
      </div>
   </div>
   {%- else -%}
   <div class="product-description rte" itemprop="description">
      {{ product.description }}
   </div>
   {%- endif -%}
   {%- if product.metafields.tab2.title and product.metafields.tab2.content -%}
   <div class="card">
      <div class="card-header">
         <h3 class="card-header">{{ product.metafields.tab2.title }}</h3>
         <span class="fa-plus"></span>
      </div>
      <div class="card-body">
         <p>
            {{ product.metafields.tab2.content }}
         </p>
      </div>
   </div>
   {%- endif -%}
   {%- if product.metafields.tab3.title and product.metafields.tab3.content -%}
   <div class="card">
      <div class="card-header">
         <h3 class="card-header">{{ product.metafields.tab3.title }}</h3>
         <span class="fa-plus"></span>
      </div>
      <div class="card-body">
         <p>
            {{ product.metafields.tab3.content }}
         </p>
      </div>
   </div>
   {%- endif -%}
   {%- if product.metafields.tab4.title and product.metafields.tab4.content -%}
   <div class="card">
      <div class="card-header">
         <h3 class="card-header">{{ product.metafields.tab4.title }}</h3>
         <span class="fa-plus"></span>
      </div>
      <div class="card-body">
         <p>
            {{ product.metafields.tab4.content }}
         </p>
      </div>
   </div>
   {%- endif -%}
   {%- if product.metafields.tab5.title and product.metafields.tab5.content -%}
   <div class="card">
      <div class="card-header">
         <h3 class="card-header">{{ product.metafields.tab5.title }}</h3>
         <span class="fa-plus"></span>
      </div>
      <div class="card-body">
         <p>
            {{ product.metafields.tab5.content }}
         </p>
      </div>
   </div>
   {%- endif -%}
</div>
<!-- jqurey code -->
<script>
   $(document).ready(function () {
      $(".card-header").click(function () {
         $(".card .card-header h3").removeClass("active")
         $(".card .card-body").removeClass("active").slideUp();
         $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
         $(".card .card-header h3").removeClass("active").addClass("noActive");
         $(this).next(".card-body").slideDown();
         $(this).children("span").removeClass("fa-plus").addClass("fa-minus");
         $(this).children("h3").removeClass("noActive").addClass("active");
      })
   })
</script>
```
**7.** Next, On the left bar. Find a folder called *Sections* then search for a file called "product-template.liquid" it's the
third file starting from the bottom!

**8.** Replace the following code
```
<div class="product-description rte" itemprop="description">
   {% include 'accordion-description' %}
</div>
```
with the one that is highlighted below. That highlighted code is between line 221-246 in your Code Editor
```js {13-40}
<div class="product-single__quantity{% unless section.settings.product_quantity_enable %} is-hidden{% endunless %}">
   <label for="Quantity">{{ 'products.product.quantity' | t }}</label>
   <input type="number" id="Quantity" name="quantity" value="1" min="1" class="quantity-selector">
</div>
<button type="submit" name="add" id="AddToCart"
   class="btn {{ btn_class }}{% if section.settings.enable_payment_button %} btn--secondary{% endif %}">
   <span id="AddToCartText">{{ 'products.product.add_to_cart' | t }}</span>
</button>
{% if section.settings.enable_payment_button %}
{{ form | payment_button }}
{% endif %}
{% endform %}
{% unless section.settings.show_extra_tab == false or pages[section.settings.extra_tab_content] == empty %}
<div class="tabs">
   <ul class="tab-switch__nav">
      <li>
         <a href="#description" data-link="description"
            class="tab-switch__trigger h3">{{ 'products.product.description' | t }}</a>
      </li>
      <li>
         <a href="#extra" data-link="extra"
            class="tab-switch__trigger h3">{{ pages[section.settings.extra_tab_content].title }}</a>
      </li>
   </ul>
   <div id="description" class="tab-switch__content" data-content="description">
      <div class="product-description rte" itemprop="description">
         {{ product.description }}
      </div>
   </div>
   <div id="extra" class="tab-switch__content" data-content="extra">
      <div class="rte">
         {{ pages[section.settings.extra_tab_content].content }}
      </div>
   </div>
</div>
{% else %}
<div class="product-description rte" itemprop="description">
   {{ product.description }}
</div>
{% endunless %}
{% if section.settings.social_sharing %}
<hr class="hr--clear hr--small">
<h2 class="h4">{{ 'products.general.share_title' | t }}</h2>
{% include 'social-sharing' %}
{% endif %}
</div>
```
**9.** Now, we are going to need custom fields in order to make each product with its own informations! so in this case we
will need to install an app called [Metafields
Guru](https://apps.shopify.com/metafields-editor-2?surface_detail=metafields&surface_inter_position=1&surface_intra_position=4&surface_type=search)

**10.** After you install the app, select Products and Variants then choose one of your products that you want to have Accordion.

**11.** After you choose the product, click on *Create Metafield* button.

**12.** Now you can see a Form appeared after you click on *Create Metafield*, inside the input with name of "Key" start writing **title** and inside the input with the name of "Namespace" start writing **tab1**. Next give a title to your first tab inside the last input which is the tallest one!

**13.** After you finish your first Metafield, create another one by clicking on *Create Metafield* button. Again inside the input with the name of "Key" start writing **content** and inside the input with the name of "Namespace" start writing **tab1**. Finally inside the tallest input start writing the Content of your first tab.

**14.** After you finish creating all tabs you can click on **Save** button. 

**Note:** You can only create Five tabs at maximum! if you need more than five tabs don't hisitate to ask me for help ^^ 