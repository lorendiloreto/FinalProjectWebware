import React, {useState} from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
import {Formik, Field} from "./_snowpack/pkg/formik.js";
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
function basicForm(props) {
  const {name, fieldnames} = props.name;
  let PARAMS = {};
  for (let n of fieldnames) {
    PARAMS.initialValues[n] = "";
  }
  PARAMS.onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const formik = useFormik(PARAMS);
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: formik.handleSubmit
  }, /* @__PURE__ */ React.createElement("label", null, fieldnames[0]), /* @__PURE__ */ React.createElement("input", {
    name: fieldnames[0],
    onChange: formik.handleChange,
    value: formik.values[fieldnames[0]]
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Submit"));
}
export {App, basicForm};
