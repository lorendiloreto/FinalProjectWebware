import React, {useState} from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basicform from "./basicform"
import ReactDOM from "react-dom";

function App(props) {
    const {name, fun} = props;
    const [login, setLogin] = useState("LOGIN"); 
    

    function sendRequest() { /* Simple Javascript function inside of component used for sending post request */
        setClicks(clicks + 1) /* Used to set the value of the state "clicks" */
        fetch( '/exampleRequest', { method:'post', 'no-cors':true })
            .then( response => {
                console.log("Request returned")
            })
    }

    let textInputLogin=["email", "password"]
    let textInputSignup=["name", "email", "password", "confirm password", "key"]
    let extraButtonsLogin = ["Sign up"]
    let extraButtonsSignup = ["Back to login"]

    const loginState = () =>{
        if(login == 'LOGIN'){
            return (
                <Basicform name="Log In" textInput={textInputLogin} extraButtons={extraButtonsLogin}  fun = {() => setLogin("SIGNUP") } value="gg" redirect={fun} autofill={[]}/>
            );
        } else if(login == "SIGNUP"){
            return (
                <Basicform name="Sign Up" textInput={textInputSignup} extraButtons= {extraButtonsSignup} fun = {() => setLogin("LOGIN")} value="GGS" autofill={[]} />

            );
        }
    }
    function clicked(){
        if(login=="LOGIN"){setLogin("SIGNUP")}else{setLogin("LOGIN")}
    }

    return(
        <>
        <div className = "body outer">
         <div class="inner">
<nav class="navbar navbar-light bg-light justify-content-center">
  <img class="goatText"/>
</nav>
        </div>
        <div class="login-light inner"> 
        {loginState()}
        <div id="form"></div>
        </div>
        </div>
        </>
    );
}


export default App;
