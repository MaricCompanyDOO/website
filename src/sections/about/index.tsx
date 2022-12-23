import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { AboutImage, AboutInnerWrapper, AboutRightRow, AboutSectionCheckContainer, AboutSectionCheckItem, AboutSectionSubheading, AboutWrapper } from "./about.style"
import { ABOUT_PARAGRAPHS } from "../../utils/content";
import { theme } from "../../style/theme";
import SectionHeading from "../../components/section-heading";
import { SectionSubheading } from "../../style/global-style";

const AboutSection: React.FC<{}> = () => {

  const data = useStaticQuery(graphql`
    query companyImageApply {
      file(relativePath: { eq: "company.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 716, height: 533)
        }
      }
    }
  `);

  return (
    <AboutWrapper>
      <AboutInnerWrapper gridGap={32}>
        <AboutImage backgroundImage={data?.file?.childImageSharp?.gatsbyImageData?.images?.fallback?.src} />
      
        <AboutRightRow>
          <SectionHeading title="O nama" />
          <SectionSubheading>
            Mi smo firma koja najveći deo pažnje daje kvalitetu
          </SectionSubheading>
          <AboutSectionSubheading>
            Marić Company d.o.o. je firma osnovana 2005. godine. Od tada pa sve do danas, kvalitet proizvoda nam je ostao iznad svega.
          </AboutSectionSubheading>
          {ABOUT_PARAGRAPHS.map((paragraph, i) => (
            <AboutSectionCheckContainer gridGap={8} key={`${paragraph}${i}`}>
              <FontAwesomeIcon
                icon={faCheck}
                color={theme.colors.orange()}
                fontSize={16}
                style={{ marginTop: 4 }}
              />
              <AboutSectionCheckItem>{paragraph}</AboutSectionCheckItem>
            </AboutSectionCheckContainer>
          ))}
        </AboutRightRow>
      </AboutInnerWrapper>
    </AboutWrapper>
  )
}

export default AboutSection
