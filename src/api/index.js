const url = "https://disease.sh/v3/covid-19";

export const getCountriesData = async () => {
  return await fetch(`${url}/countries`)
    .then((response) => response.json())
    .catch((error) => console.log("error.message getCountries", error.message))
    .then((data) => {
      const countries = data.map((country) => ({
        name: country.country, //Vietnam
        value: country.countryInfo.iso2, //VN
      }));
      return countries;
    });
};
