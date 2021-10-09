import React, {useState} from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
function basicform(props) {
  const {name, textInput} = props;
  function handleSubmit(event) {
    alert("An essay was submitted: ");
    event.preventDefault();
  }
  const inputFields = () => {
    if (textInput.length > 0) {
      textInput.forEach(function(each) {
        return /* @__PURE__ */ React.createElement("h1", null, "hello");
      });
    }
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, inputFields(), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Submit"));
}
export default basicform;
