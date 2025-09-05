import { Grid, Typography } from "@mui/material";
import React from "react";
import WeekStudents from "./weekStundet/WeekStudents";
import { students } from "../data/studentsData";

const WeekCards = () => {
  const topStudent = students.reduce((prev, current) =>
    current.total_grade > prev.total_grade ? current : prev
  );

  return (
    <Grid container spacing={2}>
      <Grid
        size={{ md: 8, sm: 12, xs: 12 }}
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: 2,
          background: "rgba(94, 94, 94, 0.47)",
          backdropFilter: "blur(5px)",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color="white">
          Haftaning Eng Yaxshi Studenti
        </Typography>
      </Grid>
      <Grid
        size={{ md: 4, sm: 12, xs: 12 }}
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: 2,
          background: "rgba(94, 94, 94, 0.47)",
          backdropFilter: "blur(5px)",
          marginTop: "20px",
        }}
      >
        <WeekStudents topStudent={topStudent} />
      </Grid>
    </Grid>
  );
};

export default WeekCards;
