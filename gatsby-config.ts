import type { GatsbyConfig } from "gatsby";

const path = require("path");

require("dotenv").config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Maric Company d.o.o`,
    description: `Naša djelatnost je proizvodnja visokokvalitetnih drvnih sortimenta (rezane građe).`,
    author: `Maric Company d.o.o`,
    siteUrl: `https://maric-company.netlify.app/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["GATSBY_SITE_VERIFICATION"],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        "name": "images",
        "path": "./src/images/"
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.jpeg',
      },
    },
  ]
};

export default config;
