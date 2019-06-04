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
    //     access_token: `936619743392459|3cdb3f896252a1db29679cb4554db266`,
    //     instagram_id: `4d8ae44e9ad44defa2dafe1a27007ab8`,
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

// http://your-redirect-uri?error=access_denied&error_reason=user_denied&error_description=The+user+denied+your+request