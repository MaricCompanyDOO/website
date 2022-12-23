import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { LogoWrapper, StickyHeader, StickyHeaderItem, StickyHeaderRowContainer, StyledLogo } from "./header.style";
import { SECTIONS } from "../../utils/content";

interface IHeaderProps {
  activeRoute: number | null;
  onRouteClick: (index: number) => void;
}

const Header: React.FC<IHeaderProps> = ({
  activeRoute,
  onRouteClick,
}) => {
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
    <StickyHeader>
      <LogoWrapper>
        <StyledLogo backgroundImage={data?.file?.childImageSharp?.gatsbyImageData?.images?.fallback?.src} />
      </LogoWrapper>
      <StickyHeaderRowContainer>
        {SECTIONS.map((section, i) => (
          <StickyHeaderItem
            key={`${section}${i}`}
            isActive={activeRoute === i}
            onClick={() => onRouteClick(i)}
          >
            {section}
          </StickyHeaderItem>
        ))}
      </StickyHeaderRowContainer>
    </StickyHeader>
  )
}

export default Header;
