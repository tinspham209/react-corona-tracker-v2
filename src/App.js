import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@material-ui/core";
import { getCountriesData, getCountryData } from "./api";
import InfoBox from "./components/InfoBox/InfoBox";
import Map from "./components/Map/Map";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await getCountriesData());
    };

    fetchAPI();
  }, [setCountries]);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const countryData = await getCountryData(countryCode);
    setCountryInfo(countryData);
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem key="worldwide" value="worldwide">
                Worldwide
              </MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox title="Infected" cases={123} total={2000} />

          <InfoBox title="Recovered" cases={125} total={3000} />

          <InfoBox title="Deaths" cases={126} total={4000} />
        </div>
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Case by Country</h3>
          {/* Table */}
          <h3>Worldwide new cases</h3>
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
