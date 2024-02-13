import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [savedPlaces, setSavedPlaces] = useState([]);
  const [lists, setLists] = useState([]); // リスト名とそれに関連する地点を格納する新しい状態

  const addPlaceToSidebar = (place) => {
    setSavedPlaces((prevPlaces) => [...prevPlaces, place]);
  };

  const addNewList = (listName) => {
    setLists((prevLists) => [...prevLists, { name: listName, places: [] }]);
  };

  const addPlaceToList = (listName, place) => {
    setLists((prevLists) => 
      prevLists.map((list) => 
        list.name === listName ? { ...list, places: [...list.places, place] } : list
      )
    );
  };

  return (
    <SidebarContext.Provider value={{
      savedPlaces,
      lists,
      addPlaceToSidebar,
      addNewList,
      addPlaceToList,
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
