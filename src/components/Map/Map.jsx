import React from 'react';
import { GoogleMap } from '@react-google-maps/api';
import './Map.css';

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
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      {/* マーカーなどの子要素をここに配置 */}
    </GoogleMap>
  );
}

export default Map;
