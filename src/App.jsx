import React, {useState} from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
    const name = props.name;
    const firstName = props.firstName;
    const lastName = props.LastName;
    const mayor = props.mayor;
    const gpa = props.gpa;
    const image = props.image;

    const [clicks, setClicks] = useState(0); /* State Hook used for keeping track of the component's "clicks" */
    const [login, setLogin] = useState("LOGIN"); 


    function sendRequest() { /* Simple Javascript function inside of component used for sending post request */
        setClicks(clicks + 1) /* Used to set the value of the state "clicks" */
        fetch( '/exampleRequest', { method:'post', 'no-cors':true })
            .then( response => {
                console.log("Request returned")
            })
    }

    function FirstName(props) {
        return <td>{props.firstName}</td>;
    }

    function LastName(props) {
        return <td>{props.lastName}</td>;
    }

    function Mayor(props) {
        return <td>{props.mayor}</td>;
    }

    function GPA(props) {
        return <td>{props.gpa}</td>;
    }

    function Image(props) {
        return  <td><img src={props.image} width="50px" heught="50px"></img></td>;
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
        <table>
            <tbody>
            <tr>
                <th>Photo</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mayor</th>
                <th>GPA</th>
                <th>Resume</th>
            </tr>
            <tr>
                <Image image="profile.jpg"/>
                <FirstName firstName="Maria del Carmen"/>
                <LastName lastName="Sacristan Benjet"/>
                <Mayor mayor="Computer Science"/>
                <GPA gpa="3.4"/>
                <Image image="functionalsample.pdf"/>
            </tr>
            <tr>
                <Image image="profile.jpg"/>
                <FirstName firstName="Maria del Carmen"/>
                <LastName lastName="Sacristan Benjet"/>
                <Mayor mayor="Computer Science"/>
                <GPA gpa="3.4"/>
                <Image image="functionalsample.pdf"/>
            </tr>
            <tr>
                <Image image="profile.jpg"/>
                <FirstName firstName="Maria del Carmen"/>
                <LastName lastName="Sacristan Benjet"/>
                <Mayor mayor="Computer Science"/>
                <GPA gpa="3.4"/>
                <Image image="functionalsample.pdf"/>
            </tr>
            <tr>
                <Image image="profile.jpg"/>
                <FirstName firstName="Maria del Carmen"/>
                <LastName lastName="Sacristan Benjet"/>
                <Mayor mayor="Computer Science"/>
                <GPA gpa="3.4"/>
                <Image image="functionalsample.pdf"/>
            </tr>
            </tbody>
        </table>
        </div>
        </>
    );
}
export default App;
