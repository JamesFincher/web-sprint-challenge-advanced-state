import React from "react";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";
import GridMap from "./GridMap";
function Wheel(props) {
  const handleClockwise = () => {
    props.moveClockwise();
  };
  const handleCounterClockwise = () => {
    props.moveCounterClockwise();
  };
  console.log(props.wheel);

  return (
    <>
      <div id="wrapper">
        <div id="wheel">
          {" "}
          <GridMap wheel={props.wheel} />
        </div>
        <div id="keypad">
          <button id="counterClockwiseBtn" onClick={handleCounterClockwise}>
            Counter clockwise
          </button>
          <button id="clockwiseBtn" onClick={handleClockwise}>
            Clockwise
          </button>
        </div>
      </div>
    </>
  );
}

export default connect((state) => state, actions)(Wheel);
