import React from "react";
import ReactDOM from "react-dom";

import {List, Card} from "./AlumniView";

const numbers = [{"Name": "Christian Luizzi", "Position": "QB"}, {"Name": "Harrison Kyriacou", "Position": "MLB"}];
getPlayers();


async function getPlayers() {
    fetch( '/getPlayers', { method:'post', 'no-cors':true })
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            let newJson = json.map((item) => {
                return item
            })
            var mountNode = document.getElementById("alumni-view");
            ReactDOM.render(<Card items={newJson}/>, mountNode);
        })
}