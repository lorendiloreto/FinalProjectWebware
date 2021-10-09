import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import App from "./App.js";
import Basicform from "./basicform.js";
var mountNode = document.getElementById("app");
let textInputLogin = ["email", "password"];
let textInputSignup = ["firstname", "lastname", "email", "password", "confirm password"];
let extraButtonsLogin = [["Sign up as athlete", "signUpAth"], ["Sign up as alumni", "signUpAlum"]];
let extraButtonsSignup = [["Back to login", "login"]];
ReactDOM.render([
  /* @__PURE__ */ React.createElement(App, {
    name: "Jane"
  }),
  /* @__PURE__ */ React.createElement(Basicform, {
    name: "Sign Up",
    textInput: textInputSignup,
    extraButtons: extraButtonsSignup
  }),
  /* @__PURE__ */ React.createElement(Basicform, {
    name: "Log In",
    textInput: textInputLogin,
    extraButtons: extraButtonsLogin
  })
], mountNode);
