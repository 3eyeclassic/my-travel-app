import React, { useState, useContext, useEffect } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { TextField, Autocomplete } from '@mui/material';
import { MapContext } from '../../contexts/MapContext';
import './SearchBox.css';

const SearchBox = () => {
  const [address, setAddress] = useState('');
  // MapContext から setCurrentLocation, setMarkerPosition, setSearchedPlaces を取得
  const { setCurrentLocation, setMarkerPosition, setSearchedPlaces } = useContext(MapContext);

  // Google Maps JavaScript API の Places サービスを使用するための ref
  const placesServiceRef = React.useRef();

  useEffect(() => {
    // Google Maps Places サービスのインスタンスを作成
    if (window.google && !placesServiceRef.current) {
      placesServiceRef.current = new window.google.maps.places.PlacesService(document.createElement('div'));
    }
  }, []);

  const handleSelect = async (value) => {
    try {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setCurrentLocation(latLng);
      setMarkerPosition(latLng);

      // `results[0].place_id` から詳細情報を取得
      if (results[0].place_id && placesServiceRef.current) {
        placesServiceRef.current.getDetails({ placeId: results[0].place_id }, (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            // 地点の詳細情報を取得して state に保存
            setSearchedPlaces(prevPlaces => [...prevPlaces, {
              name: place.name, // 地点名
              address: place.formatted_address, // 住所
              rating: place.rating, // 評価
              photos: place.photos ? place.photos.map(photo => photo.getUrl()) : [], // 写真
              location: latLng // 緯度経度
            }]);
          }
        });
      }
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
