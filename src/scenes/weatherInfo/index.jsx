import axios from "axios";
import { useState, useEffect } from "react";
import {
  Box,
  Button,

  IconButton,
  Typography,
 
} from "@mui/material";
import { tokens } from "../../theme";


const Weather = ({ city }) => {

  const [data, setData] = useState(null);
  const [temp, setTemp] = useState("celsius");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=e3458d364d93424bbaf54451232108&q=${city}&aqi=no`
      );
      const fetchedData = response.data;
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  console.log(data);
  if (!data) {
    return null;
  }

  const temperatureButtons = [
    { label: "Celsius", unit: "celsius" },
    { label: "Fahrenheit", unit: "fahrenheit" },
  ];

  const basicBox = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box
      sx={{
        flexDirection: "column",
        marginTop:"8rem"
      }}
      style={basicBox}
    >
      <Typography variant="h1">{data.location.name}</Typography>
      <Box style={basicBox}>
        <IconButton>
          <img
            src={data.current.condition.icon}
            alt="Weather icon"
            width={100}
          />
        </IconButton>
        <Typography
  variant="h3"
  sx={{
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginTop: "1rem",
    color: "",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  }}
>
  {temp === "celsius" ? (
    <span>
      {data.current.feelslike_c} °C{" "}
      <span style={{ fontSize: "1rem", fontWeight: "normal" }}>
        (feels like)
      </span>
    </span>
  ) : temp === "fahrenheit" ? (
    <span>
      {data.current.feelslike_f} °F{" "}
      <span style={{ fontSize: "1rem", fontWeight: "normal" }}>
        (feels like)
      </span>
    </span>
  ) : null}
</Typography>

      </Box>
      <Typography variant="h3">{data.current.condition.text}</Typography>
      <br />
      <Box>
        {temperatureButtons.map(({ label, unit }) => (
          <Button key={unit} onClick={() => setTemp(unit)}>
            {label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Weather;
