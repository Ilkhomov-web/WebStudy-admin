import { Box } from "@mui/material";
import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

const GuiChart = () => {
  return (
    <Box>
      <Gauge
        value={75}
        startAngle={-110}
        endAngle={110}
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
            fill: "#fff",
            transform: "translate(0px, 0px)",
          },
        }}
        text={({ value, valueMax }) => `${value} / ${valueMax}`}
      />
    </Box>
  );
};

export default GuiChart;
