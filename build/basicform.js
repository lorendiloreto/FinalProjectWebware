import React, {useState} from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
import "./styles.css.proxy.js";
function basicform(props) {
  const {name, textInput, extraButtons, fun, value} = props;
  const resetInputField = () => {
    document.getElementById("form").reset();
  };
  function handleSubmit(event) {
    var formArgs;
    if (name.toLowerCase() == "log in") {
      event.preventDefault();
      formArgs = {username: event.target[0].value, password: event.target[1].value};
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formArgs)
      }).then((res) => {
        if (res.ok) {
          window.location.href = res.url;
        } else {
        }
      });
    } else if (name.toLowerCase() == "sign up") {
      event.preventDefault();
      formArgs = {firstname: event.target[0].value, lastname: event.target[1].value, username: event.target[2].value, password: event.target[3].value, key: event.target[5].value};
      fetch("/createaccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formArgs)
      }).then((res) => {
        if (!res.ok) {
        } else {
          window.location.href = res.url;
        }
      });
    } else {
      alert(name + ":Handled FAILED");
    }
  }
  const inputFields = () => {
    if (textInput.length > 0) {
      return textInput.map(function(each) {
        if (each.toLowerCase() == "confirm password" || each.toLowerCase() == "password") {
          return /* @__PURE__ */ React.createElement("div", {
            class: "group"
          }, /* @__PURE__ */ React.createElement("input", {
            type: "password",
            required: true,
            id: each,
            name: each
          }), /* @__PURE__ */ React.createElement("span", {
            class: "highlight"
          }), /* @__PURE__ */ React.createElement("span", {
            class: "bar"
          }), /* @__PURE__ */ React.createElement("label", null, each));
        } else {
          return /* @__PURE__ */ React.createElement("div", {
            class: "group"
          }, /* @__PURE__ */ React.createElement("input", {
            type: "text",
            required: true,
            id: each,
            name: each
          }), /* @__PURE__ */ React.createElement("span", {
            class: "highlight"
          }), /* @__PURE__ */ React.createElement("span", {
            class: "bar"
          }), /* @__PURE__ */ React.createElement("label", null, each));
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
          class: "btn btn-link",
          onClick: () => {
            fun();
            resetInputField();
          },
          type: "button"
        }, each));
      });
    } else {
      return [];
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    class: "login-light"
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit,
    id: "form"
  }, /* @__PURE__ */ React.createElement("h2", null, name), inputFields(), /* @__PURE__ */ React.createElement("div", {
    class: "form-group"
  }, /* @__PURE__ */ React.createElement("button", {
    class: "btn btn-primary btn-block",
    type: "submit"
  }, name)), buttons()));
}
export default basicform;