import * as React from "react";
import { TileLayer, Marker } from "react-leaflet";
import L from 'leaflet';
import { StyledMapContainer } from "./map.style";
import 'leaflet/dist/leaflet.css';

const createIcon = (url: string) => {
  return new L.Icon({
    iconUrl: url,
  });
};

const Map: React.FC<{}> = () => (
  <StyledMapContainer
    center={[44.490069807511944, 17.378451898547944]}
    zoom={17}
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker
      position={[44.490069807511944, 17.378451898547944]}
      icon={createIcon("https://icons.veryicon.com/48/System/Small%20%26%20Flat/map%20marker.png")}>
    </Marker>
  </StyledMapContainer>
);

export default Map;
