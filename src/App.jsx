import React, {useState} from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Formik, Field} from "formik"

function App(props) {
  const name = props.name;
  const [clicks, setClicks] = useState(0); /* State Hook used for keeping track of the component's "clicks" */

  function sendRequest() { /* Simple Javascript function inside of component used for sending post request */
    setClicks(clicks + 1) /* Used to set the value of the state "clicks" */
    fetch( '/exampleRequest', { method:'post', 'no-cors':true })
      .then( response => {
        console.log("Request returned")
      })
  }
  /* Returns HTML code using variables from this component */
  return (
    <>
      <h1>
        Hello {name}
      </h1>
      <h2>
        Clicks: {clicks}
      </h2>
      <button type="button" class="btn btn-primary" onClick={sendRequest}>
        This is a bootstrap button
      </button>
    </>
  );
}

function basicForm(props) {
    const {name, fieldnames} = props.name

    let PARAMS = {}
    for (let n of fieldnames) {
        PARAMS.initialValues[n] = ''
    }
    PARAMS.onSubmit = values => {
        alert(JSON.stringify(values, null, 2))
    }
    const formik = useFormik(PARAMS);

    return (
        <form onSubmit={formik.handleSubmit}>
               <label>{fieldnames[0]}</label>
               <input
                 name={fieldnames[0]}
                 onChange={formik.handleChange}
                 value={formik.values[fieldnames[0]]}
               />
               <button type="submit">Submit</button>
             </form>
    )
}


export {App, basicForm};
