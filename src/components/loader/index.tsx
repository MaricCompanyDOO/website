import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { LoaderWrapper, LogoWrapper, StyledLogo } from "./loader.style";

const Loader: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query loaderLogoImageApply {
      file(relativePath: { eq: "logo.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 3080, height: 931)
        }
      }
    }
  `);

  return (
    <LoaderWrapper>
      <LogoWrapper onClick={() => window.open("/", "_self")}>
        <StyledLogo backgroundImage={data?.file?.childImageSharp?.gatsbyImageData?.images?.fallback?.src} />
      </LogoWrapper>
    </LoaderWrapper>
  )
};

export default Loader;
