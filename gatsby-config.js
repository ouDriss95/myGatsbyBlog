module.exports = {
  siteMetadata: {
    title: `Driss OUDMINE`,
    name: `ouDriss`,
    siteUrl: `https://novela.narative.co`,
    description: `Front-end web developer. Specialized in Shopify theme development`,
    hero: {
      heading: `Customize your Shopify store with ease!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/ouDriss95`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/oudriss95`,
      },
      {
        name: `behance`,
        url: `https://www.behance.net/unbreakabl16d0`,
      }
    ],
  },
  
  plugins: [
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
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
        short_name: `ouDriss`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    }
  ],
};