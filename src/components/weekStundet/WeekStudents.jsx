import { Box, Typography } from "@mui/material";
import React from "react";

const WeekStudents = (prop) => {
  const { topStudent } = prop;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component={"img"}
        src={topStudent.img}
        sx={{ width: "150px", borderRadius: "50%" }}
      ></Box>
      <Typography fontSize={"28px"} color={"white"}>
        {topStudent.name}
      </Typography>
      <Typography fontSize={"28px"} color={"white"}>
        {topStudent.total_grade}ball
      </Typography>
    </Box>
  );
};

export default WeekStudents;
