import React, {useState} from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basicform from "./basicform"
import ReactDOM from "react-dom";

function AthApp(props) {
    
    const {name, fun} = props;
    
    let textInputSettings=["firstname", "lastname","email", "resume", "profile-pic"]
   // let extraButtonsSettings = ["Back to login"]

   

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
  <h1 class="goat-connect">HELLO</h1>
</nav>

        {form()}
        </div>
        </>
    );

}

export default AthApp;
