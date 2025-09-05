import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { students } from "../../data/studentsData";

const PieCharts = () => {
  return (
    <PieChart
      series={[
        {
          data: students.map((student) => ({
            id: student.id,
            value: student.total_grade,
            label: student.name,
          })),
        },
      ]}
      width={400}
      height={300}
      sx={{
        "& .MuiChartsLegend-root": {
          color: "#fff",
          fontSize: "18px",
        },
      }}
    />
  );
};

export default PieCharts;
