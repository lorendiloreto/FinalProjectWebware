import React, {useState} from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function List(props) {
    const listItems = props.items.map((item) =>
        <ListItem item={item}/>
    );
    return (
        <ul class="list-group">{listItems}</ul>
    );
}
function ListItem(props) {
    let jsonItems = []
    const json = props.item
    Object.keys(json).forEach((element) => {
        let temp = (<h4>{element}: {json[element]}</h4>)
        jsonItems.push(temp)
    });
    return (
        <li class="list-group-item">{jsonItems}</li>
    );
}
function Card(props) {
    const cardItems = props.items.map((item) => (
        <>
        <div class="card">
            <div class="card-body"><CardItem item={item}/></div>
        </div>
        </>
    ));
    return cardItems
}

function CardItem(props) {
    let jsonItems = []
    const json = props.item
    Object.keys(json).forEach((element) => {
        let temp = (<h4 class="card-title">{element}: {json[element]}</h4>)
        jsonItems.push(temp)
    });
    return jsonItems
}

export {List, Card};