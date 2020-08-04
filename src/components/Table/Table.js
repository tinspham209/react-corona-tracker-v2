import React from "react";
import CountUp from "react-countup";
import Spinner from "../UI/Spinner/Spinner";
import "./Table.css";

const Table = (props) => {
  const { countries } = props;
  let tableContent;
  if (countries === undefined) {
    tableContent = <Spinner />;
  } else {
    tableContent = (
      <React.Fragment>
        {countries.map(({ country, cases, countryInfo }) => (
          <tr>
            <td>{country}</td>
            <td>
              <strong>
                <CountUp start={0} end={cases} duration={1.5} separator="," />
              </strong>
            </td>
          </tr>
        ))}
      </React.Fragment>
    );
  }
  console.log("countries", countries);
  return <div className="table">{tableContent}</div>;
};

export default Table;
