import React, {useState} from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

export default App;