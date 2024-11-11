import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

const EmployeeGrid = ({ employees }) => {
  return (
    <Grid
      container
      spacing={3}
      style={{ padding: "20px" }}
      justifyContent="center"
    >
      {employees.map((employee) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={employee.id}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {employee.name}
              </Typography>
              <Typography color="textSecondary">{employee.position}</Typography>
              <Box mt={2}>
                <Typography>Email: {employee.email}</Typography>
                <Typography>Phone: {employee.phone}</Typography>
                <Typography>Department: {employee.department}</Typography>
                <Typography>Location: {employee.location}</Typography>
                <Typography>Hire Date: {employee.hireDate}</Typography>
                <Typography>Salary: {employee.salary}</Typography>
                <Typography>Status: {employee.status}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EmployeeGrid;
