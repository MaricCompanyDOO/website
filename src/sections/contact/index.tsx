import * as React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from 'leaflet';
import { ContactInnerWrapper, ContactItem, ContactItemWrapper, ContactWrapper, InfoText, InfoWrapper, MapWrapper } from "./contact.style";
import 'leaflet/dist/leaflet.css';
import { SectionSubheading } from "../..//style/global-style";
import { theme } from "../../style/theme";
import { CONTACT_INFORMATIONS } from "../../utils/content";

const createIcon = (url: string) => {
  return new L.Icon({
    iconUrl: url,
  });
};

const ContactSection: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query cntactImageApply {
      file(relativePath: { eq: "product_11.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 716, height: 533)
        }
      }
    }
  `);

  return (
    <ContactWrapper backgroundImage={data.file.childImageSharp.gatsbyImageData.images.fallback.src}>
      <ContactInnerWrapper>
        <MapWrapper>
          <MapContainer
            center={[44.490069807511944, 17.378451898547944]}
            zoom={17}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[44.490069807511944, 17.378451898547944]}
              icon={createIcon("https://icons.veryicon.com/48/System/Small%20%26%20Flat/map%20marker.png")}>
            </Marker>
          </MapContainer>
        </MapWrapper>

        <InfoWrapper>
          <SectionSubheading color={theme.colors.orange()}>
            Kontaktirajte nas
          </SectionSubheading>
          <InfoText>
            Ukoliko želite da dogovorimo saradnju, ili imate bilo kakvih pitanja za nas, budite slobodni da nas kontaktirate.
          </InfoText>

          {CONTACT_INFORMATIONS.map((contact, i) => (
            <ContactItemWrapper key={`${contact.text}${i}`}>
              <FontAwesomeIcon
                icon={contact.icon}
                color={theme.colors.white()}
                fontSize={18}
                style={{ marginTop: 4 }}
              />
              <ContactItem>
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
