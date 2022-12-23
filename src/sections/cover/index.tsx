import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BackgroundContainer, BackgroundInnerContainer, CoverContainer, Subtitle, Title, SubtitleWrapper } from "./cover.style";

const CoverSection: React.FC<{}> = () => {

  const data = useStaticQuery(graphql`
    query coverImageApply {
      file(relativePath: { eq: "cover.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1600, height: 1200)
        }
      }
    }
  `);

  return (
    <CoverContainer>
      <BackgroundContainer backgroundImage={data.file.childImageSharp.gatsbyImageData.images.fallback.src}>
        <BackgroundInnerContainer>
          <Title>Marić Company d.o.o</Title>
          
          <SubtitleWrapper>
            <Subtitle>
              Naša djelatnost je proizvodnja visokokvalitetnih drvnih sortimenta (rezane građe). 
            </Subtitle>
          </SubtitleWrapper>
        </BackgroundInnerContainer>
      </BackgroundContainer>
    </CoverContainer>
  )
}

export default CoverSection
