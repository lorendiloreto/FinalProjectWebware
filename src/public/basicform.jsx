import React, {useState} from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function basicform(props) {
    
    const {name, textInput, extraButtons, fun, value, reditect, autofill} = props

    const resetInputField = () => {
        document.getElementById("form").reset()
    };

    function typeButton(){
        return(
        <div class="form-group"><button class="btn btn-primary btn-block" type="submit" >{name}</button></div>
 
        );
    }
    function handleSubmit(event) {
        var formArgs;
        if(name.toLowerCase()=="settings"){
            event.preventDefault();
            formArgs = {name: event.target[0].value, email: event.target[1].value, gpa: event.target[2].value, year: event.target[3].value, major: event.target[4].value, description: event.target[5].value}

                fetch('/addSettings', {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify(formArgs)
                })
                    .then( res => {
                        if (!res.ok) {
                   //     res.text().then(alert) //alert for invalid key
                 }})
                    
            alert("settings updated")
        }else if(name.toLowerCase()=="log in"){
                event.preventDefault();

            // console.log(event.target[0].value)
            //        console.log("Hello" + event.email)
            formArgs = {username: event.target[0].value, password: event.target[1].value}
            fetch('/login', {
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(formArgs)
            }).then(res => {
                if (res.ok) {
                    console.log(res.url)
                    window.location.href = res.url
                } else if (!res.ok) {
                    alert("wrong username or password")
                }
            })

        }else if(name.toLowerCase()=="sign up"){
            event.preventDefault();


            formArgs = {name: event.target[0].value, username: event.target[1].value, password: event.target[2].value, key: event.target[4].value}

            fetch('/createaccount', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(formArgs)
            })
                .then( res => {
                    if (!res.ok) {
                       res.text().then(alert) //alert for invalid key
                    } else {
                        window.location.href = res.url
                    }
                })


        }else{
            alert(name + ':Handled FAILED');
        }
    }
    const inputFields = () =>{
        if(textInput.length > 0 && name.toLowerCase()=="settings"){
            let r = [];
            for(var i=0; i<textInput.length;i++){
                            r.push(
                            <div class="group">      
                            <input type="text" required
                            id={textInput[i]}
                            name={textInput[i]}
                            defaultValue={autofill[i]}
                            />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>{textInput[i]}</label>
                            </div>
                            )     
            }
            return r;
        }
        else if(textInput.length > 0){

            return textInput.map(function(each){
                if(each.toLowerCase()=="confirm password"||each.toLowerCase()=="password"){
                    return(
                        <div class="group">      
                        <input type="password" required
                        id={each}
                        name={each}
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>{each}</label>
                        </div>                                  )

                }else{
                    return(
                        <div class="group">      
                        <input type="text" required
                        id={each}
                        name={each}
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>{each}</label>
                        </div>                       
                    )
                }
            })
        } else {
            return []
        }
    }
    const buttons = () =>{

        if(extraButtons.length > 0){

            return extraButtons.map(function(each){
                return(
                    <div class="form-group"><button class="btn btn-link" onClick={() => {fun();resetInputField();}} type="button">{each}</button></div>
                )
            })
        } else {
            return []
        }
    }


    return (
        <div class="login-light">
        <form onSubmit={handleSubmit} id="form">
        <h2>{name}</h2>
        {inputFields()}
        {typeButton()}
        {buttons()}
        </form>
        </div>
    );
}

export default basicform
