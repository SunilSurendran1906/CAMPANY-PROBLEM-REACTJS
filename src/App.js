import React from "react";
import Employees from "./components/Employees";
import DataFetching from "./components/DataFetching";

const DisplayAndCapitalize = ({ data }) => {
  const capitalize = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0) + word.slice(1))
      .join(" ")
      .toUpperCase();
  };

  return (
    <div>
      {Object.keys(data).map((key) => (
        <div key={key}>
          <strong>{key}:</strong> {capitalize(data[key])}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const ex = {
    name: "sesuraj",
    designation: "senior software Engineer",
    campany_name: "Book water Tech Pvt Ltd",
    city: "Chennai",
    Exp: "4+ Years",
  };

  return (
    <div>
      <h1>Employee</h1>
      <DisplayAndCapitalize data={ex} />
      <div>
        <Employees />
      </div>
      <div>
        <DataFetching />
      </div>
    </div>
  );
};

export default App;
