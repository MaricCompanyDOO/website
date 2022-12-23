import { MapContainer } from "react-leaflet";
import { ColumnContainer, RowContainer } from "../../style/global-style";
import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";

export const ContactWrapper = styled(ColumnContainer)<{ backgroundImage: string }>`
  height: calc(100vh - 84px - 75px);
  padding-top: 42px;
  padding-bottom: 42px;
  background: ${({ theme }) => theme.colors.darkGray()};

  @media (max-width: ${breakpoints.tablet_m}px) {
    min-height: calc(100vh - 84px - 75px);
    height: auto;
  }
`;

export const ContactInnerWrapper = styled(RowContainer)`
  height: 100%;
  width: 1088px;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop_s}px) {
    width: 812px;
  }

  @media (max-width: ${breakpoints.tablet_l}px) {    
    width: calc(100% - 24 * 2px);
  }

  @media (max-width: ${breakpoints.tablet_m}px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    width: calc(100% - 16 * 2px);
  }
`;

export const StyledMapContainer = styled(MapContainer)`
  height: 100%;
  width: 100%;

  @media (max-width: ${breakpoints.tablet_m}px) {
    height: 100vh;
    width: 100%;
  }
`;

export const MapWrapper = styled(ColumnContainer)`
  height: 100%;
  width: 50%;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet_m}px) {
    width: 100%;
  }
`;

export const InfoWrapper = styled(ColumnContainer)`
  align-items: flex-start;
  max-width: 360px;
`;

export const InfoText = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white()};
`;

export const ContactItemWrapper = styled(RowContainer)`
  max-width: 320px;
`;

export const ContactItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white()};
`;
