import React, { createContext, useState, useContext } from 'react';

// MapContext の作成
export const MapContext = createContext();

// MapContext プロバイダーの定義
export const MapProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [markerPosition, setMarkerPosition] = useState(null); // マーカー位置の状態を追加
  const [searchedPlaces, setSearchedPlaces] = useState([]); // 検索地点の配列の状態を追加


  return (
    <MapContext.Provider value={{
      currentLocation, setCurrentLocation,
      selectedPlace, setSelectedPlace,
      searchResults, setSearchResults,
      markerPosition, setMarkerPosition, // マーカー位置の状態を提供
      searchedPlaces, setSearchedPlaces // 検索地点の配列とその更新関数を提供
    }}>
      {children}
    </MapContext.Provider>
  );
};

// コンテキストを使用するためのカスタムフック
export const useMapContext = () => useContext(MapContext);
