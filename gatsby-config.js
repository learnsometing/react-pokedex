module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Modern Dev Boilerplate`,
    description: `Default gatsby config with typescript, linting, styled-components, and testing configuration.`,
    author: `Brian Monaccio <brianmonaccio@protonmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cries`,
        path: `${__dirname}/src/data/cries`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Pokemon',
        imagePath: 'spriteRemote',
        name: 'spriteLocal',
      },
    },
  ],
};
