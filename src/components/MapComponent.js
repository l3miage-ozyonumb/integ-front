import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

  return (
    <div className="map-container">
      <MapContainer center={center && center.latitude && center.longitude ? [center.latitude, center.longitude] : [48.8566, 2.3522]}  zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {parkings.map((parking, index) => (
          <Marker key={index} position={[parking.latitude, parking.longitude]}>
            <Popup>
              <strong>{parking.name}</strong>
              <br />
              {parking.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
