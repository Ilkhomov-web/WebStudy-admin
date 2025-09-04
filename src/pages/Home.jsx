import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import DrawerMenu from "../components/DrawerMenu";
import DataCards from "../components/dataCards/DataCards";
import Charts from "../components/Charts";

const Home = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Navbar toggleDrawer={toggleDrawer} open={open} />
      <DrawerMenu open={open} toggleDrawer={toggleDrawer} />
      <Container maxWidth={"lg"}>
        <DataCards />
        <Charts />
      </Container>
    </Box>
  );
};

export default Home;
