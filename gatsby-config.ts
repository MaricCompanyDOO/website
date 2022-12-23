import type { GatsbyConfig } from "gatsby";

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
  // flags: {
  //   DEV_SSR: true
  // },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-env-variables`,
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        "name": "images",
        "path": "./src/images/"
      },
    },
  ]
};

export default config;
