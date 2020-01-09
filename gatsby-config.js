/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby-Bootstrap Project",
    description: "A website created with gatsby and wordpress data sourced.",
    keywords: "gatsby, gatsbyjs, gatsby bootstrap, wordpress, pwa, headlessCMS",
    image: "/static/moto_sm_iii.png",
    url: "http://sampleurl.net",
    author: "@gufufu" 
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
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
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `mrsoficina.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        auth:{},
        verboseOutput: false,
        includeRoutes: [
          "/*/*/posts",
          "/*/*/media",
        ],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby-Bootstrap Project`,
        short_name: `GatsbyBS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`
  ],
}