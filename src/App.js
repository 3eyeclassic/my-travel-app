import React, { useState } from 'react';
import { MapProvider } from './contexts/MapContext';
import Map from './components/Map/Map';
import Sidebar from './components/Sidebar/Sidebar';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  const [mapCenter, setMapCenter] = useState({ lat: -34.397, lng: 150.644 });

  const handleLocationSelect = (location) => {
    setMapCenter(location);
  };

  return (
    <MapProvider>
      <SearchBox />
      <Map />
      <Sidebar />
    </MapProvider>
  );
}

export default App;
