import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DrawerMenu = (prop) => {
  const { toggleDrawer, open } = prop;

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        background: "rgba(202, 202, 202, 0.41)",
        backdropFilter: "blur(5px)",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "currentcolor",
              width: "100%",
            }}
          >
            <ListItemButton sx={{ width: "100%" }}>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link
            style={{
              textDecoration: "none",
              color: "currentcolor",
              width: "100%",
            }}
          >
            <ListItemButton sx={{ width: "100%" }}>
              <ListItemText>Elka</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default DrawerMenu;
