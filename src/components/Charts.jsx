import { Grid } from "@mui/material";
import React from "react";
import PieCharts from "./dataCards/PieCharts";

const Charts = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ md: 12, sm: 3, xs: 3 }}>
        <PieCharts />
      </Grid>
      <Grid size={{ md: 12, sm: 3, xs: 3 }}></Grid>
    </Grid>
  );
};

export default Charts;
