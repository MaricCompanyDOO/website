import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelmetSafety, faTree, faTruck, faGears } from "@fortawesome/free-solid-svg-icons";
import { BackgroundContainer, BackgroundFixedContainer, ExpertiesContainer, ExpertiesRelativeContainer, FixedHeading, FixedSubheading, GridContainer, GridItemBottomLeft, GridItemBottomRight, GridItemHeading, GridItemSeparatorHorizontal, GridItemSeparatorVertical, GridItemTopLeft, GridItemTopRight, GridSeparator } from "./experties.style";
import { theme } from "../../style/theme";

const ExpertiesSection: React.FC<{}> = () => {

  const data = useStaticQuery(graphql`
    query expertiesImageApply {
      file(relativePath: { eq: "truck-and-trees.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 978, height: 1385)
        }
      }
    }
  `);

  return (
    <ExpertiesRelativeContainer>
      <ExpertiesContainer>
        <BackgroundContainer backgroundImage={data?.file?.childImageSharp?.gatsbyImageData?.images?.fallback?.src}>
        <BackgroundFixedContainer gridGap={4}>
          <FixedSubheading>
            Tu smo da ispunimo<br />sve Vaše kriterijume!
          </FixedSubheading>

          <GridSeparator />

          <GridContainer gridGap={32}>
            <GridItemTopLeft>
              <GridItemHeading>Iskusni i<br/>stručni radnici</GridItemHeading>
              <FontAwesomeIcon icon={faHelmetSafety} color={theme.colors.white()} fontSize={64} />
            </GridItemTopLeft>

            <GridItemSeparatorVertical />

            <GridItemTopRight>
              <GridItemHeading>Kvalitetne sirovine</GridItemHeading>
              <FontAwesomeIcon icon={faTree} color={theme.colors.white()} fontSize={64} />
            </GridItemTopRight>
          </GridContainer>

          <GridItemSeparatorHorizontal />

          <GridContainer gridGap={32}>
            <GridItemBottomLeft>
              <FontAwesomeIcon icon={faGears} color={theme.colors.white()} fontSize={64} />
              <GridItemHeading>Savremena mašinerija</GridItemHeading>
            </GridItemBottomLeft>

            <GridItemSeparatorVertical />

            <GridItemBottomRight>
              <FontAwesomeIcon icon={faTruck} color={theme.colors.white()} fontSize={64} />
              <GridItemHeading>Organizovan transport</GridItemHeading>
            </GridItemBottomRight>
          </GridContainer>

          
          {/* <FontAwesomeIcon icon={faTree} color={theme.colors.white()} fontSize={64} />
          <FontAwesomeIcon icon={faTruck} color={theme.colors.white()} fontSize={64} />
          <FontAwesomeIcon icon={faGears} color={theme.colors.white()} fontSize={64} /> */}

        </BackgroundFixedContainer>
        </BackgroundContainer>
      </ExpertiesContainer>
      
    </ExpertiesRelativeContainer>
  )
}

export default ExpertiesSection
