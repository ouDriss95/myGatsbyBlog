module.exports = {
  siteMetadata: {
    title: `Driss OUDMINE`,
    name: `doudmine`,
    siteUrl: `https://doudmine.com`,
    description: `Front-end web developer. Specialized in Shopify theme development`,
    hero: {
      heading: `Customize your Shopify store with ease!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `instagram`,
        url: `https://www.instagram.com/doudmine/`,
      },
      {
        name: `youtube`,
        url: `https://www.youtube.com/channel/UCYF73P2A2NdVr6c9aONH22w`,
      }
    ],
  },
  
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-194233944-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      }
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          //contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Driss OUDMINE`,
        short_name: `doudmine`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    }
  ],
};