import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; /* Imports specific react component from App.jsx */
import Basicform from "./basicform"
import AthApp from "./AthApp"; /* Imports specific react component from App.jsx */

var state="LOGGED_OUT"

var mountNode = document.getElementById("app"); 
if(state=="LOGGED_OUT"){
    ReactDOM.render([<App name="GOAT CONNECT"/>,

    ], 
        mountNode); /* Mounts HTML code returned by react component onto existing <div> */
}else if(state=="LOGGED_IN"){
    ReactDOM.render([<AthApp name="GOAT CONNECT" />,

    ], 
        mountNode); /* Mounts HTML code returned by react component onto existing <div> */
}

//ReactDOM.render( <Basicform name="Test" />, mountNode);
