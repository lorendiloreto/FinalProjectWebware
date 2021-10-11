import React, {useState} from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basicform from "./basicform"
import ReactDOM from "react-dom";

function AthApp(props) {
    
    const {name, fun} = props;
    
    let textInputSettings=["name", "email", "resume", "profile-pic"]
   // let extraButtonsSettings = ["Back to login"]

 
    const logout = () =>{
        window.location.href = "/"
                }  

    const form = () =>{
            return (
                <Basicform name="Settings" 
                textInput={textInputSettings} 
                extraButtons={[]}
                fun={""}
                value="gg"
                redirect={""}
                />

            );
        }


    return (
        <>
        <div>
        <nav class="navbar navbar-light bg-light justify-content-center">
  <h1 class="goat-connect">GOAT CONNECT</h1>
</nav>

        <div class="form-group"><button class="btn btn-primary btn-block">{logout()}</button></div>
        {form()}
        </div>
        </>
    );

}

export default AthApp;
