// DataCard.jsx
import { Box, Typography } from "@mui/material";
import React from "react";

const DataCard = (prop) => {
  const { title, value } = prop;
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 2,
        background: "rgba(94, 94, 94, 0.47)",
        backdropFilter: "blur(5px)",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
        {title}
      </Typography>
      <Typography variant="h4" color="white">
        {value}
      </Typography>
    </Box>
  );
};

export default DataCard;
