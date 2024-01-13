import React, { useState, useContext } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { TextField, Autocomplete } from '@mui/material';
import { MapContext } from '../../contexts/MapContext';
import './SearchBox.css';

const SearchBox = () => {
  const [address, setAddress] = useState('');
  // MapContext から setCurrentLocation と setMarkerPosition を取得
  const { setCurrentLocation, setMarkerPosition } = useContext(MapContext);

  const handleSelect = async (value) => {
    try {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);
      setCurrentLocation(latLng); // 地図の中心を更新
      setMarkerPosition(latLng); // マーカーの位置を更新
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="searchBoxContainer">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, loading }) => (
          <Autocomplete
            freeSolo
            inputValue={address}
            onInputChange={(_, newInputValue) => setAddress(newInputValue)}
            options={suggestions.map(suggestion => suggestion.description)}
            renderInput={(params) => (
              <TextField
                {...params}
                {...getInputProps({ placeholder: '地点を検索' })}
                variant="outlined"
                fullWidth
              />
            )}
          />
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default SearchBox;
