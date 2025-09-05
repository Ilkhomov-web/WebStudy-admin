import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DrawerMenu from "../components/DrawerMenu";
import { students } from "../data/studentsData";
import Students from "../components/studentsList/StudenTable";
import { Add } from "@mui/icons-material";
import AddStudentModal from "../components/studentsList/AddStudentModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StudentList = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Box>
      <Navbar toggleDrawer={toggleDrawer} open={open} />
      <DrawerMenu open={open} toggleDrawer={toggleDrawer} />
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: 2,
            background: "rgba(94, 94, 94, 0.47)",
            backdropFilter: "blur(5px)",
            margin: "20px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" color="white">
            Students - {students.length}
          </Typography>
          <Button variant="contained" onClick={handleOpen}>
            Add Student
          </Button>
        </Box>

        <Students students={students} />
        <AddStudentModal
          style={style}
          modalOpen={modalOpen}
          handleClose={handleClose}
        />
      </Container>
    </Box>
  );
};

export default StudentList;
