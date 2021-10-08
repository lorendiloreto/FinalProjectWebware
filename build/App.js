import React from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./styles.css.proxy.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "LOGIN"
    };
  }
  updateContent = () => {
    console.log(this.state.login);
    if (this.state.login == "LOGIN")
      this.setState({login: "SIGNUP"});
    if (this.state.login == "SIGNUP")
      this.setState({login: "LOGIN"});
  };
  render() {
    const loginState = () => {
      if (this.state.login == "LOGIN") {
        return /* @__PURE__ */ React.createElement("div", null, " ", /* @__PURE__ */ React.createElement("button", null, "Logout"), " ");
      } else {
        return /* @__PURE__ */ React.createElement("button", null, "Login");
      }
    };
    const {name} = this.props;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "body"
    }, /* @__PURE__ */ React.createElement("h1", null, name), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      onClick: this.updateContent,
      class: "btn btn-primary"
    }, this.state.login), loginState()));
  }
}
export default App;
