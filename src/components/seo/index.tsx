import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  title: string;
  schemaMarkup?: {[key: string]: string | string[]};
}

function Seo({ description = "", lang, meta = [], title, schemaMarkup }: SEOProps) {
  const { site, ogImageDefault }: any = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        ogImageDefault: file(relativePath: { eq: "company.jpeg" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, height: 533, width: 716)
          }
        }
      }
    `
  );

  const metaDescription: string = description || site?.siteMetadata?.description;
  const defaultTitle: string = site?.siteMetadata?.title;
  const ogImage =
    ogImageDefault?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;

  return (
    <Helmet
      htmlAttributes={{
        lang: lang || "sr",
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: ogImage,
        },
        {
          name: "og:image",
          content: ogImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: process.env.GATSBY_SITE_VERIFICATION,
        }
      ].concat(meta)}
    >
      {schemaMarkup &&
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      }
    </Helmet>
  );
}

export default Seo;
