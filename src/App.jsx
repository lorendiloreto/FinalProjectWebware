import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
    const name = props.name;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <button type="button" class="btn btn-primary">
          This is a bootstrap button
        </button>
      </>
    );
}

export default App;