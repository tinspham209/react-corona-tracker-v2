import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";

const InfoBox = (props) => {
  const { title, cases, total } = props;
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
          {total}
          {/* <CountUp start={0} end={total} duration={1.0} separator="," /> */}
        </Typography>
        <Typography
          className="infoBox__total"
          variant="h6"
          color="textSecondary"
        >
          + {cases}
          {/* <CountUp start={0} end={cases} duration={1.0} separator="," /> */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
