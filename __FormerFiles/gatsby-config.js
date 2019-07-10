require('dotenv').config()
const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Sauti Design Studio`,
    description: ``,
    author: `@labs13-sauti-studio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sauti-design-studio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/workflow/*`] },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, `src/`),
        '@': path.join(__dirname, `src/components/`),
        actions: path.join(__dirname, `src/actions/`),
        reducers: path.join(__dirname, `src/reducers/`),
        theme: path.join(__dirname, `src/theme.js`),
        helpers: path.join(__dirname, `src/helpers.js`),
      },
    },
  ],
}
