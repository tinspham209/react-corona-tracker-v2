import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { getCountriesData } from "./api";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await getCountriesData());
    };

    fetchAPI();
  }, [setCountries]);
  console.log("countries", countries);

  const onCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="app">
      {/* Header */}
      {/* Title + Select input dropdown field */}

      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem key="worldwide" value="worldwide">
              Worldwide
            </MenuItem>
            {countries.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
