---
title: Custom Header With Hide on Scroll Down & Show on Scroll Up in Shopify - No app
author: Driss Oudmine
date: 2021-03-07
hero: ./images/hero.jpg
excerpt: In this tutorial you will learn how to re-design your header to a custom one that looks professional! 
---
Have you ever wondered if it's possible to customize the header of your Shopify store to something more robust and professional, the answer is big yes! That's what we are going to see in this article tutorial.
Also I encourage you to watch the whole video on YouTube, so you can use this custom header easily and If you are not using Minimal theme and you want this header on your Shopify store then DM me on [Instagram](https://www.instagram.com/doudmine) so I can create it for you. So, let's get started

0. First thing, first! We need to create a new three navigation, so we can use them in our new custom header. One for mobile navigation and second for the left side of logo and third one is for the right side of logo. Watch the video tutorial so you can understand more
1. From your Shopify admin, go to **Online Store** > **Themes**.
2. Find the Minimal theme, and then click **Actions** > **Duplicate**.
3. Find the theme that called *Copy of Minimal* then click **Actions** > **Edit Code**.
4. On the left bar, search for a folder called *Layout* then Copy and paste the following code inside the file 'theme.liquid' on the line 86.
```js
{% include 'announcement' %}
```
**6.** Again, on the left bar search for a folder called *Sinppets* then create a new file called "announcement.liquid" then copy & paste the following code inside it
```js
{% if settings.show_announcement %}
   {% if settings.home_page_only == false or request.page_type == 'index' %}
      <style>
      .announcement-bar {
         background-color: {{ settings.color_bg }};
         display: block;
      }
      .announcement-bar--link:hover {
         {% assign brightness = settings.color_bg | color_brightness %}

         {% if brightness <= 192 %}
            {% assign lightenAmount = 255 | minus: brightness | divided_by: 255 | times: 16 %}
            background-color: {{ settings.color_bg | color_lighten: lightenAmount }};
         {% else %}
            {% assign darkenAmount = 255 | divided_by: brightness | times: 8 %}
            background-color: {{ settings.color_bg | color_darken: darkenAmount }};
         {% endif %}
      }
      .announcement-bar__message {
         color: {{ settings.color_text }};
      }
      </style>

      {% if settings.announcement_link == blank %}
      <div class="announcement-bar">
      {% else %}
      <a href="{{ settings.announcement_link }}" class="announcement-bar announcement-bar--link">
      {% endif %}
      <p class="announcement-bar__message">{{ settings.announcement_text | escape }}</p>
      {% if settings.announcement_link == blank %}
      </div>
      {% else %}
      </a>
      {% endif %}
   {% endif %}
{% endif %}
```

**7.** Next, search for a folder called *config* on the left bar, then click on a file called 'settings_schema.json' 

**8.** Inside the file 'settings_schema.json' add the following code at the bottom (Before the closing Bracket)
```js
,{
  "name": "Advanced settings",
  "settings" : [
    {
      "type": "header",
      "content": "Announcement Bar"  
    },
    {
      "type": "checkbox",
      "id": "show_announcement",
      "label": "Show announcement",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "home_page_only",
      "label": "Home page only",
      "default": false
    },
    {
      "type": "text",
      "id": "announcement_text",
      "label": "Text",
      "default": "Announce something here"
    },
    {
      "type": "url",
      "id": "announcement_link",
      "label": "Link"
    },
    {
      "type": "color",
      "id": "color_text",
      "label": "Text color",
      "default": "#fff"
    },
    {
      "type": "color",
      "id": "color_bg",
      "label": "Bar color",
      "default": "#000"
    }
  ]
}
```

**9.** Finally, copy & paste the following code inside the file called "header" in the Sections folder after you delete what's in it
```js
<style>
  .myheader-section {
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 36;
    transition: top 0.2s ease-in-out;
  }
  .sticky-header {
    background-color: #fff;
  }
  .nav-up {
    top: -180px;
  }

  .container {
    max-width: 1340px;
    margin: 0 auto;
    padding: 0 15px;
  }
  @media only screen and (min-width: 480px) {
    .container {
      padding: 0 30px;
    }
  }
  .navigation {
    padding: 16px 0;
  }
  .nav-center {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
  }
  .header-item {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  .nav-center .header-item--navigation,
  .nav-center .header-item--icons {
    -ms-flex: 1 1 130px;
    flex: 1 1 130px;
  }
  .header-item--icons {
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
  }
  .header-item--logo-split {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
  }
  .header-item--left .site-nav {
    margin-left: -9px;
  }
  .header-item--icons .site-nav {
    margin-right: -12px;
  }
  .header-item--logo-split .header-item:not(.header-item--logo) {
    text-align: center;
    -ms-flex: 1 1 20%;
    flex: 1 1 20%;
  }
  .site-header__logo-link {
    max-width: {{ section.settings.logo_width }} px;
  }
  .header-item--split-left {
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .header-bar__cart-icon {
    font-size: 24px;
  }
  .header-bar__search-icon {
    font-size: 23px;
  }
  span.icon.icon-hamburger {
    font-size: 27px;
  }
  @media only screen and (min-width: 769px) {
    .nav-center .header-item--logo {
      margin: 0 30px;
      flex: 0 0 160px;
    }
  }
  .site-nav {
    margin: 0;
  }
  .site-nav .site-nav__icons {
    display: flex;
    white-space: nowrap;
  }
  .site-nav__link {
    border: none;
    display: flex;
    vertical-align: middle;
    text-decoration: none;
    padding: 7.5px 15px !important;
    white-space: nowrap;
    color: #000;
  }
  .login-icon {
    stroke: #000;
  }
  @media only screen and (max-width: 768px) {
    .site-nav__link {
      padding: 7.5px 8px !important;
    }
  }
  .site-nav__link--icon {
    padding-left: 12px;
    padding-right: 12px;
  }
  .icon.icon-search,
  .icon.user-tie {
    align-self: center;
  }
  span.icon.user-tie {
    margin-top: 6px;
  }
  @media only screen and (min-width: 1024px) {
    .medium-up--hide {
      display: none !important;
    }
  }
  @media only screen and (max-width: 1023px) {
    .medium-down--hide {
      display: none !important;
    }
  }
  .site-nav--has-dropdown.is-focused,
  .site-nav--has-dropdown:hover {
    z-index: 7;
  }
  .site-nav--has-dropdown {
    z-index: 6;
  }
  .site-nav__item {
    position: relative;
    display: inline-block;
    margin: 0;
  }
  .site-nav--has-dropdown:hover .site-nav__dropdown,
  .is-focused>.site-nav__dropdown {
    display: block;
    visibility: visible;
    transform: translate3d(0px, 0px, 0px);
    transition: all 300ms cubic-bezier(0.2, 0.06, 0.05, 0.95);
  }
  .site-nav__dropdown {
    position: absolute;
    left: 0;
    margin: 0;
    z-index: 5;
    display: block;
    visibility: hidden;
    background-color: #fff;
    min-width: 100%;
    padding: 10px 0 5px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.09);
    transform: translate3d(0px, -12px, 0px);
  }
  .text-left {
    text-align: left !important;
  }
  .site-nav__dropdown>li {
    position: relative;
  }
  .site-nav__dropdown li {
    margin: 0;
  }
  .site-nav__item li {
    display: block;
  }
  .site-nav__link,
  .site-nav__dropdown-link:not(.site-nav__dropdown-link--top-level) {
    font-size: 14px;
  }
  .site-nav__dropdown>li>a {
    position: relative;
    z-index: 6;
  }
  .site-nav__dropdown a {
    background-color: #fff;
  }
  .site-nav__dropdown-link {
    display: block;
    padding: 8px 15px;
    white-space: nowrap;
  }
  .site-nav--has-dropdown>.site-nav__link {
    position: relative;
    z-index: 6;
  }
  .site-nav__link,
  .mobile-nav__link--top-level {
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  .site-nav__item:hover .site-nav__link--underline:after {
    right: 0;
  }
  .site-nav--has-dropdown .site-nav__link--underline:after {
    border-bottom-color: #000;
  }
  .site-nav__link--underline:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 100%;
    margin: 0 15px;
    border-bottom: 2px solid #000;
    transition: right 0.5s;
  }
  .cart-link {
    position: relative;
  }
  .cart-total {
    color: #fff;
    background-color: {{ settings.color_primary }};
    border-radius: 50%;
    display: block;
    font-size: 12.5px;
    font-weight: 400;
    text-align: center;
    line-height: 20px;
    height: 20px;
    width: 20px;
    position: absolute;
    left: -10px;
    top: 0;
  }
  .bigcounter {
    margin-left: 3px;
  }

  /*===== HEADER FOR MOBILE =====*/
  .bd-grid {
    max-width: 1024px;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 100%;
    grid-template-columns: 100%;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .header {
    position: relative;
  }
  @media screen and (max-width: 768px) {
    .nav {
      position: fixed;
      top: 0;
      left: -100%;
      background-color: #ffffff;
      color: #000000;
      width: 100%;
      height: 100vh;
      padding: 1.5rem 0;
      z-index: 30;
      -webkit-transition: .5s;
      transition: .5s;
    }
  }
  @media screen and (min-width: 1024px) {
    .header {
      display: none;
    }
  }
  .nav__content {
    height: 100%;
    -ms-grid-rows: max-content 1fr max-content;
    grid-template-rows: -webkit-max-content 1fr -webkit-max-content;
    grid-template-rows: max-content 1fr max-content;
    row-gap: 2rem;
  }
  .nav__close {
    position: absolute;
    top: .5rem;
    right: 1rem;
    font-size: 1rem;
    padding: .25rem;
    border-radius: 50%;
    cursor: pointer;
  }
  .nav__menu {
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
  }
  ul.nav__list {
    margin-top: 60px;
  }
  .nav__item {
    padding: 15px 0;
    position: relative;
  }
  .nav__item:first-child {
    border-top: 1px solid #e8e8e1;
  }
  .nav__item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #e8e8e1;
  }
  .nav__link-top {
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  .nav__social {
    display: flex;
  }
  .nav__social-icon .social-icons li {
    margin-right: 0 !important;
  }
  .nav__social-icon .social-icons li a {
    color: #1a1a1a;
  }
  .nav__social-icon:hover {
    color: #ffce00;
  }
  /* Dropdown For Mobile */
  .dropdown__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dropdown__icon {
    font-size: 1.3rem;
    transition: .5s;
    transform: rotate(-90deg);
  }
  .dropdown__item {
    margin: 1rem 0;
  }
  .rotate__icon {
    transform: rotate(0deg);
  }
  .default-skin {
    font-weight: 400;
    font-size: 14px;
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --skin: #ffffff;
    --skin-hover: #f0f0f0;
    --skin-color: #1f1f1f;
  }
  .menu-body.visibility {
    visibility: hidden;
  }
  .menubar {
    width: 100%;
    height: 48px;
    display: block;
    background: var(--skin);
    color: var(--skin-color);
    line-height: 48px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  }
  .menu-trigger {
    position: absolute;
    -webkit-appearance: none;
    border: 0;
    outline: 0;
    background: transparent;
    top: 10px;
    padding: 0 5px;
    color: var(--skin-color);
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, .2);
  }
  .menu-trigger:hover {
    opacity: 0.8;
    -webkit-opacity: 0.8;
  }
  .menu-trigger.left {
    left: 20px;

  }
  .menu-trigger.right {
    right: 20px;
  }
  .sticky {
    position: fixed;
    top: 0;
    left: 0;
  }
  .menu-container {
    overflow: auto;
    display: block;
    top: 0;
  }
  .menu-container::-webkit-scrollbar {
    width: 0;
  }
  .menu-container::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.2);
  }
  .menu-container::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.11);
  }
  .menu-container::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .position-left {
    left: -270px;
  }
  .position-right {
    right: -270px;
  }
  .position-left.open {
    left: 0;
  }
  .position-right.open {
    right: 0;
  }
  .menu-container,
  .menu-head,
  .menu-left,
  .menu-left.open .menu-right,
  .menu-right.open {
    transition: .4s;
    -webkit-transition: .4s;
    -moz-transition: .4s;
    -ms-transition: .4s;
  }
  .menu-container,
  .menu-head {
    background: var(--skin);
    position: fixed;
    z-index: 1000;
    width: 270px;
  }
  .menu-head .layer {
    background: rgba(0, 0, 0, 0.2);
    display: block;
    padding: 15px;
  }
  .menu-head {
    height: 120px;
    box-sizing: border-box;
    margin: 0px;
    top: 0;
  }
  .menu-items {
    list-style: none;
    font-size: 14px;
    margin-top: 45px;
  }
  .menu-items li {
    margin: 0;
  }
  .dropdown-heading,
  .menu-items li a {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    text-decoration: none;
    padding: 15px 5px 15px 15px;
    display: block;
    color: var(--skin-color);
    border-bottom: 1px solid #e8e8e1;
    margin: 0;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Icon Style */
  .menu-items li i {
    font-size: 16px;
    margin-right: 10px;
  }
  .dropdown-heading {
    -webkit-tap-highlight-color: transparent;
  }
  .dropdown-heading:hover,
  .menu-items li a:hover {
    background: var(--skin-hover);
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      -webkit-opacity: 0;
    }

    to {
      opacity: 1;
      -webkit-opacity: 1;
    }
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
      -webkit-opacity: 0;
    }

    to {
      opacity: 1;
      -webkit-opacity: 1;
    }
  }

  /* Dropdowns */
  .has-sub ul {
    list-style: none;
    overflow: hidden;
    display: none;
    margin: 0 !important;
  }
  .has-sub ul li a {
    display: block;
    padding: 12px 33px;
    border-bottom: 0;
    text-transform: capitalize;
    font-size: 13px;
    color: #444;
    transition: .1s;
    -webkit-transition: .1s;
    border-bottom: 1px dotted #e1e1e1;
  }
  .has-sub ul li a:hover {
    background: #dedede;
    transition: .1s;
    -webkit-transition: .1s;
  }
  .has-sub span {
    display: block;
    box-sizing: border-box;
  }
  .has-sub i.dropdown__icon {
    float: right;
    margin-right: 10px;
    transition: 0.360s;
    font-size: 16px;
    color: #1f1f1f;
  }
  .has-sub .dropdown__icon.d-down {
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
    transition: 0.360s;
    -webkit-transition: 0.360s;
    -moz-transition: 0.360s;
  }
  .col {
    display: table;
  }
  .row {
    display: table-cell;
  }
  .for-name {
    max-width: 140px;
    padding: 10px;
    color: var(--skin-color);
  }
  .for-pic {
    max-width: 70px;
  }
  .profile-pic img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.01);
    object-fit: cover;
  }
  .menu-head h3 {
    top: -35px;
    font-size: 13pt;
    font-weight: 400;
  }
  .tagline,
  .menu-head h3 {
    display: block;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tagline {
    font-size: 11px;
    bottom: 32px;
    display: block;
  }

  /* Dim background effect */
  .dim-overlay {
    display: none;
    position: relative;
    z-index: 33;
  }
  .dim-overlay:before {
    content: "";
    background-color: rgba(0, 0, 0, .4);
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    overflow: hidden;
    z-index: 5;
  }
  .logo {
    display: block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 22px;
  }
  .logo img {
    width: 130px;
    margin-top: 10px;
    height: auto;
  }
  .logo a {
    text-decoration: none;
    color: var(--skin-color);
  }
  .logo a:hover {
    color: var(--skin-hover);
  }
  .cus__account {
    padding-left: 15px;
    margin-bottom: 15px;
  }

  /* SEARCH BANNER STYLE */
  #search-menu {
    position: fixed;
    width: 100%;
    height: 132px;
    top: -20em;
    left: 0;
    right: 0;
    white-space: nowrap;
    z-index: 9999;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: 500ms ease all;
    -moz-transition: 500ms ease all;
    transition: 500ms ease all;
  }
  #search-menu.toggled {
    top: 0;
    opacity: 1;
    visibility: visible;
  }
  #search-menu .wrapper {
    position: relative;
    margin: 36px 20px 0;
    padding: 0 1em;
  }
  #search-menu .wrapper input {
    width: 90%;
    padding: 0 0 0.125em 0;
    background: transparent;
    border: none;
    border-bottom: 3px solid #bfbfbf;
    font-size: 22px;
    color: #010101;
  }
  #search-menu .wrapper input:focus {
    outline: none;
  }
  #search-menu .wrapper button {
    position: absolute;
    display: block;
    width: 10%;
    right: 0;
    top: 0;
    background: transparent;
    border: none;
    -webkit-transition: 500ms ease all;
    -moz-transition: 500ms ease all;
    transition: 500ms ease all;
  }
  #search-menu .wrapper button:focus {
    outline: none;
  }
  .search-icon {
    -webkit-transition: 500ms ease all;
    -moz-transition: 500ms ease all;
    transition: 500ms ease all;
    cursor: pointer;
    padding-right: 15px !important;
  }
  
  /* ANNOUNCE BAR STYLE */
  @media only screen and (min-width: 769px) {
    .announcement-bar {
      font-size: 15px;
    }
  }
  
  .announcement-bar {
    font-size: 13px;
    position: relative;
    text-align: center;
    padding: 10px 0;
    width: 100%;
  }
  .announcement-bar p {
    margin: 0;
    letter-spacing: 2px;
  }
</style>

<!-- Menu Mobile -->
<div class="menu-body visibility">
  <nav class="menu-container">
    <ul class="menu-items">
      {%- for link in linklists[section.settings.nav_menu-mobile].links -%}
      {%- assign childlink_handle = link.title | handle -%}
      {%- if linklists[childlink_handle] and linklists[childlink_handle].links.size > 0 -%}
      <li class="has-sub">
        <span class="dropdown-heading">{{ link.title }}</span>
        <ul>
          {%- for childlink in linklists[childlink_handle].links -%}
          <li> <a href="{{ childlink.url }}">{{ childlink.title }}</a> </li>
          {%- endfor -%}
        </ul>
      </li>
      {%- else -%}
      <li> <a href="{{ link.url }}">{{ link.title }}</a></li>
      {%- endif -%}
      {%- endfor -%}
    </ul>
    {% if shop.customer_accounts_enabled %}
      <div class="cus__account"><a href="/account/login">Log in</a></div>
    {% endif %}
    <div class="nav__social-icon">
      {% if settings.social_twitter_link != blank or settings.social_facebook_link != blank or settings.social_pinterest_link != blank or settings.social_google_plus_link != blank or settings.social_instagram_link != blank or settings.social_snapchat_link != blank or settings.social_tumblr_link != blank or settings.social_youtube_link != blank or settings.social_vimeo_link != blank or settings.social_fancy_link != blank or settings.social_rss_link != blank %}
      {% assign show_social_icons = true %}
      {% else %}
        {% assign show_social_icons = false %}
      {% endif %}
      {% include 'social-links' %}
    </div>
  </nav>
</div>

<div class="sticky-header" data-section-id="{{ section.id }}" data-section-type="header-section">
  <header id="home">
    <nav class="navigation">
      <div class="nav-center container">
        <div class="header-item header-item--left header-item--navigation">
          <div class="site-nav medium-down--hide">
            <a class="search-icon site-nav__link site-nav__link--icon">
              <span class="icon icon-search header-bar__search-icon"></span>
            </a>
          </div>
          <div class="site-nav medium-up--hide">
            <button type="button" class="site-nav__link site-nav__link--icon js-drawer-open-nav" id="nav-toggle">
              <span class="icon icon-hamburger"></span>
            </button>
          </div>
        </div>
        <div class="header-item header-item--logo-split" role="navigation" aria-label="Primary">
          <div class="header-item header-item--split-left">
            <ul class="site-nav site-navigation medium-down--hide">
             {% for link in linklists[section.settings.nav_menu-left].links %}
             {% if link.links != blank %}
             {% assign parent_index = forloop.index %}
             <li class="site-nav__item site-nav__expanded-item site-nav--has-dropdown">
               <a href="{{ link.url }}"
                 class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown">
                 {{ link.title }}
               </a>
                <ul class="site-nav__dropdown text-left">
                   {% for childlink in link.links %}
                      <li>
                         <a href="{{ childlink.url }}"
                            class="site-nav__link site-nav__dropdown-link--second-level ">
                            {{ childlink.title | escape }}
                         </a>
                      </li>
                   {% endfor %}
                </ul>
             </li>
             {%- else -%}
                <li class="site-nav__item site-nav__expanded-item">
                <a href="{{ link.url }}" class="site-nav__link site-nav__link--underline">
                   {{ link.title | escape }}
                </a>
                </li>
             {% endif %}
             {% endfor %}
          </ul>
          </div>
          <div class="header-item header-item--logo">
            <!-- LOGO -->
            <div class="h1 site-header__logo">
              {%- if section.settings.logo -%}
              {% capture logo_size %}{{ section.settings.logo_width | escape }}x{% endcapture %}
              <a href="/" class="site-header__logo-link logo--has-inverted">
                <img src="{{ section.settings.logo | img_url: logo_size }}"
                  alt="{{ section.settings.logo.alt | default: shop.name }}"
                  {%- if section.settings.ratina_logo_enable -%}
                  srcset="{{ section.settings.logo | img_url: logo_size }} 1x, {{ section.settings.logo | img_url: logo_size, scale: 2 }} 2x"
                  {%- endif -%}>
              </a>
              {%- else -%}
              <a href="/">
                <strong>{{ shop.name }}</strong>
              </a>
              {%- endif -%}
            </div>
          </div>
          <div class="header-item header-item--split-right">
			<ul class="site-nav site-navigation medium-down--hide">
             {% for link in linklists[section.settings.nav_menu-right].links %}
             {% if link.links != blank %}
             {% assign parent_index = forloop.index %}
             <li class="site-nav__item site-nav__expanded-item site-nav--has-dropdown">
               <a href="{{ link.url }}"
                 class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown">
                 {{ link.title }}
               </a>
                <ul class="site-nav__dropdown text-left">
                   {% for childlink in link.links %}
                      <li>
                         <a href="{{ childlink.url }}"
                            class="site-nav__link site-nav__dropdown-link--second-level ">
                            {{ childlink.title | escape }}
                         </a>
                      </li>
                   {% endfor %}
                </ul>
             </li>
             {%- else -%}
                <li class="site-nav__item site-nav__expanded-item">
                   <a href="{{ link.url }}" class="site-nav__link site-nav__link--underline">
                      {{ link.title | escape }}
                   </a>
                </li>
             {% endif %}
             {% endfor %}
          </ul>
          </div>
        </div>
        <div class="header-item header-item--icons">
          <div class="site-nav">
            <div class="site-nav__icons">
              <a class="search-icon site-nav__link site-nav__link--icon medium-up--hide">
                <span class="icon icon-search header-bar__search-icon"></span>
              </a>
              {% if shop.customer_accounts_enabled %}
              <ul class="header-bar__module header-bar__module--list">
                {% if customer %}
                <li>
                  <a href="{{ routes.account_url }}">{{ 'layout.customer.account' | t }}</a>
                </li>
                <li>
                  {{ 'layout.customer.log_out' | t | customer_logout_link }}
                </li>
                {% else %}
                <li>
                  <a class="site-nav__link site-nav__link--icon medium-down--hide" href="/account/login">
                    <span class="icon user-tie" aria-hidden="true">
                      <svg class="login-icon" xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21">
                        <path id="user"
                          d="M64.174,33.947A18.332,18.332,0,0,0,72,35.988a16.577,16.577,0,0,0,7.838-2.047A.333.333,0,0,0,80,33.654a10.732,10.732,0,0,0-2.324-6.935,7.554,7.554,0,0,0-3.814-2.486,4.333,4.333,0,1,0-3.724,0,7.555,7.555,0,0,0-3.814,2.486A10.732,10.732,0,0,0,64,33.654.333.333,0,0,0,64.174,33.947Zm4.16-13.626A3.667,3.667,0,1,1,72,23.988a3.667,3.667,0,0,1-3.667-3.667Zm-1.5,6.827a6.6,6.6,0,0,1,10.332,0,10.007,10.007,0,0,1,2.166,6.311A16.314,16.314,0,0,1,72,35.321a17.864,17.864,0,0,1-7.331-1.869A10,10,0,0,1,66.834,27.149Z"
                          transform="translate(-63.5 -15.487)" stroke-width="1" />
                      </svg>
                    </span>
                  </a>
                </li>
                {% endif %}
              </ul>
              {% endif %}
              {%- assign item_count = cart.item_count -%}
              <a href="/cart" class="site-nav__link site-nav__link--icon">
                <span class="cart-link">
                  <span class="icon icon-cart header-bar__cart-icon"></span>
                  <span class="cart-total"><span class="bigcounter">{{ item_count }}</span></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>
<div id="search-menu">
  <div class="wrapper">
    <form id="form" action={{ routes.search_url }} method="get" role="search">
      <input id="popup-search" type="search" name="q" value="{{ search.terms | escape }}" aria-label="{{ 'general.search.placeholder' | t }}" placeholder="{{ 'general.search.placeholder' | t }}">
      <button id="popup-search-button" type="submit" name="search"><i class="icon icon-search header-bar__search-icon"></i></button>
    </form>
  </div>
</div>

<script>
  (function ($) {
  $.fn.jSideMenu = function (options) {
     var setting = $.extend({
        jSidePosition: "position-left", //possible options position-left or position-right 
        jSideSticky: true, // menubar will be fixed on top, false to set static
        jSideSkin: "default-skin", // to apply custom skin, just put its name in this string
        jSideTransition: 400, //Define the transition duration in milliseconds 
     }, options);

     return this.each(function () {
        var jSide, target, headHeight, devHeight, arrow, dimBackground;
        target = $(this);
        //Accessing DOM
        jSide = $(".menu-container, .menu-head");
        devHeight = $(window).height();
        dHeading = $(".dropdown-heading");
        menuTrigger = $("#nav-toggle");
        arrow = $("<i></i>");
        dimBackground = $("<div>");
        // Set the height of side menu according to the available height of device
        $(target).css({
           'height': devHeight,
        });
        if (setting.jSideSticky == true) {
           $(".menubar").addClass("sticky");
        } else {
           $(".menubar").removeClass("sticky");
        }
        $(".menubar").addClass(setting.jSideSkin);
        $(jSide).addClass(setting.jSideSkin).addClass(setting.jSidePosition);
        if ($(jSide).hasClass("position-left")) {
           $("#nav-toggle").addClass("left").removeClass("right");
        } else {
           $("#nav-toggle").removeClass("left").addClass("right");
        }
        //Dropdown Arrow
        $(arrow).addClass("icon icon-arrow-down dropdown__icon").appendTo(dHeading);
        //Dim Layer	
        $(dimBackground).addClass("dim-overlay").appendTo("body");
        //Dropdowns
        $(dHeading).click(function () {
           $(this).parent().find("ul").slideToggle(setting.jSideTransition);
           $(this).find(".dropdown__icon").toggleClass("d-down");
        });
        $(menuTrigger).click(function () {
           $(jSide).toggleClass("open");
           $('.myheader-section').addClass('nav-up');
           $(dimBackground).show(setting.jSideTransition);
           $(".menu-body").removeClass("visibility");
        });
        //close menu if user click outside of it
        $(window).click(function (e) {
           if ($(e.target).closest('#nav-toggle').length) {
              return;
           }
           if ($(e.target).closest(jSide).length) {
              return;
           }
           $(jSide).removeClass("open");
           if (!$(jSide).hasClass("open")) {
              $(dimBackground).hide(setting.jSideTransition);
           }
           $(".menu-body").addClass("visibility");
        });
     });
  };
 })(jQuery);

$(function () {
  $(".menu-container").jSideMenu({
    jSidePosition: "position-left",
  });
});

// SEARCH SCRIPT
$(function() {
  $('#search-menu').removeClass('toggled');

  $('.search-icon').click(function(e) {
    e.stopPropagation();
    $('#search-menu').toggleClass('toggled');
    $("#popup-search").focus();
  });
  
  $('#search-menu input').click(function(e) {
    e.stopPropagation();
  });

  $('#search-menu, body').click(function() {
    $('#search-menu').removeClass('toggled');
  });
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.myheader-section').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.myheader-section').removeClass('nav-up');
        }
    }
    
    lastScrollTop = st;
}
</script>

{% schema %}
{
  "name": {
    "da": "Overskrift",
    "de": "Titel",
    "en": "Header",
    "es": "Encabezado",
    "fi": "Ylätunniste",
    "fr": "En-tête",
    "hi": "हैडर",
    "it": "Header",
    "ja": "ヘッダー",
    "ko": "헤더",
    "nb": "Header",
    "nl": "Koptekst",
    "pt-BR": "Cabeçalho",
    "pt-PT": "Cabeçalho",
    "sv": "Rubrik",
    "th": "ส่วนหัว",
    "zh-CN": "标头",
    "zh-TW": "標頭"
  },
  "class": "myheader-section",
  "settings": [
    {
      "type": "image_picker",
      "id": "logo",
      "label": {
        "da": "Logo",
        "de": "Logo",
        "en": "Logo",
        "es": "Logo",
        "fi": "Logo",
        "fr": "Logo",
        "hi": "लोगो",
        "it": "Logo",
        "ja": "ロゴ",
        "ko": "로고",
        "nb": "Logo",
        "nl": "Logo",
        "pt-BR": "Logotipo",
        "pt-PT": "Logótipo",
        "sv": "Logotyp",
        "th": "โลโก้",
        "zh-CN": "logo",
        "zh-TW": "商標"
      },
      "info": {
        "da": "450 x 200 pixel anbefales",
        "de": "450 x 200 Pixel empfohlen",
        "en": "450 x 200px recommended",
        "es": "450 x 200px recomendado",
        "fi": "Suositus 450 x 200px",
        "fr": "450 x 200 px recommandé",
        "hi": "450 x 200px की अनुशंसा की जाती है",
        "it": "450 x 200 px consigliato",
        "ja": "450 x 200ピクセルを推奨",
        "ko": "450x200 픽셀 권장",
        "nb": "450 x 200 px anbefales",
        "nl": "450 x 200 px aanbevolen",
        "pt-BR": "450 x 200 px recomendado",
        "pt-PT": "450 x 200 píxeis (recomendado)",
        "sv": "450 x 200px rekommenderas",
        "th": "แนะนำขนาด 450 x 200 พิกเซล",
        "zh-CN": "推荐使用 450 x 200 像素大小",
        "zh-TW": "建議使用 450 x 200px"
      }
    },
    {
      "type": "text",
      "id": "logo_width",
      "label": {
        "da": "Tilpasset logobredde (i pixels)",
        "de": "Benutzerdefinierte Logobreite (Pixel)",
        "en": "Custom logo width (in pixels)",
        "es": "Ancho del logo personalizado (en píxeles)",
        "fi": "Mukautettu logon leveys (pikseleinä)",
        "fr": "Largeur personnalisée du logo (en pixels)",
        "hi": "कस्टम लोगो की चौड़ाई (पिक्सेल)",
        "it": "Larghezza logo personalizzato (in pixel)",
        "ja": "ロゴの幅をカスタマイズする (ピクセル単位)",
        "ko": "사용자 지정 로고 폭 (픽셀)",
        "nb": "Tilpasset logobredde (i piksler)",
        "nl": "Aangepaste logobreedte (in pixels)",
        "pt-BR": "Largura do logotipo personalizado (em pixels)",
        "pt-PT": "Largura de logótipo personalizada (em píxeis)",
        "sv": "Anpassad logotypbredd (i pixlar)",
        "th": "ความกว้างของโลโก้แบบกำหนดเอง (เป็นพิกเซล)",
        "zh-CN": "自定义 logo 宽度（像素）",
        "zh-TW": "自訂標誌寬度 (單位為像素)"
      },
      "default": {
        "da": "450",
        "de": "450",
        "en": "450",
        "es": "450",
        "fi": "450",
        "fr": "450",
        "hi": "450",
        "it": "450",
        "ja": "450",
        "ko": "450",
        "nb": "450",
        "nl": "450",
        "pt-BR": "450",
        "pt-PT": "450",
        "sv": "450",
        "th": "450",
        "zh-CN": "450",
        "zh-TW": "450"
      }
    },
    {
      "type": "checkbox",
      "id": "ratina_logo_enable",
      "label": "Retina Logo Enable",
      "default": true
    },
    {
      "type": "header",
      "content": {
        "da": "Hovedmenu",
        "de": "Hauptmenü",
        "en": "Main menu",
        "es": "Menú principal",
        "fi": "Päävalikko",
        "fr": "Menu principal",
        "hi": "मुख्य मेनू",
        "it": "Menu principale",
        "ja": "メインメニュー",
        "ko": "주 메뉴",
        "nb": "Hovedmeny",
        "nl": "Hoofdmenu",
        "pt-BR": "Menu principal",
        "pt-PT": "Menu principal",
        "sv": "Huvudmeny",
        "th": "เมนูหลัก",
        "zh-CN": "主菜单",
        "zh-TW": "主選單"
      }
    },
    {
      "type": "link_list",
      "id": "nav_menu-left",
      "label": {
        "da": "Menu",
        "de": "Menü",
        "en": "Left Main Menu",
        "es": "Menú",
        "fi": "Valikko",
        "fr": "Menu",
        "hi": "मेनू",
        "it": "Menu",
        "ja": "メニュー",
        "ko": "메뉴",
        "nb": "Meny",
        "nl": "Menu",
        "pt-BR": "Menu",
        "pt-PT": "Menu",
        "sv": "Meny",
        "th": "เมนู",
        "zh-CN": "菜单",
        "zh-TW": "選單"
      }
      
    },
    {
      "type": "link_list",
      "id": "nav_menu-right",
      "label": {
        "da": "Menu",
        "de": "Menü",
        "en": "Right Main Menu",
        "es": "Menú",
        "fi": "Valikko",
        "fr": "Menu",
        "hi": "मेनू",
        "it": "Menu",
        "ja": "メニュー",
        "ko": "메뉴",
        "nb": "Meny",
        "nl": "Menu",
        "pt-BR": "Menu",
        "pt-PT": "Menu",
        "sv": "Meny",
        "th": "เมนู",
        "zh-CN": "菜单",
        "zh-TW": "選單"
      }    
    },
    {
      "type": "link_list",
      "id": "nav_menu-mobile",
      "label": {
      "da": "Menu",
      "de": "Menü",
      "en": "Mobile Main Menu",
      "es": "Menú",
      "fi": "Valikko",
      "fr": "Menu",
      "hi": "मेनू",
      "it": "Menu",
      "ja": "メニュー",
      "ko": "메뉴",
      "nb": "Meny",
      "nl": "Menu",
      "pt-BR": "Menu",
      "pt-PT": "Menu",
      "sv": "Meny",
      "th": "เมนู",
      "zh-CN": "菜单",
      "zh-TW": "選單"
      }    
    }
  ]
}
{% endschema %}
```

That's it! I really hope you find this tutorial useful.