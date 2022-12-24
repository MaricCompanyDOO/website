import * as React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactInnerWrapper, ContactItem, ContactItemWrapper, ContactWrapper, InfoText, InfoWrapper, MapFallback, MapWrapper } from "./contact.style";
import { SectionSubheading } from "../..//style/global-style";
import { theme } from "../../style/theme";
import { CONTACT_INFORMATIONS } from "../../utils/content";

const Map = typeof window !== "undefined" ? React.lazy(() => import('../../components/map')) : null;

const ContactSection: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query cntactImageApply {
      file(relativePath: { eq: "map-screenshot.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1202, height: 1348)
        }
      }
    }
  `);

  return (
    <ContactWrapper>
      <ContactInnerWrapper>
        <MapWrapper>
          {!!Map ? (
            <Map />
          ) : (
            <MapFallback backgroundImage={data?.file?.childImageSharp?.gatsbyImageData?.images?.fallback?.src} />
          )}
        </MapWrapper>

        <InfoWrapper>
          <SectionSubheading color={theme.colors.orange()}>
            Kontaktirajte nas
          </SectionSubheading>
          <InfoText>
            Ukoliko želite da dogovorimo saradnju, ili imate bilo kakvih pitanja za nas, budite slobodni da nas kontaktirate.
          </InfoText>

          {CONTACT_INFORMATIONS.map((contact, i) => (
            <ContactItemWrapper
              key={`${contact.text}${i}`}
              clickable={!!contact.link}
              onClick={() => {
                if (!!contact.link) {
                  window?.open(contact.link, "_blank");
                }
              }}
            >
              <FontAwesomeIcon
                icon={contact.icon}
                color={theme.colors.white()}
                fontSize={18}
                style={{ marginTop: 4 }}
              />
              <ContactItem clickable={!!contact.link}>
                {contact.text}
              </ContactItem>
            </ContactItemWrapper>
          ))}
        </InfoWrapper>
      </ContactInnerWrapper>
    </ContactWrapper>
  )
};

export default ContactSection;
