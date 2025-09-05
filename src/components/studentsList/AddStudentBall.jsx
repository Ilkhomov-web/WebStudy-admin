import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { students } from "../../data/studentsData";

const AddStudentBall = (prop) => {
  const { modalBallOpen, style, handleBallClose } = prop;
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Modal
      open={modalBallOpen}
      onClose={handleBallClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {" "}
        <Typography variant="h4">Add Stundets Ball</Typography>{" "}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Student</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {students.map((stu) => (
              <MenuItem key={stu.id} value={stu.name}>
                {stu.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField fullWidth label={"Ball"} type="number" />
        <Button variant="contained">Add Ball</Button>
      </Box>
    </Modal>
  );
};

export default AddStudentBall;
