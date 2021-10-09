import React, {useState} from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./styles.css.proxy.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
function App(props) {
  const name = props.name;
  const [clicks, setClicks] = useState(0);
  const [login, setLogin] = useState("LOGIN");
  function sendRequest() {
    setClicks(clicks + 1);
    fetch("/exampleRequest", {method: "post", "no-cors": true}).then((response) => {
      console.log("Request returned");
    });
  }
  const loginState = () => {
    if (login == "LOGIN") {
      return /* @__PURE__ */ React.createElement("div", null, " ", /* @__PURE__ */ React.createElement("button", null, "Logout"), " ");
    } else {
      return /* @__PURE__ */ React.createElement("button", null, "Login");
    }
  };
  function clicked() {
    if (login == "LOGIN") {
      setLogin("SIGNUP");
    } else {
      setLogin("LOGIN");
    }
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "body"
  }, /* @__PURE__ */ React.createElement("h1", null, name), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: clicked,
    class: "btn btn-primary"
  }, login), loginState()));
}
export default App;
