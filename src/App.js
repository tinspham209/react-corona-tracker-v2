import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { getCountriesData } from "./api";
import InfoBox from "./components/InfoBox/InfoBox";

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

      <div className="app__stats">
        <InfoBox title="Infected" cases={123} total={2000} />

        <InfoBox title="Recovered" cases={125} total={3000} />

        <InfoBox title="Deaths" cases={126} total={4000} />

        {/* InfoBox cases*/}
        {/* InfoBox recoveries*/}
        {/* InfoBox death*/}
      </div>

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
