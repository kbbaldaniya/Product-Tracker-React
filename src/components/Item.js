import React from "react";
import "./Item.css";
import Date from "./Date";
// import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Item = (props) => {
  return (
    <div className="component">
      {/* <HighlightOffIcon style={{color: 'red'}}/> */}
      <Date date={props.date} />
      <div className="detail">
        <h2>{props.title}</h2>
        <div className="amount">{props.amount}</div>
      </div>
    </div>
  );
};
export default Item;
