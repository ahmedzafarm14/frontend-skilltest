import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";

const HamburgerMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSubMenuToggle = (menu) => {
    setOpenSubMenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">My Application</Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button onClick={() => handleSubMenuToggle("home")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
            {openSubMenu.home ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubMenu.home} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="Sub Item 1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Sub Item 2" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => handleSubMenuToggle("about")}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
            {openSubMenu.about ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubMenu.about} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="Sub Item 1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Sub Item 2" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => handleSubMenuToggle("settings")}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
            {openSubMenu.settings ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubMenu.settings} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="Sub Item 1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Sub Item 2" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
