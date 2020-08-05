import {
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  getCountriesData,
  getCountryData,
  getTableData,
  getWorldwideData,
} from "./api";

import "./App.css";
import InfoBox from "./components/InfoBox/InfoBox";
import Map from "./components/Map/Map";
import Table from "./components/Table/Table";
import { sortData } from "./shared/util";
import LineGraph from "./components/LineGraph/LineGraph";
import "leaflet/dist/leaflet.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 14.0583, lng: 108.2772 });
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    const getAllData = async () => {
      setCountryInfo(await getWorldwideData());
    };
    getAllData();
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      Promise.all([await getTableData(), await getCountriesData()]).then(
        (values) => {
          setTableData(sortData(values[0]));
          setCountries(values[1]);
        }
      );
    };

    fetchAPI();
  }, [setTableData, setCountries]);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const countryData = await getCountryData(countryCode);
    setCountryInfo(countryData);
    setCountry(countryCode);
    setMapCenter([countryData.countryInfo.lat, countryData.countryInfo.long]);
    setMapZoom(4);
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
          <InfoBox
            title="Infected"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />

          <InfoBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />

          <InfoBox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>
        <Map center={mapCenter} zoom={mapZoom} />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Case by Country</h3>
          <Table countries={tableData} />
          {/* Table */}
          <h3>Worldwide new cases</h3>
          {/* Graph */}
          <LineGraph />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
