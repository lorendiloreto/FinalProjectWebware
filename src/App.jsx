import React, {useState} from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
    const name = props.name;
    const [clicks, setClicks] = useState(0); /* State Hook used for keeping track of the component's "clicks" */
    const [login, setLogin] = useState("LOGIN"); 


    function sendRequest() { /* Simple Javascript function inside of component used for sending post request */
        setClicks(clicks + 1) /* Used to set the value of the state "clicks" */
        fetch( '/exampleRequest', { method:'post', 'no-cors':true })
            .then( response => {
                console.log("Request returned")
            })
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
                <td><img src="profile.jpg" width="50px" heught="50px"></img></td>
                <td>Maria del Carmen</td>
                <td>Sacristan Benjet</td>
                <td>Computer Science</td>
                <td>3.5</td>
                <td>none</td>
            </tr>
            <tr>
                <td>none</td>
                <td>Maria del Carmen</td>
                <td>Sacristan Benjet</td>
                <td>Computer Science</td>
                <td>3.5</td>
                <td>none</td>
            </tr>
            <tr>
                <td>none</td>
                <td>Maria del Carmen</td>
                <td>Sacristan Benjet</td>
                <td>Computer Science</td>
                <td>3.5</td>
                <td>none</td>
            </tr>
            <tr>
                <td>none</td>
                <td>Maria del Carmen</td>
                <td>Sacristan Benjet</td>
                <td>Computer Science</td>
                <td>3.5</td>
                <td>none</td>
            </tr>
            </tbody>
        </table>
        </div>
        </>
    );
}
export default App;
