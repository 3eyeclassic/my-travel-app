import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Sidebar.css';
// useSidebarContextをインポートする
import { useSidebarContext } from '../../contexts/SidebarContext';

const SidebarComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  // useSidebarContextを使用してsavedPlacesを取得
  const { savedPlaces } = useSidebarContext();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
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
            <ListItem button key={index}>
                <ListItemText primary={place.name} secondary={place.address} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default SidebarComponent;
