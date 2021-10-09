import React, {useState} from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
function App(props) {
  const name = props.name;
  const [clicks, setClicks] = useState(0);
  function sendRequest() {
    setClicks(clicks + 1);
    fetch("/exampleRequest", {method: "post", "no-cors": true}).then((response) => {
      console.log("Request returned");
    });
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Hello ", name), /* @__PURE__ */ React.createElement("h2", null, "Clicks: ", clicks), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    class: "btn btn-primary",
    onClick: sendRequest
  }, "This is a bootstrap button"));
}
export default App;
