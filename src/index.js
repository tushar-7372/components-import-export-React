import React from "react";
import ReactDOM from "react-dom";
// import PI from "./math";
//importing PI grom math.jsx file
//this looks for default export from math.jsx file

// import PI, { doublePi, triplePi } from "./math";
//names for non default should be same

//if we want to import everything from a file
import * as pi from "./math";
//every export is in pi
//it can be accessed as pi.default=3.14
//pi.doublePi()=6.28
//pi.triplePi()=9.42

//--initially
// ReactDOM.render(
//   <ul>
//     <li>{PI}</li>
//     {/* doublePi is a function so () at the end */}
//     <li>{doublePi()}</li>
//     <li>{triplePi()}</li>
//   </ul>,
//   document.getElementById("root")
// );
//--till this

//
ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    {/* doublePi is a function so () at the end */}
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
