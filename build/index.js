import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import App from "./App.js";
import basicform from "./basicform.js";
var mountNode = document.getElementById("app");
let fieldnames = ["firstname", "lastname"];
ReactDOM.render([/* @__PURE__ */ React.createElement(App, {
  name: "Jane"
}), /* @__PURE__ */ React.createElement("basicform", {
  name: "Test",
  fieldnames
})], mountNode);
