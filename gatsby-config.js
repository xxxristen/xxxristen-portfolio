/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `xxxristen-portfolio`,
    siteUrl: `https://xxxristen-portfolio.vercel.app/`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `xxxristen-portfolio`,
        short_name: `x`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [{
          name: `Montserrat`,
          file: `https://fonts.googleapis.com/css2?family=Montserrat`,
        },
        {
          name: `Outfit`,
          file: `https://fonts.googleapis.com/css2?family=Outfit`,
        },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-BSNKGT4CGW"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
  ]
};
