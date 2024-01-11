import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Map.css'

const containerStyle = {
    width: "100%",
    height: "100vh"
};

const center = {
    lat: 35.681236,
    lng: 139.767125
};

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBbSj9jLqzb_hASwExC-BO9nVHeTKPVW-8"
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        {/* マーカーなどの子要素をここに配置 */}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
