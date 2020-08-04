import axios from "axios";

const url = "https://disease.sh/v3/covid-19";

export const getCountriesData = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);
    const countries = data.map((country) => ({
      name: country.country, //Vietnam
      value: country.countryInfo.iso2, //VN
    }));
    return countries;
  } catch (error) {
    console.log("error.message getCountries");
  }
};

export const getCountryData = async (countryCode) => {
  let urlCountry = "";
  countryCode === "worldwide"
    ? (urlCountry = `${url}/all`)
    : (urlCountry = `${url}/countries/${countryCode}`);

  try {
    const { data } = await axios.get(urlCountry);
    return data;
  } catch (error) {
    console.log("error.message getCountry", error.message);
  }
};
