import React from 'react';
import { MapProvider } from './contexts/MapContext';
import { SidebarProvider } from './contexts/SidebarContext';
import Map from './components/Map/Map';
import Sidebar from './components/Sidebar/Sidebar';
import SearchBox from './components/SearchBox/SearchBox';
import CurrentLocationButton from './components/CurrentLocationButton/CurrentLocationButton';

function App() {
  return (
    <SidebarProvider>
      <MapProvider>
        <SearchBox />
        <Map />
        <Sidebar />
        <CurrentLocationButton />
      </MapProvider>
    </SidebarProvider>
  );
}

export default App;
