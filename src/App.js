import React, { useState, useEffect } from "react";
import HamburgerMenu from "./Components/HamburgerMenu.jsx";
import HorizontalMenu from "./Components/HorizontalMenu.jsx";
import EmployeeGrid from "./Components/EmployeeGrid.jsx";
import EmployeeTileView from "./Components/EmployeeTileView.jsx";
import { Button } from "@mui/material";

const App = () => {
  const [viewMode, setViewMode] = useState("grid"); // State to toggle between views
  const [employees, setEmployees] = useState([]);

  const toggleView = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "tile" : "grid"));
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      // Map the data
      const mappedData = data.map((user) => ({
        id: user.id,
        name: user.name,
        position: "Position TBD",
        email: user.email,
        phone: user.phone,
        department: "Department TBD",
        location: user.address.city,
        hireDate: "2023-01-01",
        salary: "$50,000",
        status: "Active",
      }));
      setEmployees(mappedData);
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <HamburgerMenu />
      <HorizontalMenu />

      <div style={{ padding: "10px", textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={toggleView}
          sx={{ margin: 2 }}
        >
          Switch to {viewMode === "grid" ? "Tile View" : "Grid View"}
        </Button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {viewMode === "grid" ? (
          <EmployeeGrid employees={employees} />
        ) : (
          <EmployeeTileView employees={employees} />
        )}
      </div>
    </div>
  );
};

export default App;
