import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import Spinner from "../UI/Spinner/Spinner";

const InfoBox = (props) => {
  const { title, cases, total } = props;
  if (!title || !cases || !total) {
    return <Spinner />;
  }
  return (
    <Card>
      <CardContent className="infoBox">
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
          className="infoBox__total"
          variant="h6"
          color="textSecondary"
        >
          {/* + {cases} */}
          +<CountUp start={0} end={cases} duration={1.5} separator="," />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
