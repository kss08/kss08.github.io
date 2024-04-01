/**
 * @type {import('gatsby').GatsbyConfig}
 */

const configuration = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/static/icon.png",
      },
    },
  ]
}

module.exports = configuration