---
title: Customize product badges and add NEW badge & HOT badge
author: Driss Oudmine
date: 2020-10-17
hero: ./images/hero.jpg
excerpt: The first impression on the website is vital. So an image badge costs a million words and advertisements.
---
There are many ways to attach visitor’s attention to a product. One of the most popular ways is by adding a small badge, usually on the top left or right corner of the product image. In this article I'm going to show you how to create a simple NEW and HOT icon badge for a product with the help of Metafields and also how to customize the Sale & Soldout badge in the Minimal theme, so let's get started!

1. From your Shopify admin, go to **Online Store** > **Themes**.
2. Find the Minimal theme, and then click **Actions** > **Duplicate**.
3. Find the theme that called *Copy of Minimal* then click **Actions** > **Edit Code**.
4. On the left bar, search for a folder called *Assets* then add the following code inside the "theme.scss.liquid" file
```css
.d-flex-important {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  position: absolute;
  top: 30px;
  width: 100%;
}
.label {
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 500;
  padding: 1px 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 2px 0;
  z-index: 9999;
}

.badge--sold-out {
  background-color: #1b1b1c;
}

.badge--sale {
  background-color: #f54337;
}

.badge--hot {
  background-color: #ff7143;
}

.badge--new {
  background-color: #00aced;
}
```
**5.** Again on the left bar, search for a folder called *Snippets* then search for the “product-grid-item.liquid” file.

**6.** Inside the “product-grid-item.liquid” file, replace the following code
```js
{% comment %}
   Custom
   Code 
   by
   https://www.doudmine.com/
{% endcomment %}
<span class="grid-link__image grid-link__image--loading{% if settings.show_sold_out_badge %} grid-link__image-sold-out{% endif %} grid-link__image--product" data-image-wrapper>
   {%- assign show_label_new = show_label_new | default: settings.product_collection_show_label_new -%}
   {%- assign show_label_hot = show_label_hot | default: settings.product_collection_show_label_hot -%}

   {%- if show_label_new or show_label_hot or on_sale or sold_out -%}
      {%- assign label_present = true -%}
   {%- else -%}
      {%- assign label_present = false -%}
   {%- endif -%}
   <div class="d-flex-important">
      {%- if label_present -%}
         {% if on_sale %}
         {% if settings.show_sale_badge %}  
            <span class="label badge--sale">
               <span class="badge__text{% if sale_text.size > 7 %} badge__text--small{% endif %}">{{ 'products.product.sale' | t }}</span>
            </span>
         {% endif %}
         {% if settings.show_percentage_badge %}  
            <span class="label badge--sale">
               <span class="badge__text{% if sale_text.size > 7 %} badge__text--small{% endif %}">-{{ product.selected_or_first_available_variant.compare_at_price | minus: product.selected_or_first_available_variant.price | times: 100.0 | divided_by: product.selected_or_first_available_variant.compare_at_price | money_without_currency | replace: ',', '.' | times: 100 | remove: '.0'}}%</span>
            </span>
         {% endif %}
         {% endif %}

         {% if sold_out and settings.show_sold_out_badge %}
         <span class="label badge--sold-out">
            <span class="badge__text{% if sold_out_text.size > 9 %} badge__text--small{% endif %}">{{ 'products.product.sold_out' | t }}</span>
         </span>
         {% endif %}
   
         {%- if show_label_hot -%}
         {%- if product.metafields.labels.hot == 'true' -%}
            <span class="label badge--hot">
               <span class="badge__text{% if sold_out_text.size > 9 %} badge__text--small{% endif %}">HOT</span>
            </span>
         {%- endif -%}
         {%- endif -%}

         {%- if show_label_new -%}
         {%- if product.metafields.labels.new == 'true' -%}
            <span class="label badge--new">
               <span class="badge__text{% if sold_out_text.size > 9 %} badge__text--small{% endif %}">NEW</span>
            </span>
         {%- endif -%} 
         {%- endif -%}
      
      {%- endif -%}
   </div>
   
   <span class="grid-link__image-centered">
      {% if featured.title != '' %}
         {% unless featured.featured_image == blank %}
         {% capture img_id %}ProductImage-{{ featured.featured_image.id }}{% endcapture %}
         {% capture wrapper_id %}ProductImageWrapper-{{ featured.featured_image.id }}{% endcapture %}
         {%- assign img_url = featured.featured_image | img_url: '1x1' | replace: '_1x1.', '_{width}x.' -%}

         {% include 'image-style' with image: featured.featured_image, width: product_width, height: 480, wrapper_id: wrapper_id, img_id: img_id %}
         <div id="{{ wrapper_id }}" class="product__img-wrapper supports-js">
            <div style="padding-top:{{ 1 | divided_by: featured.featured_image.aspect_ratio | times: 100}}%;">
               <img id="{{ img_id }}"
                  alt="{{ featured.featured_image.alt | escape }}"
                  class="product__img lazyload"
                  data-src="{{ img_url }}"
                  data-widths="[150, 220, 360, 470, 600, 750, 940, 1080, 1296, 1512, 1728, 2048]"
                  data-aspectratio="{{ featured.featured_image.aspect_ratio }}"
                  data-sizes="auto"
                  data-image>
            </div>
         </div>
         {% else %}
         <img src="{{ featured.featured_image.src | img_url: 'large' }}" alt="{{ featured.featured_image.alt | escape }}" class="product__img" data-image>
         {% endunless %}
         <noscript>
         <img src="{{ featured.featured_image.src | img_url: 'large' }}" alt="{{ featured.featured_image.alt | escape }}" class="product__img">
         </noscript>
      {% else %}
         {% capture current %}{% cycle 1, 2, 3, 4, 5, 6 %}{% endcapture %}
         {{ 'product-' | append: current | placeholder_svg_tag: 'placeholder-svg' }}
      {% endif %}
   </span>
   </span>
```
**7.** with the one is highlighted below. That highlighted code is between line 26-68 in your code editor
```js {3-45}
<div class="{% if sold_out %} sold-out{% endif %}{% if on_sale %} on-sale{% endif %}">
  <a href="{{ featured.url | within: collection }}" class="grid-link{% if section.settings.center_grid_link %} text-center{% endif %}">
    <span class="grid-link__image grid-link__image--loading{% if section.settings.show_sold_out_circle %} grid-link__image-sold-out{% endif %} grid-link__image--product" data-image-wrapper>
      {% if on_sale and section.settings.show_sale_circle %}
        <span class="badge badge--sale">
          <span class="badge__text{% if sale_text.size > 7 %} badge__text--small{% endif %}">{{ 'products.product.sale' | t }}</span>
        </span>
      {% endif %}
      {% if sold_out and section.settings.show_sold_out_circle %}
        <span class="badge badge--sold-out">
          <span class="badge__text{% if sold_out_text.size > 9 %} badge__text--small{% endif %}">{{ 'products.product.sold_out' | t }}</span>
        </span>
      {% endif %}
      <span class="grid-link__image-centered">
        {% if featured.title != '' %}
          {% unless featured.featured_image == blank %}
            {% capture img_id %}ProductImage-{{ featured.featured_image.id }}{% endcapture %}
            {% capture wrapper_id %}ProductImageWrapper-{{ featured.featured_image.id }}{% endcapture %}
            {%- assign img_url = featured.featured_image | img_url: '1x1' | replace: '_1x1.', '_{width}x.' -%}

            {% include 'image-style' with image: featured.featured_image, width: product_width, height: 480, wrapper_id: wrapper_id, img_id: img_id %}
            <div id="{{ wrapper_id }}" class="product__img-wrapper supports-js">
              <div style="padding-top:{{ 1 | divided_by: featured.featured_image.aspect_ratio | times: 100}}%;">
                <img id="{{ img_id }}"
                     alt="{{ featured.featured_image.alt | escape }}"
                     class="product__img lazyload"
                     data-src="{{ img_url }}"
                     data-widths="[150, 220, 360, 470, 600, 750, 940, 1080, 1296, 1512, 1728, 2048]"
                     data-aspectratio="{{ featured.featured_image.aspect_ratio }}"
                     data-sizes="auto"
                     data-image>
              </div>
            </div>
          {% else %}
            <img src="{{ featured.featured_image.src | img_url: 'large' }}" alt="{{ featured.featured_image.alt | escape }}" class="product__img" data-image>
          {% endunless %}
          <noscript>
            <img src="{{ featured.featured_image.src | img_url: 'large' }}" alt="{{ featured.featured_image.alt | escape }}" class="product__img">
          </noscript>
        {% else %}
          {% capture current %}{% cycle 1, 2, 3, 4, 5, 6 %}{% endcapture %}
          {{ 'product-' | append: current | placeholder_svg_tag: 'placeholder-svg' }}
        {% endif %}
      </span>
    </span>
    <p class="grid-link__title">{{ product_title }}</p>
    {% if section.settings.vendor_enable %}
      <p class="grid-link__title grid-link__vendor">{{ featured.vendor }}</p>
    {% endif %}
    {% if featured.title != '' %}
      <p class="grid-link__meta">
        {%- assign price = featured.price | money -%}

        {% if on_sale %}
        <span class="visually-hidden">{{ 'products.product.regular_price' | t }}</span>
        <s class="grid-link__sale_price">{{ featured.compare_at_price | money }}</s>
        {% endif %}
        {% if featured.price_varies %}
          {{ 'products.general.from_html' | t: price: price }}
        {% else %}
          {% if on_sale %}
            <span class="visually-hidden">{{ 'products.product.sale_price' | t }}</span>
          {% else %}
            <span class="visually-hidden">{{ 'products.product.regular_price' | t }}</span>
          {% endif %}
          {{ price }}

          {%- assign variant = featured.selected_or_first_available_variant -%}
          {%- if variant.available and variant.unit_price_measurement -%}
            {% include 'product-unit-price', variant: variant, wrapper_class: 'grid-link__unit-price' %}
          {%- endif -%}
        {% endif %}
      </p>
    {% endif %}
  </a>
</div>
```
**8.** On the left bar, search for a folder called *Confi* then click on the “settings_schema.json” file.

**9.** Copy and paste the following code inside the “settings_schema.json” file. Don't forget "Comma" at the end when you paste the code!
```js
{
  "name": "Products Badges",
  "settings": [
    {
      "type": "header",
      "content": "Product Badges"
    },
    {
      "type": "checkbox",
      "id": "show_sale_badge",
      "label": "Show 'Sale' badge"
    },
    {
      "type": "checkbox",
      "id": "show_percentage_badge",
      "label": "Show Percentage badge"
    },
    {
      "type": "checkbox",
      "id": "show_sold_out_badge",
      "label": "Show 'Sold out' badge"
    },
    {
      "type": "checkbox",
      "id": "product_collection_show_label_hot",
      "label": "Show 'HOT' badge"
    },
    {
      "type": "checkbox",
      "id": "product_collection_show_label_new",
      "label": "Show 'NEW' badge"
    }
  ]
}
```
**10.** Now, we are going to need custom fields in order to make "HOT" & "NEW" badges! so in this case we will need to install an app called [Metafields
Guru](https://apps.shopify.com/metafields-editor-2?surface_detail=metafields&surface_inter_position=1&surface_intra_position=4&surface_type=search)

**11.** After you install the app, select Products & Variants then choose one of your products that you want to add a badge to it.

**12.** After you choose the product, click on *Create Metafield* button.

**13.** Now you can see a Form appeared after you click on *Create Metafield*, inside the input with name of "Key" start writing **new** if you want NEW badge and **hot** if you want HOT badge and inside the input with the name of "Namespace" start writing **labels**. Next, write **true** inside the last input which is the tallest one!

**14.** After you finish creating the metafields of the product, click on **Save** button. 

Now you're good to go! I hope this artile is helpful for you, see you in another tutorial :)

Hey, if you have any issues implementing the Badges into your Shopify Store. DM me on [Instagram](https://www.instagram.com/doudmine) so I can help