import React, {useState} from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
    const name = props.name;
    const firstName = props.firstName;
    const lastName = props.LastName;
    const major = props.major;
    const gpa = props.gpa;
    const image = props.image;
    const aboutMe = props.image;
    const resume = props.resume;
    const year = props.year;

    const [clicks, setClicks] = useState(0); /* State Hook used for keeping track of the component's "clicks" */
    const [login, setLogin] = useState("LOGIN"); 


    function sendRequest() { /* Simple Javascript function inside of component used for sending post request */
        setClicks(clicks + 1) /* Used to set the value of the state "clicks" */
        fetch( '/exampleRequest', { method:'post', 'no-cors':true })
            .then( response => {
                console.log("Request returned")
            })
    }


    function FullName(props) {
        return <h5 className="card-title">{props.firstName} {props.lastName}</h5>;

    }

    function Major(props) {
        return <h6 className="card-subtitle mb-2 text-muted">{props.major}</h6>;
    }

    function GPA(props) {
        return <h6 className="d-inline-block card-subtitle mb-2 text-muted">   GPA:{props.gpa}</h6>
    }

    function Year(props) {
        return <h6 className="d-inline-block card-subtitle mb-2 text-muted">Class of {props.year}</h6>
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

    const loginState = () =>{
        if(login == 'LOGIN'){
            return (
                <div> <button>Logout</button> </div>
            );
        } else{
            return (<button>Login</button>);
        }
    }
    function clicked(){
if(login=="LOGIN"){setLogin("SIGNUP")}else{setLogin("LOGIN")}
}
    return(
        <>
        <div className = "body">
        <h1>
        {name}
        </h1>
        <button type="button" onClick={clicked} className="btn btn-primary">
        { login }
        </button>
        {loginState()}
        <h2>Student Athletes:</h2>
        <div className="card col-sm-12 col-md-4 col-lg-3" >
            <Image image="profile.jpg"/> 
            <div className="card-body">
                <FullName firstName="Maria" lastName="Sacristan"/> 
                <Major major="Computer Science"/>
                <Year year="2022"/>
                <AboutMe aboutMe="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <GPA gpa="3.4"/>
                
                <br/>
                <Resume resume="functionalsample.pdf"/>
            </div>
         </div>
        </div>
        </>
    );
}
export default App;
