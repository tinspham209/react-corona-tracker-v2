import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import Spinner from "../UI/Spinner/Spinner";
import "./InfoBox.css";

const InfoBox = ({ title, cases, total, ...props }) => {
  let infoBoxContent;
  if (title === undefined || cases === undefined || total === undefined) {
    infoBoxContent = <Spinner />;
  } else {
    infoBoxContent = (
      <React.Fragment>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <Typography
          className="infoBox__total"
          variant="h5"
          color="textSecondary"
        >
          {/* {total} */}
          <CountUp start={0} end={total} duration={1.5} separator="," />
        </Typography>
        <Typography
          className="infoBox__cases"
          variant="h6"
          color="textSecondary"
        >
          {/* + {cases} */}
          +<CountUp start={0} end={cases} duration={1.5} separator="," />
        </Typography>
      </React.Fragment>
    );
  }

  return (
    <Card onClick={props.onClick} className="infoBox">
      <CardContent>{infoBoxContent}</CardContent>
    </Card>
  );
};

export default InfoBox;
