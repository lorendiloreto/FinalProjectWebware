import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; /* Imports specific react component from App.jsx */
import Basicform from "./basicform"

var mountNode = document.getElementById("app"); 
    ReactDOM.render([<App name="GOAT CONNECT"/>,

    ], 
        mountNode); /* Mounts HTML code returned by react component onto existing <div> */


//ReactDOM.render( <Basicform name="Test" />, mountNode);
