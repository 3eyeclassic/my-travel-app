import React, { useContext } from 'react'; // useContext をインポート
import { GoogleMap } from '@react-google-maps/api';
import { MapContext } from '../../contexts/MapContext';
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
    const { currentLocation } = useContext(MapContext); // MapContext から現在の地点を取得
  
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation || { lat: 35.681236, lng: 139.767125 }} // 現在の地点があればそれを中心に、なければデフォルトの値を使用
        zoom={15}
      >
        {/* マーカーなどの子要素をここに配置 */}
      </GoogleMap>
    );
  }

export default Map;
