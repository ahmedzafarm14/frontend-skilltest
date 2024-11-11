import React from "react";
import { AppBar, Toolbar, Tab, Tabs } from "@mui/material";

const HorizontalMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs value={value} onChange={handleChange} textColor="inherit">
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Services" />
          <Tab label="Contact" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalMenu;
