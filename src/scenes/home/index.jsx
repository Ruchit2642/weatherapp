
import React, { useState } from "react";
import { TextField, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import Weather from "../weatherInfo";

const Home = () => {

 

  const [city, setCity] = useState("");
  const [showWeather, setShowWeather] = useState(false);

  const handleSearch = () => {
    setShowWeather(true);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <TextField
        value={city}
        onChange={(e) => setCity(e.target.value)}
        label="Enter city"
        variant="outlined"
        style={{ marginRight: "10px" }}
      />
      <Button
  variant="contained"
  onClick={handleSearch}
  style={{
    backgroundColor: "#FF5733",
    color: "white",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease-in-out",
  }}
>
  Search
</Button>
      {showWeather && <Weather city={city} />}
    </div>
  );
};

export default Home;