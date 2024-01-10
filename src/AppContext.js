import React, { createContext, useState, useContext } from 'react';

// コンテキストの作成
export const AppContext = createContext();

// コンテキストプロバイダーの定義
export const AppProvider = ({ children }) => {
  // マップ関連の状態
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [favoritePlaces, setFavoritePlaces] = useState([]);

  // サイドバー関連の状態
  const [placeLists, setPlaceLists] = useState([]);

  // 地点検索機能
  const searchPlaces = (query) => {
    // 地点検索のロジック
  };

  // 現在地を更新
  const updateCurrentLocation = (location) => {
    setCurrentLocation(location);
  };

  // 選択された地点を更新
  const updateSelectedPlace = (place) => {
    setSelectedPlace(place);
  };

  // お気に入り地点の更新
  const updateFavoritePlaces = (place) => {
    setFavoritePlaces([...favoritePlaces, place]);
  };

  // リストの更新
  const updatePlaceLists = (list) => {
    setPlaceLists([...placeLists, list]);
  };

  // コンテキストに渡す値
  const contextValue = {
    currentLocation,
    searchResults,
    selectedPlace,
    favoritePlaces,
    placeLists,
    searchPlaces,
    updateCurrentLocation,
    updateSelectedPlace,
    updateFavoritePlaces,
    updatePlaceLists
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// コンテキストを使用するためのカスタムフック
export const useAppContext = () => useContext(AppContext);
