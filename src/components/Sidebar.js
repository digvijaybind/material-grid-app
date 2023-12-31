import {Home} from "@material-ui/icons";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      bgcolor="orange"
      flex={2}
      p={2}
      sx={{display: {xs: "none", sm: "block"}}}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
export default Sidebar;
