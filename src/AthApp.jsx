import React, {useState} from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basicform from "./basicform"
import ReactDOM from "react-dom";

function AthApp(props) {

    const {name, fun} = props;
    return (
        <>
        <div>
        <nav class="navbar navbar-light bg-light justify-content-center">
  <h1 class="goat-connect">HELLO</h1>
</nav>
        </div>
        </>
    );

}

export default AthApp;
