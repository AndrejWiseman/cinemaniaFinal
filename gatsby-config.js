/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {

  siteMetadata:{
    title: 'CineManiA',
    description: 'Filmski klasici na jednom mestu',
    author: 'ByMe',
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `y6gvwg5f8rqc`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Lora",
              variants: ["300", "400", "500"],
            },
            {
              family: "Roboto",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },

    `gatsby-plugin-react-helmet`,


  ],
}
