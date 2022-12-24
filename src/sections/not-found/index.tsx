import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { theme } from "../../style/theme";
import { SectionSubheading } from "../../style/global-style";
import { LogoWrapper, NotFoundText, NotFoundTextWrapper, NotFoundWrapper, StyledLogo } from "./not-found.style";

const NotFoundSection: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query logoImageApply {
      file(relativePath: { eq: "logo.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 3080, height: 931)
        }
      }
    }
  `);

  return (
    <NotFoundWrapper gridGap={0}>
      <LogoWrapper onClick={() => window.open("/", "_self")}>
        <StyledLogo backgroundImage={data?.file?.childImageSharp?.gatsbyImageData?.images?.fallback?.src} />
      </LogoWrapper>
      <NotFoundTextWrapper>
        <SectionSubheading color={theme.colors.orange()}>
          Stranica nije dostupna
        </SectionSubheading>
        <NotFoundText>
          Izgleda da stranica koju tražite ne postoji ili više nije dostupna.
        </NotFoundText>
      </NotFoundTextWrapper>
    </NotFoundWrapper>
  )
};

export default NotFoundSection;
