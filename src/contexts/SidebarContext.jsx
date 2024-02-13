import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [savedPlaces, setSavedPlaces] = useState([]);

  // 関数名をそのまま提供するように変更
  const addPlaceToSidebar = (place) => {
    setSavedPlaces((prevPlaces) => [...prevPlaces, place]);
  };

  return (
    // 提供する値に関数名をそのまま使用
    <SidebarContext.Provider value={{ savedPlaces, addPlaceToSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// コンテキストを使用するためのカスタムフック
export const useSidebarContext = () => useContext(SidebarContext);
