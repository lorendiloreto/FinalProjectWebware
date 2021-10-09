import React, {useState} from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./styles.css.proxy.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
function List(props) {
  const listItems = props.items.map((item) => /* @__PURE__ */ React.createElement(ListItem, {
    item
  }));
  return /* @__PURE__ */ React.createElement("ul", {
    class: "list-group"
  }, listItems);
}
function ListItem(props) {
  let jsonItems = [];
  const json = props.item;
  Object.keys(json).forEach((element) => {
    let temp = /* @__PURE__ */ React.createElement("h4", null, element, ": ", json[element]);
    jsonItems.push(temp);
  });
  return /* @__PURE__ */ React.createElement("li", {
    class: "list-group-item"
  }, jsonItems);
}
function Card(props) {
  const cardItems = props.items.map((item) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    class: "card"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "card-body"
  }, /* @__PURE__ */ React.createElement(CardItem, {
    item
  })))));
  return cardItems;
}
function CardItem(props) {
  let jsonItems = [];
  const json = props.item;
  Object.keys(json).forEach((element) => {
    let temp = /* @__PURE__ */ React.createElement("h4", {
      class: "card-title"
    }, element, ": ", json[element]);
    jsonItems.push(temp);
  });
  return jsonItems;
}
export {List, Card};
