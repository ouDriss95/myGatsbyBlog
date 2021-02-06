---
title: Advanced Slider for your Shopify store
author: Driss Oudmine
date: 2021-02-05
hero: ./images/hero.jpg
excerpt: In this tutorial you will learn how to implement an advanced slider that has a lot of features to your shopify store
---
Product Sliders allows showing all suggested products friendly that match to customer’s expectation via a responsive slider. This product slider you're going to see is full of  advanced features such as sale and sold out badges also change product picture on hover effect and more! so if you like this tutorial please share it with your friends. so let's get started

1. From your Shopify admin, go to **Online Store** > **Themes**.
2. Find the Minimal theme, and then click **Actions** > **Duplicate**.
3. Find the theme that called *Copy of Minimal* then click **Actions** > **Edit Code**.
4. On the left bar, search for a folder called *Layout* then Copy and paste the following code inside the file 'theme.liquid' on the line 33.
```js
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@2.4.21/dist/css/themes/splide-skyblue.min.css">
```
**5.** On the same file 'theme.liquid' Copy and paste the following code inside it on the line 75 then Save.
```js
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@2.4.21/dist/js/splide.min.js"></script>
```
**6.** Next, On the left bar, search for a folder called *Sections* then create a new file called 'advanced-slider'
**7.** After you created the file, delete what's inside it then paste the following code inside it
```js

<style>
   .header-section {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
   }

   .header-section a {
      text-decoration: underline !important;
      margin-left: auto;
   }

   @media screen and (max-width: 640px) {
      .header-section a {
         margin-top: -16px;
      }
   }

   .header-section h5 {
      color: #111;
      font-size: 0.9375em;
      font-weight: 600;
      line-height: 1;
      text-transform: uppercase;
      letter-spacing: 0.4em;
      margin-bottom: 2em;
   }

   .product-carousel .product-carousel__wrapper {
      margin: 0 -0.9375em !important;
      margin-bottom: 3.125em !important;
   }

   .product-carousel__item {
      padding: 0 0.9375em;
      outline: 0;
   }

   .product-box {
      position: relative;
   }

   .badge--sale {
      top: 12px;
      right: 12px;
   }

   .thumbnail {
      position: relative;
      text-align: center;
      overflow: hidden;
      margin-bottom: 1.5625em;
      -moz-transition: all 0.7s ease;
      -o-transition: all 0.7s ease;
      -webkit-transition: all 0.7s ease;
      -ms-transition: all 0.7s ease;
      transition: all 0.7s ease;
   }

   .thumbnail__action {
      position: absolute;
      top: 26px;
      left: 15px;
      -webkit-transition: 0.2s ease-in-out;
      -o-transition: 0.2s ease-in-out;
      transition: 0.2s ease-in-out;
      opacity: 0;
      z-index: 9;
   }

   .thumbnail:hover .thumbnail__action {
      opacity: 1;
   }

   @media screen and (max-width: 640px) {
      .thumbnail__action {
         opacity: 1;
      }
   }

   .thumbnail__action--cart {
      color: #444444;
      display: inline-block;
      text-align: center;
      width: 40px;
      height: 32px;
      line-height: 32px;
      margin: 0 2px;
      background-color: #fff;
      border: 1px solid rgba(151, 151, 151, 0.3);
   }

   .thumbnail__img {
      display: block;
      height: 100%;
      width: 100%;
   }

   .thumbnail__img--overlay::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      opacity: .7;
      z-index: 7;
   }
   
   .thumbnail__img img:nth-child(1) {
      visibility: visible;
     
   }

   .thumbnail__img img:nth-child(2) {
      position: absolute;
      top: 0;
      left: 0;
      visibility: hidden;
   }

   .thumbnail__img:hover img {
      -webkit-transition: opacity 0.5s ease, -webkit-transform 1.5s cubic-bezier(0, 0, 0.44, 1.18);
      transition: opacity 0.5s ease, -webkit-transform 1.5s cubic-bezier(0, 0, 0.44, 1.18);
      transition: opacity 0.5s ease, transform 1.5s cubic-bezier(0, 0, 0.44, 1.18);
      transition: opacity 0.5s ease, transform 1.5s cubic-bezier(0, 0, 0.44, 1.18), -webkit-transform 2s cubic-bezier(0, 0, 0.44, 1.18);
   }

   .thumbnail__img:hover img:nth-child(2) {
      visibility: visible;
      
   }

   .product-details__header {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin-bottom: 5px;
   }

   .product-vendor {
      color: #888;
      font-size: 0.8125em;
      font-weight: normal;
      line-height: 1;
      text-transform: capitalize;
   }

   .product-details__name {
      color: #111;
      font-size: 1em;
      font-weight: 500;
      text-decoration: none;
      line-height: 1.625em;
      -webkit-transition: 0.2s ease-in-out;
      -o-transition: 0.2s ease-in-out;
      transition: 0.2s ease-in-out;
      cursor: pointer;
      display: block;
      margin-bottom: 3px;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
   }

   .product-details__footer {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
   }

   .product-details__footer .price--main {
      margin-right: 0.76923em;
   }

   .price--main {
      color: #111;
      font-size: 0.8125em;
      font-weight: 600;
      line-height: 1;
   }

   .price--discount {
      color: #888;
      font-size: 0.8125em;
      font-weight: normal;
      line-height: 1;
      text-decoration: line-through;
   }

   .splide__arrow--prev,
   .splide__arrow--next {
      font-size: 12px !important;
   }

   .splide__arrow--prev {
      left: -2.6em !important;
   }

   .splide__arrow--next {
      right: -2.6em !important;
   }

   .splide__pagination,
   .splide__arrow {
      z-index: initial !important;
   }

   .splide__arrow svg {
      fill: {{ settings.color_primary }};
   }

   .splide__arrow:hover svg {
      fill: {{ settings.color_primary | color_modify: 'alpha', 0.6 }};
   }

   .splide__pagination__page.is-active {
      background: {{ settings.color_primary }};
   }

   .splide__pagination__page:hover {
      background: {{ settings.color_primary | color_modify: 'alpha', 0.6 }};
   }

   /**************************\
    Demo Animation Style
   \**************************/
   @-webkit-keyframes mmfadeIn {
      from {
         opacity: 0;
      }

      to {
         opacity: 1;
      }
   }

   @keyframes mmfadeIn {
      from {
         opacity: 0;
      }

      to {
         opacity: 1;
      }
   }

   @-webkit-keyframes mmfadeOut {
      from {
         opacity: 1;
      }

      to {
         opacity: 0;
      }
   }

   @keyframes mmfadeOut {
      from {
         opacity: 1;
      }

      to {
         opacity: 0;
      }
   }

   @-webkit-keyframes mmslideIn {
      from {
         -webkit-transform: translateY(15%);
         transform: translateY(15%);
      }

      to {
         -webkit-transform: translateY(0);
         transform: translateY(0);
      }
   }

   @keyframes mmslideIn {
      from {
         -webkit-transform: translateY(15%);
         transform: translateY(15%);
      }

      to {
         -webkit-transform: translateY(0);
         transform: translateY(0);
      }
   }

   @-webkit-keyframes mmslideOut {
      from {
         -webkit-transform: translateY(0);
         transform: translateY(0);
      }

      to {
         -webkit-transform: translateY(-10%);
         transform: translateY(-10%);
      }
   }

   @keyframes mmslideOut {
      from {
         -webkit-transform: translateY(0);
         transform: translateY(0);
      }

      to {
         -webkit-transform: translateY(-10%);
         transform: translateY(-10%);
      }
   }

   /* RESETS */
   .opacity-img {
      opacity: .6;
   }

   .thumbnail__action--cart:hover .header-bar__cart-icon {
      color: {{ settings.color_primary }};
   }

   .modal__overlay {
      z-index: 10;
   }

   .badge--sold-out {
      top: 35% !important;
   }
</style>

<div class="product-carousel index-section">
   <div class="container splide">
      
      <div class="header-section">
         {%- if section.settings.section_title != '' -%}
         <h2 class="section-header__title">{{ section.settings.section_title }}</h2>
         {%- endif -%}
         <a href="/collections/all">View All</a>
      </div>
      

      <div class="splide__track">
         <div class="product-carousel__wrapper splide__list">
            {%- assign featured_product = collections[section.settings.featured_product_handle] -%}
            {%- if featured_product != empty -%}

            {%- for product in featured_product.products -%}

            {%- assign on_sale = false -%}
            {%- if product.compare_at_price > product.price -%}
            {%- assign on_sale = true -%}
            {%- endif -%}

            {%- assign sold_out = true -%}
            {%- if product.available -%}
            {%- assign sold_out = false -%}
            {%- endif -%}
            
            <div class="product-carousel__item splide__slide">
               <div class="product-box">
                  {% if on_sale and section.settings.show_sale_sticker %}
                  <div class="badge badge--sale">
                     <h5 class="badge__text{% if sale_text.size > 7 %} badge__text--small{% endif %}">
                        {{ 'products.product.sale' | t }}</h5>
                  </div>
                  {% endif %}

                  {% if sold_out and section.settings.show_sold_out_sticker %}
                  <div class="badge badge--sold-out">
                     <h5 class="badge__text{% if sold_out_text.size > 9 %} badge__text--small{% endif %}">
                        {{ 'products.product.sold_out' | t }}</h5>
                  </div>
                  {% endif %}

                  <div class="thumbnail">
                     {%- if product.available -%}
                     <div class="thumbnail__action">
                        
                        <form action="/cart/add" method="post" enctype="multipart/form-data">
                           <select name="id" style="display:none;">
                              {% for variant in product.variants %}
                              <option value="{{ variant.id }}">{{ variant.title | escape }} - {{ variant.price | money }}</option>
                              {% endfor %}
                           </select>
                           <button type="submit" class="thumbnail__action--cart" title="Add to Cart">
                              <span class="icon icon-cart header-bar__cart-icon" aria-hidden="true"></span>
                           </button>
                         </form>
                     </div>
                     {%- endif -%}

                     {%- if product.images.size > 1 -%}

                     <a class="thumbnail__img" href="{{ product.url | within: collection }}">
                        {%- if sold_out -%}<div class="thumbnail__img--overlay"></div>{%- endif -%}
                        <img style="max-width: 100% !important;"
                        src="{{ product.featured_image.src | img_url: "large" }}" data-src="{{ product.featured_image.src | img_url: "large" }}"
                        alt="{{ product.featured_image.alt | escape }}" />

                        {%- for image in product.images limit: 1 offset: 1 -%}
                        <img style="max-width: 100% !important;"
                        src="{{ image.src | img_url: 'grande' }}" data-src="{{ image.src | img_url: 'grande' }}"
                        alt="{{ product.featured_image.alt }}" />
                        {%- endfor -%}

                     </a>

                     {%- else -%}

                     <a class="thumbnail__img" href="{{ product.url | within: collection }}">
                        {%- if sold_out -%}<div class="thumbnail__img--overlay"></div>{%- endif -%}
                        <img style="max-width: 100% !important;"
                        src="{{ product.featured_image.src | img_url: "large" }}" data-src="{{ product.featured_image.src | img_url: "large" }}"
                        alt="{{ product.featured_image.alt | escape }}" />
                     </a>
                     
                     {%- endif -%}
                  </div>

                  <div class="product-details">
                     <div class="product-details__header">
                        <div class="product-vendor">{{ product.vendor }}</div>
                        <div class="product-rate"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                              class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                        </div>
                     </div>
                     <a class="product-details__name"
                        href="{{ product.url | within: collection }}">{{ product.title | truncate: 30 }}</a>
                     <div class="product-details__footer">
                        <h5 class="price--main">{{ product.variants.first.price | money }}</h5>

                        {%- if product.variants.first.compare_at_price > product.variants.first.price -%}
                        <h5 class="price--discount">{{ product.variants.first.compare_at_price | money }}</h5>
                        {%- endif -%}
                     </div>
                  </div>
               </div>
            </div>
            {%- endfor -%}
            {% else %}
            The collection is empty!
            {%- endif -%}

         </div>
      </div>
   </div>
</div>

<script>
   document.addEventListener('DOMContentLoaded', function () {
      var elms = document.getElementsByClassName( 'splide' );
      for ( var i = 0, len = elms.length; i < len; i++ ) {
        new Splide( elms[ i ], {
        perPage: 2,
         perMove: 3,
         rewind: true,
         fixedWidth: 330,
         arrows: {{ section.settings.show_arrows }},
         pagination: {{ section.settings.show_pagination }},
         breakpoints: {
            '640': {
               perPage: 2,
	            perMove: 1,
               fixedWidth: 200,
               arrows: false,
               flickPower: 100,
               pagination: false,
               rewind: true,
               
            },
            '480': {
               perPage: 2,
               perMove: 1,
               fixedWidth: 190,
               arrows: false,
               flickPower: 100,
               pagination: true,
               rewind: true,
               
            }
         }
        
        } ).mount();
      }
   });
</script>

{% schema %}
   {
      "name": "Product Carousel",
      "settings": [
         {
            "type": "header",
            "content": "Section Heading"
         },
         {
            "type": "text",
            "id": "section_title",
            "label": "Section Title",
            "default": "Section Title Here"
         },
         {
            "type": "header",
            "content": "Products"
         },
         {
            "type": "collection",
            "id": "featured_product_handle",
            "label": "Select Collection"
         },
         {
            "type": "checkbox",
            "id": "show_sale_sticker",
            "label": "Show Sale Sticker",
            "default": true
         },
         {
            "type": "checkbox",
            "id": "show_sold_out_sticker",
            "label": "Show Sold out Sticker",
            "default": true
         },
         {
            "type": "checkbox",
            "id": "show_arrows",
            "label": "Show Slider Arrows",
            "default": true
         },
         {
            "type": "checkbox",
            "id": "show_pagination",
            "label": "Show Slider Pagination",
            "default": true
         }
      ],
      "presets": [
         {
            "name": "Products slider",
            "category": "Slider Sections"
         }
      ]
   }
{% endschema %}
```
**7.** Congratulations, Now you have an advanced products Slider that cost money for free on your store!