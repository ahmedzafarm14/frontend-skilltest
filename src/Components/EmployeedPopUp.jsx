import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const EmployeedPopUp = ({ employee, open, handleClose }) => {
  if (!employee) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          {employee.name}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>Position:</strong> {employee.position}
        </Typography>
        <Typography>
          <strong>Email:</strong> {employee.email}
        </Typography>
        <Typography>
          <strong>Phone:</strong> {employee.phone}
        </Typography>
        <Typography>
          <strong>Department:</strong> {employee.department}
        </Typography>
        <Typography>
          <strong>Location:</strong> {employee.location}
        </Typography>
        <Typography>
          <strong>Hire Date:</strong> {employee.hireDate}
        </Typography>
        <Typography>
          <strong>Salary:</strong> {employee.salary}
        </Typography>
        <Typography>
          <strong>Status:</strong> {employee.status}
        </Typography>
        <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default EmployeedPopUp;
