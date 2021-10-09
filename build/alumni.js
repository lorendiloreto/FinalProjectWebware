import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {List, Card} from "./AlumniView.js";
const numbers = [{Name: "Christian Luizzi", Position: "QB"}, {Name: "Harrison Kyriacou", Position: "MLB"}];
let players;
var mountNode = document.getElementById("alumni-view");
ReactDOM.render(/* @__PURE__ */ React.createElement(Card, {
  items: numbers
}), mountNode);
function getPlayers() {
  fetch("/getPlayers", {method: "post", "no-cors": true}).then(function(response) {
    return response.json();
  }).then(function(json) {
    players = json;
  });
}
