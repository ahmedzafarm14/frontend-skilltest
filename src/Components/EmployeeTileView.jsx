import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import EmployeedPopUp from "./EmployeedPopUp.jsx";

const EmployeeTileView = ({ employees }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleTileClick = (employee) => {
    setSelectedEmployee(employee);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEmployee(null);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ padding: "20px" }}
        justifyContent="center"
      >
        {employees.map((employee) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={employee.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="h6">{employee.name}</Typography>
                <Typography color="textSecondary">
                  {employee.position}
                </Typography>
                <Typography>Email: {employee.email}</Typography>
                <Button
                  variant="contained"
                  onClick={() => handleTileClick(employee)}
                  fullWidth
                  sx={{ marginTop: "10px" }}
                >
                  View Details
                </Button>
                <Grid container spacing={1} style={{ marginTop: "10px" }}>
                  <Grid item xs={4}>
                    <Button variant="outlined" color="primary" fullWidth>
                      Edit
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="outlined" color="secondary" fullWidth>
                      Flag
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="outlined" color="error" fullWidth>
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pass the selected employee data and modal handlers */}
      <EmployeedPopUp
        employee={selectedEmployee}
        open={modalOpen}
        handleClose={handleCloseModal}
      />
    </>
  );
};

export default EmployeeTileView;
