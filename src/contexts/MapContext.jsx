import React, { createContext, useState, useContext } from 'react';

// MapContext の作成
export const MapContext = createContext();

// MapContext プロバイダーの定義
export const MapProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  // 地点検索機能などの関数を定義
  // ...

  return (
    <MapContext.Provider value={{ currentLocation, setCurrentLocation, selectedPlace, setSelectedPlace, searchResults, setSearchResults }}>
      {children}
    </MapContext.Provider>
  );
};

// コンテキストを使用するためのカスタムフック
export const useMapContext = () => useContext(MapContext);
