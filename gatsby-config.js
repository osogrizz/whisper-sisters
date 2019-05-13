module.exports = {
  siteMetadata: {
    title: `Whisper Sisters`,
    description: `Whisper SIsters Cocktails and Provisions Petaluma, CA.`,
    author: `Leo Torres @leo-torres.tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway']
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `whisper-sisters`,
        short_name: `WHisper Sisters`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/drink-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        type: `user-profile`,
        username: `whispersisterspetaluma`,
        // username: `osogrizz_`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `whispersisterspetaluma`,
        // username: `osogrizz_`,
      },
    },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `osogrizz_`,
    //     access_token: "3a6645a5ae9b4a9386d7b03fb70e935a",
    //     instagram_id: "b2911f77bb38477d9a54b9fcbc81d575",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})