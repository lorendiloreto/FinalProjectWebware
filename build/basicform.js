import React, {useState} from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
import "./styles.css.proxy.js";
function basicform(props) {
  const {name, textInput, extraButtons} = props;
  function handleSubmit(event) {
    alert("An essay was submitted: ");
    event.preventDefault();
  }
  const inputFields = () => {
    if (textInput.length > 0) {
      return textInput.map(function(each) {
        if (each.toLowerCase() == "confirm password" || each.toLowerCase() == "password") {
          return /* @__PURE__ */ React.createElement("div", {
            class: "form-group"
          }, /* @__PURE__ */ React.createElement("div", {
            class: "form-group"
          }, /* @__PURE__ */ React.createElement("label", null, each, " ")), /* @__PURE__ */ React.createElement("div", {
            class: "form-group"
          }, /* @__PURE__ */ React.createElement("input", {
            type: "password",
            name: each
          })));
        } else {
          return /* @__PURE__ */ React.createElement("div", {
            class: "form-group"
          }, /* @__PURE__ */ React.createElement("div", {
            class: "form-group"
          }, /* @__PURE__ */ React.createElement("label", null, each)), /* @__PURE__ */ React.createElement("div", {
            class: "form-group"
          }, /* @__PURE__ */ React.createElement("input", {
            name: each
          })));
        }
      });
    } else {
      return [];
    }
  };
  const buttons = () => {
    if (extraButtons.length > 0) {
      return extraButtons.map(function(each) {
        return /* @__PURE__ */ React.createElement("div", {
          class: "form-group"
        }, /* @__PURE__ */ React.createElement("button", {
          class: "btn btn-primary btn-block",
          onclick: each[1],
          type: "button"
        }, each[0]));
      });
    } else {
      return [];
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    class: "login-light"
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("h2", null, name), inputFields(), /* @__PURE__ */ React.createElement("div", {
    class: "form-group"
  }, /* @__PURE__ */ React.createElement("button", {
    class: "btn btn-primary btn-block",
    type: "submit"
  }, name)), buttons()));
}
export default basicform;
