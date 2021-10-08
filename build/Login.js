import React from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./styles.css.proxy.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
class Login extends React.Component {
  render() {
    const {name} = this.props;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "body"
    }, /* @__PURE__ */ React.createElement("h1", null, name), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      class: "btn btn-primary"
    }, "Login PAGE")));
  }
}
export default Login;
