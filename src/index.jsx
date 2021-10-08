import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; /* Imports specific react component from App.jsx */


var mountNode = document.getElementById("app"); 
ReactDOM.render([<App name="Jane" />, <App name="Jack" />], mountNode); /* Mounts HTML code returned by react component onto existing <div> */