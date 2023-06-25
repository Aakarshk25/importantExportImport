import React from "react";
import ReactDOM from "react-dom";
// import {add,multiply,divide,subtract} from "./calculator";

// there are two ways of solving this by this meathod and second meathode
import * as calculator from "./calculator";
// this is wildcard meathod

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  // <ul>
  //   <li>{add(1, 2)}</li>
  //   <li>{multiply(2, 3)}</li>
  //   <li>{subtract(7, 2)}</li>
  //   <li>{divide(5, 2)}</li>
  // </ul>// second meathod
  <ul>
    <li>{calculator.add(1, 2)}</li>
    <li>{calculator.multiply(2, 3)}</li>
    <li>{calculator.subtract(7, 2)}</li>
    <li>{calculator.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
