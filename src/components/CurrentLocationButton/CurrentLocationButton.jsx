import React from 'react';
import { Button } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useMapContext } from '../../contexts/MapContext'; // このパスはプロジェクト構成に合わせて適宜調整してください
import './CurrentLocationButton.css';

const CurrentLocationButton = () => {
    // setCurrentLocation と setZoomLevel を MapContext から取得
    const { setCurrentLocation, setZoomLevel } = useMapContext();

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const newPos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                // 新しい位置とズームレベルを設定
                setCurrentLocation(newPos);
                setZoomLevel(15); // ズームレベルを15に設定
            }, (error) => {
                console.error('Error fetching the location', error);
            });
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    };

    return (
        <Button
            className="current-location-button"
            variant="contained"
            color="primary"
            startIcon={<MyLocationIcon />}
            onClick={getCurrentLocation}
        >
            
        </Button>
    );
};

export default CurrentLocationButton;
