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
    console.log(props.items)
    const cardItems = props.items.map((item) => (
        <>
        <div class="p-2 col-sm-12 col-md-6 col-lg-3">
            <div class="card">
                <div class="card-body"><CardItem item={item}/></div>
            </div>
        </div>
        </>
    ));
    return (
        <>
        <div class="container">
            <div class="row g-2">{cardItems}</div>
        </div>
        </>
    )
}

function CardItem(props) {
    return (
        <>
        <Image image="profile.jpg"/> 
            <div className="card-body">
                <FullName firstName={props.item.firstname} lastName={props.item.lastname}/> 
                <Major mayor="Computer Science"/>
                 
                <AboutMe aboutMe="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <GPA gpa="3.4"/>
                <Resume resume="functionalsample.pdf"/>
            </div>
        </>
    )
}

function FullName(props) {
    return <h5 className="card-title">{props.firstName} {props.lastName}</h5>;
}

function Major(props) {
    return <h6 className="card-subtitle mb-2 text-muted">{props.mayor}</h6>;
}

function GPA(props) {
    return <h6 className="card-subtitle mb-2 text-muted right">   GPA:{props.gpa}</h6>
}

function Image(props) {
    return <img className="card-img-top" src={props.image} alt="Card image cap"></img>
}

function AboutMe(props){
    return <p className="card-text text-justify">{props.aboutMe}</p>
}

function Resume(props){
    return <a href="functionalsample.pdf" download>
    <img src="downloadIcon.png" alt="Resume" width="50" height="50"/>
       Resume
   </a>;
}

export {List, Card, FullName, Major, GPA, Image, AboutMe, Resume};
