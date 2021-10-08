import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {BrowserRouter, Route, Switch} from "./_snowpack/pkg/react-router-dom.js";
import App from "./App.js";
import Login from "./Login.js";
var mountNode = document.getElementById("app");
ReactDOM.render(/* @__PURE__ */ React.createElement(App, {
  name: "GOAT CONNECT"
}), mountNode);
