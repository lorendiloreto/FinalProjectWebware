import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import App from "./App.js";
import Basicform from "./basicform.js";
var mountNode = document.getElementById("app");
let textInput = ["firstname", "lastname"];
ReactDOM.render([/* @__PURE__ */ React.createElement(App, {
  name: "Jane"
}), /* @__PURE__ */ React.createElement(Basicform, {
  name: "Test",
  textInput
})], mountNode);
