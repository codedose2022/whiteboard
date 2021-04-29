import React from "react";
import moment from "moment";

export default function ColoredCell(props) {
  const setColor = (theDate) => {
    let today = moment();
    if (moment(theDate).isAfter(today)) {
      console.log("after");
    } else {
      console.log("before");
    }
  };
  return <>{props.params.value}</>;
}
