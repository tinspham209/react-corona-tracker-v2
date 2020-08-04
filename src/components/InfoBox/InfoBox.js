import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const InfoBox = (props) => {
  const { title, cases, total } = props;
  return (
    <Card>
      <CardContent className="infoBox">
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="infoBox__cases">{cases}</h2>
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
