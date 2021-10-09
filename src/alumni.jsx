import React from "react";
import ReactDOM from "react-dom";

import List from "./AlumniView";

const numbers = [{"Name": "Christian Luizzi", "Position": "QB"}, {"Name": "Harrison Kyriacou", "Position": "MLB"}];
var mountNode = document.getElementById("alumni-view");
ReactDOM.render(<List items={numbers}/>, mountNode);

function getPlayers() {
    fetch( '/getPlayers', { method:'post', 'no-cors':true })
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            players = json
        })
}