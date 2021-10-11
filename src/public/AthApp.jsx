import React, { useEffect, useState } from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basicform from "./basicform"
import ReactDOM from "react-dom";

function AthApp(props) {

    const { name, fun } = props;

    const [autofilldata, setData] = useState({})

    let textInputSettings = ["name", "email", "gpa", "year", "major", "description"]
    // let extraButtonsSettings = ["Back to login"]

    useEffect(() => {
        async function getData() {
            const data = await fetch('/getPlayer', {
                method: 'GET'
            }).then(res => res.json())
            delete data.key
            setData(data)
        }
        getData()
    }, [])

    let initialText = Object.values(autofilldata)
    console.log(initialText)


    const logout = () => {
        window.location.href = "/logout"
    }

    const form = () => {

        
        return (
            <Basicform name="Settings"
                textInput={textInputSettings}
                extraButtons={[]}
                fun={""}
                value="gg"
                redirect={""}
                autofill={initialText}
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
