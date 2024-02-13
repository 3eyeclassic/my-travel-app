import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Sidebar.css';
import { useSidebarContext } from '../../contexts/SidebarContext';
import { useMapContext } from '../../contexts/MapContext'; // MapContextからuseMapContextをインポート

const SidebarComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { savedPlaces } = useSidebarContext(); // savedPlacesを取得
  const { setCurrentLocation } = useMapContext(); // setCurrentLocationを取得

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // 地点をクリックした時の処理
  const handleLocationClick = (location) => {
    setCurrentLocation(location); // クリックされた地点をマップの中心に設定
  };

  return (
    <div className="sidebar">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        className="keyboard-arrow-icon"
        onClick={toggleDrawer(true)}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {savedPlaces.map((place, index) => (
            <ListItem button key={index} onClick={() => handleLocationClick(place.location)}>
                <ListItemText primary={place.name} secondary={place.address} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default SidebarComponent;
