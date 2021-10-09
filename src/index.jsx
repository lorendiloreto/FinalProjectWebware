import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; /* Imports specific react component from App.jsx */
import Basicform from "./basicform"

var mountNode = document.getElementById("app"); 
let textInputLogin=["email", "password"]
let textInputSignup=["firstname", "lastname","email", "password", "confirm password"]
let extraButtonsLogin = [["Sign up as athlete", "signUpAth"],["Sign up as alumni","signUpAlum"]]
let extraButtonsSignup = [["Back to login", "login"]]
ReactDOM.render([<App name="Jane" />,
    
    <Basicform name="Log In" textInput={textInputLogin} extraButtons={extraButtonsLogin}  />,
<Basicform name="Sign Up" textInput={textInputSignup} extraButtons= {extraButtonsSignup} />
], 
    mountNode); /* Mounts HTML code returned by react component onto existing <div> */


//ReactDOM.render( <Basicform name="Test" />, mountNode);
