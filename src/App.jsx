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
        <button type="button" onClick={clicked} class="btn btn-primary">
        { login }
        </button>
        {loginState()}

        </div>
        </>
    );
}


export default App;
