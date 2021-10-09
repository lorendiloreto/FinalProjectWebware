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
export default List;
