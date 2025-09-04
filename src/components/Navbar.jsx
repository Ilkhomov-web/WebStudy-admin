import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Navbar = (prop) => {
  const { toggleDrawer, open } = prop;

  return (
    <Box
      sx={{
        background: "rgba(94, 94, 94, 0.41)",
        padding: "30px 0px",
        backdropFilter: "blur(5px)",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            size={{ md: 3, sm: 3, xs: 3 }}
            sx={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <Button onClick={toggleDrawer(true)}>
              {open ? (
                <MenuOpenIcon sx={{ color: "white", fontSize: "30px" }} />
              ) : (
                <MenuIcon sx={{ color: "white", fontSize: "30px" }} />
              )}
            </Button>
            <Typography variant="h4" color="white">
              WebStudy
            </Typography>
          </Grid>
          <Grid size={{ md: 3, sm: 3, xs: 3 }}>s</Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
