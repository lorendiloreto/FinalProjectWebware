import React from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
function App() {
  const name = this.props.name;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Hello ", name), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    class: "btn btn-primary"
  }, "This is a bootstrap button"));
}
export default App;
