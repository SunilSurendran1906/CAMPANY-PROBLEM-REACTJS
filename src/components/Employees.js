import React from "react";
import { useState } from "react";

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: "John Joesph",
      position: "Software Engineer",
      department: "Engineering",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Product Manager",
      department: "Product",
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "HR Manager",
      department: "Human Resources",
    },
    {
      id: 4,
      name: "Arun",
      position: "React developer ",
      department: "Developer",
    },
    {
      id: 5,
      name: "Surendran",
      position: "Teacher",
      department: "Eduction",
    },
    {
      id: 6,
      name: "Vijay",
      position: "Python Developer",
      department: "Developer",
    },
    {
      id: 7,
      name: "Suresh",
      position: "Sales Executive",
      department: "Marketing",
    },
    {
      id: 8,
      name: "Varun",
      position: "Full Stack Developer",
      department: "Developer",
    },
    {
      id: 9,
      name: "Sunil",
      position: "Full Stack Developer",
      department: "Developer",
    },
  ];

  const [Search, setSearch] = useState([]);
  const [FilterEmployees, setFilterEmployees] = useState(employees);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const filteredResults = employees.filter(
      (employee) =>
        employee.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        employee.position
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
    );

    setFilterEmployees(filteredResults);
  };

  return (
    <div>
      <h1>Employees Tables</h1>
      <input
        text="text"
        placeholder="search to name"
        value={Search}
        onChange={handleSearch}
      />
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {FilterEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
