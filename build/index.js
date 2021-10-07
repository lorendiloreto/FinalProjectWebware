import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import App from "./App.js";
var mountNode = document.getElementById("app");
ReactDOM.render(/* @__PURE__ */ React.createElement(App, {
  name: "Jane"
}), mountNode);
