import React, {useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "../css/mapComponent.css";

// Configure marker icons for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = ({ parkings, center }) => {
  const defaultPosition = [48.8566, 2.3522]; // Default location: Paris

  const ChangeView = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      if (center && center[0] !== undefined && center[1] !== undefined) {
        map.setView(center, map.getZoom());
      }
    }, [center, map]);
    return null;
  };

  return (
    <div className="map-container">
      <MapContainer center={defaultPosition} zoom={12} style={{ height: "100%", width: "100%" }}>
      <ChangeView center={[center.latitude, center.longitude]} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {parkings.map((parking) =>
  parking.latitude !== undefined && parking.longitude !== undefined ? (
    <Marker key={parking.id || `${parking.latitude}-${parking.longitude}`} position={[parking.latitude, parking.longitude]}>
      <Popup>
        <strong>{parking.name}</strong>
        <br />
        {parking.address}
      </Popup>
    </Marker>
  ) : null
)}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
