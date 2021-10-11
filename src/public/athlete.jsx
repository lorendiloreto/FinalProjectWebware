import React from "react";
import ReactDOM from "react-dom";
import Basicform from "./basicform"
import AthApp from "./AthApp"; /* Imports specific react component from App.jsx */

var mountNode = document.getElementById("app"); 

    ReactDOM.render([<AthApp name="GOAT CONNECT" fun = {() => state="LOGGED_OUT"}/>,

    ], 
        mountNode); /* Mounts HTML code returned by react component onto existing <div> */


