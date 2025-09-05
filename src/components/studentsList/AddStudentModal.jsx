import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Modal,
} from "@mui/material";
import React, { useState } from "react";

const AddStudentModal = (prop) => {
  const { modalOpen, handleClose, style } = prop;

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // rasm preview chiqadi
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h4">Create Student</Typography>

        <TextField fullWidth label="Name" type="text" />
        <TextField fullWidth label="Age" type="number" />

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button variant="contained" component="label">
            Upload Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
          </Button>

          {preview && (
            <Avatar
              src={preview}
              alt="Uploaded preview"
              sx={{ width: 56, height: 56, margin: "10px 0px" }}
            />
          )}
        </Box>
        <Button variant="contained">Add</Button>
      </Box>
    </Modal>
  );
};

export default AddStudentModal;
