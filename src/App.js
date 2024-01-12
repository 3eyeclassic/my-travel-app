import React from 'react';
import { MapProvider } from './contexts/MapContext';
import Map from './components/Map/Map';
import Sidebar from './components/Sidebar/Sidebar';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  return (
    <MapProvider>
      <SearchBox />
      <Map />
      <Sidebar />
    </MapProvider>
  );
}

export default App;
