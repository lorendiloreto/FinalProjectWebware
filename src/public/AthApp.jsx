import React, {useState} from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basicform from "./basicform"
import ReactDOM from "react-dom";

function AthApp(props) {
    
    const {name, fun} = props;
    
    let textInputSettings=["name", "email", "gpa", "year", "major", "resume", "profile-pic"]
   // let extraButtonsSettings = ["Back to login"]

 
    const logout = () =>{
        window.location.href = "/logout"
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
); } 

    return ( 
        <> 
        <div> 
        <nav class="navbar navbar-light bg-light"> 
        <button class="btn btn-primary btn-block navbar-left" onClick={logout}>logout</button>
  <img class="goatText mx-auto"/>
</nav>
        {form()}
        </div>
        </>
    );

}

export default AthApp;
