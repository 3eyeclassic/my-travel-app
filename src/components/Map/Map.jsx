import React, { useContext, useEffect, useRef } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { MapContext } from '../../contexts/MapContext';

const containerStyle = {
    width: "100%",
    height: "100vh"
};

const center = {
    lat: 35.681236,
    lng: 139.767125
};

const Map = () => {
    const { currentLocation, markerPosition } = useContext(MapContext);
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    // 中心位置とズームレベルを更新
  useEffect(() => {
    if (mapRef.current && currentLocation) {
      mapRef.current.panTo(currentLocation);
      mapRef.current.setZoom(15); // ズームレベルを15に設定
    }
  }, [currentLocation]);

  // マーカーの設定
  useEffect(() => {
    if (mapRef.current && markerPosition) {
      if (!markerRef.current) {
        markerRef.current = new window.google.maps.Marker({
          position: markerPosition,
          map: mapRef.current,
          label: "📍"
        });
      } else {
        markerRef.current.setPosition(markerPosition);
      }
    }
  }, [markerPosition]);

    return (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation || center}
        zoom={15}
        onLoad={map => mapRef.current = map} // マップの参照を保存
      >
        {/* 他の子要素 */}
      </GoogleMap>
    );
  }

export default Map;
