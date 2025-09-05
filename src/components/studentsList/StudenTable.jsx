import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(94, 94, 94, 0.47)",
    backdropFilter: "blur(5px)",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(94, 94, 94, 0.47)",
    color: "white",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(94, 94, 94, 0.47)",
    backdropFilter: "blur(5px)",
  },
  "&:last-child td, &:last-child th": {
    backdropFilter: "blur(5px)",
    border: 0,
    backgroundColor: "rgba(94, 94, 94, 0.47)",
  },
}));

const Students = (prop) => {
  const { students } = prop;
  return (
    <TableContainer component={Paper} sx={{ background: "transparent" }}>
      <Table sx={{ minWidth: 700 }} aria-label="students table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Rasm</StyledTableCell>
            <StyledTableCell>Ism</StyledTableCell>
            <StyledTableCell align="right">Umumiy Ball</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <StyledTableRow key={student.id}>
              <StyledTableCell>
                <img
                  src={student.img}
                  alt={student.name}
                  style={{ width: 50, height: 50, borderRadius: "50%" }}
                />
              </StyledTableCell>
              <StyledTableCell>{student.name}</StyledTableCell>
              <StyledTableCell align="right">
                {student.total_grade}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Students;
