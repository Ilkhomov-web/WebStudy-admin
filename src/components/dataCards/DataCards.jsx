// DataCards.jsx
import { Grid } from "@mui/material";
import React from "react";
import DataCard from "../DataCard";
import { students } from "../../data/studentsData";

const DataCards = () => {
  // Eng baland ball olgan studentni topamiz
  const topStudent = students.reduce((max, student) =>
    student.total_grade > max.total_grade ? student : max
  );

  return (
    <Grid container spacing={2} sx={{ marginTop: "30px" }}>
      <Grid size={{ md: 6, sm: 12, xs: 12 }}>
        <DataCard title="Total Students" value={students.length} />
      </Grid>
      <Grid size={{ md: 6, sm: 12, xs: 12 }}>
        <DataCard
          title="Top Student"
          value={`${topStudent.name} ${topStudent.total_grade} ball`}
        />
      </Grid>
    </Grid>
  );
};

export default DataCards;
