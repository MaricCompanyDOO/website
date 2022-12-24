import { MapContainer } from "react-leaflet";
import { ColumnContainer, RowContainer } from "../../style/global-style";
import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";

export const StyledMapContainer = styled(MapContainer)`
  height: 100%;
  width: 100%;

  @media (max-width: ${breakpoints.tablet_m}px) {
    height: 100vh;
    width: 100%;
  }
`;
