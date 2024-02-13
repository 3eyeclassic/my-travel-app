import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import './Sidebar.css';
import { useSidebarContext } from '../../contexts/SidebarContext';
import { useMapContext } from '../../contexts/MapContext'; // MapContextからuseMapContextをインポート
import ListNameDialog from '../ListNameDialog/ListNameDialog';

const SidebarComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { savedPlaces, addNewList } = useSidebarContext();
  const { setCurrentLocation } = useMapContext(); // useMapContextからsetCurrentLocationを取得

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSaveListName = (listName) => {
    addNewList(listName);
    setDialogOpen(false);
  };

  // リストアイテムをクリックしたときの処理
  const handleListItemClick = (location) => {
    setCurrentLocation(location); // クリックされた地点の位置をマップの中心に設定
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
        <Button onClick={handleDialogOpen}>リストをまとめる</Button>
        <List>
          {savedPlaces.map((place, index) => (
            <ListItem button key={index} onClick={() => handleListItemClick(place.location)}>
              <ListItemText primary={place.name} secondary={place.address} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <ListNameDialog open={dialogOpen} onClose={handleDialogClose} onSave={handleSaveListName} />
    </div>
  );
};

export default SidebarComponent;
