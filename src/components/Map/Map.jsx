import React, { useContext, useEffect, useRef } from 'react';
import { GoogleMap, InfoWindow } from '@react-google-maps/api';
import { MapContext } from '../../contexts/MapContext';
import { useSidebarContext } from '../../contexts/SidebarContext'; // SidebarContext のカスタムフックをインポート
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const containerStyle = {
    width: '100%',
    height: '100vh',
};

const center = {
    lat: 35.681236,
    lng: 139.767125,
};

const Map = () => {
    const { currentLocation, searchedPlaces, zoomLevel } = useContext(MapContext);
    const { addPlaceToSidebar } = useSidebarContext(); // SidebarContext から addPlaceToSidebar 関数を取得
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setZoom(zoomLevel);
        }
    }, [zoomLevel]);

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentLocation || center}
            zoom={zoomLevel}
            onLoad={(map) => (mapRef.current = map)}
        >
            {searchedPlaces.map((place, index) => (
                <InfoWindow key={index} position={place.location}>
                    <div>
                        <h3>{place.name}</h3>
                        <p>住所: {place.address}</p>
                        <p>評価: {place.rating}</p>
                        {place.photos && (
                            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                                {place.photos.map((photoUrl, photoIndex) => (
                                    <ImageListItem key={photoIndex}>
                                        <img src={photoUrl} alt={`地点画像 ${photoIndex + 1}`} loading="lazy" />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        )}
                        <button onClick={() => addPlaceToSidebar(place)}>この場所を保存</button>
                    </div>
                </InfoWindow>
            ))}
        </GoogleMap>
    );
};

export default Map;
