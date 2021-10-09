import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; /* Imports specific react component from App.jsx */
import Basicform from "./basicform"

var mountNode = document.getElementById("app"); 
let textInput=["firstname", "lastname","email", "password", "confirm password","a","dsadsaasd"]
ReactDOM.render([<App name="Jane" />, <Basicform name="Sign Up" textInput={textInput}  />], mountNode); /* Mounts HTML code returned by react component onto existing <div> */


//ReactDOM.render( <Basicform name="Test" />, mountNode);
