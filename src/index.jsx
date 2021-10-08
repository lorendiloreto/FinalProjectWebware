import React from "react";
import ReactDOM from "react-dom";
import {App, basicForm} from "./App"; /* Imports specific react component from App.jsx */


var mountNode = document.getElementById("app"); 
let fieldnames=["firstname", "lastname"]
ReactDOM.render([<App name="Jane" />, <basicForm name="Test" fieldnames={fieldnames}  />], mountNode); /* Mounts HTML code returned by react component onto existing <div> */
