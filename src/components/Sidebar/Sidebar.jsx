import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Sidebar.css';

const SidebarComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        className="keyboard-arrow-icon" // スタイルを適用
        onClick={toggleDrawer(true)}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List >
          {/* リスト項目 */}
            <ListItem button>
                <ListItemText primary="地点1" />
            </ListItem>
            {/* 他のリスト項目 */}
        </List>
      </Drawer>
    </div>
  );
}

export default SidebarComponent;
