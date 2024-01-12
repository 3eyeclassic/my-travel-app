import React, { createContext, useState, useContext } from 'react';

// MapContext の作成
export const MapContext = createContext();

// MapContext プロバイダーの定義
export const MapProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  // 地点を検索して結果を設定する関数
  const searchPlaces = async (searchQuery) => {
    // Google Places API を使って地点を検索するロジックをここに実装
    // 検索結果を setSearchResults で設定
  };

  // 選択された地点を設定する関数
  const selectPlace = (place) => {
    setSelectedPlace(place);
    // 必要に応じて、選択された地点の座標で currentLocation を更新
    setCurrentLocation(place.location);
  };

  return (
    <MapContext.Provider value={{ 
      currentLocation, setCurrentLocation,
      selectedPlace, setSelectedPlace,
      searchResults, setSearchResults,
      searchPlaces, selectPlace
    }}>
      {children}
    </MapContext.Provider>
  );
};

// コンテキストを使用するためのカスタムフック
export const useMapContext = () => useContext(MapContext);
