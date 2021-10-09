import React, {useState} from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./styles.css.proxy.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
import Basicform from "./basicform.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
function App(props) {
  const name = props.name;
  const [login, setLogin] = useState("LOGIN");
  function sendRequest() {
    setClicks(clicks + 1);
    fetch("/exampleRequest", {method: "post", "no-cors": true}).then((response) => {
      console.log("Request returned");
    });
  }
  let textInputLogin = ["email", "password"];
  let textInputSignup = ["firstname", "lastname", "email", "password", "confirm password", "key"];
  let extraButtonsLogin = ["Sign up"];
  let extraButtonsSignup = ["Back to login"];
  const loginState = () => {
    if (login == "LOGIN") {
      return /* @__PURE__ */ React.createElement(Basicform, {
        name: "Log In",
        textInput: textInputLogin,
        extraButtons: extraButtonsLogin,
        fun: () => setLogin("SIGNUP"),
        value: "gg"
      });
    } else if (login == "SIGNUP") {
      return /* @__PURE__ */ React.createElement(Basicform, {
        name: "Sign Up",
        textInput: textInputSignup,
        extraButtons: extraButtonsSignup,
        fun: () => setLogin("LOGIN"),
        value: "GGS"
      });
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
    className: "body outer"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "inner"
  }, /* @__PURE__ */ React.createElement("nav", {
    class: "navbar navbar-light bg-light justify-content-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    class: "goat-connect"
  }, name))), /* @__PURE__ */ React.createElement("div", {
    class: "login-light inner"
  }, loginState(), /* @__PURE__ */ React.createElement("div", {
    id: "form"
  }))));
}
export default App;
