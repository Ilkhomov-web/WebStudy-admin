import { Grid, Typography } from "@mui/material";
import React from "react";
import PieCharts from "./charts/PieCharts";
import GuiChart from "./charts/GuiChart";

const Charts = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 2,
        background: "rgba(94, 94, 94, 0.47)",
        backdropFilter: "blur(5px)",
        marginTop: "20px",
      }}
    >
      <Grid size={{ md: 6, sm: 12, xs: 12 }} sx={{}}>
        <PieCharts />
      </Grid>
      <Grid
        size={{ md: 6, sm: 12, xs: 12 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GuiChart />
        <Typography variant="h4" color="white">
          Learning Speed
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Charts;
