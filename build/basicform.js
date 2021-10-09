import React from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
import {Formik, Field} from "./_snowpack/pkg/formik.js";
function basicform(props) {
  const {name, fieldnames} = props;
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
export default basicform;
