import React, { useContext, useEffect, useRef } from 'react';
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import { MapContext } from '../../contexts/MapContext';

const containerStyle = {
    width: "100%",
    height: "100vh"
};

const center = {
    lat: 35.681236,
    lng: 139.767125
};

const Map = () => {
    const { currentLocation, searchedPlaces } = useContext(MapContext);
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current && currentLocation) {
            mapRef.current.panTo(currentLocation);
            mapRef.current.setZoom(15); // ズームレベルを15に設定
        }
    }, [currentLocation]);

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentLocation || center}
            zoom={15}
            onLoad={map => (mapRef.current = map)} // マップの参照を保存
        >
            {searchedPlaces.map((place, index) => (
                <Marker key={index} position={place.location} label={place.name}>
                    <InfoWindow position={place.location}>
                        <div>
                            <h3>{place.name}</h3>
                            <p>住所: {place.address}</p>
                            <p>評価: {place.rating}</p>
                            {place.photos && place.photos.map((photoUrl, photoIndex) => (
                                <img key={photoIndex} src={photoUrl} alt={`地点画像 ${photoIndex + 1}`} style={{ width: '100px', height: '100px', margin: '5px' }} />
                            ))}
                        </div>
                    </InfoWindow>
                </Marker>
            ))}
        </GoogleMap>
    );
}

export default Map;
