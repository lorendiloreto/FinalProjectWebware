import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Login from "./Login";
//import Page2 from "./Page2";


var mountNode = document.getElementById("app");
ReactDOM.render(<App name="GOAT CONNECT" />, mountNode);

/*
const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Page2} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );
    */
