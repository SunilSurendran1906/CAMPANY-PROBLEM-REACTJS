import React, { useState } from "react";

function DataFetching() {
  const [pincode, setPincode] = useState("");
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setPincode(e.target.value);
  };

  const fetchData = () => {
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div>
      <h4>User Data Fetching by Pincode</h4>
      <div>
        <input
          type="number"
          placeholder="Enter pincode"
          value={pincode}
          onChange={handleChange}
        />
        <button onClick={fetchData}>Fetch Data</button>
      </div>
      {userData && (
        <div>
          <h2>User Data</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default DataFetching;
