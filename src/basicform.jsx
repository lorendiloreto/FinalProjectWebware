import React, {useState} from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function basicform(props) {
    const {name, textInput, extraButtons} = props

    function handleSubmit(event) {
        var formArgs;
       if(name.toLowerCase()=="log in"){
        alert('Handled LOGIN');
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
            window.location.href = res.url
        } else {
            //tell them the effed up
        }
    })
       
       }else if(name.toLowerCase()=="sign up"){
        alert('Handled SIGNUP');
        event.preventDefault();


       }else{
        alert(name + ':Handled FAILED');
       }
    }
    const inputFields = () =>{

        if(textInput.length > 0){

            return textInput.map(function(each){
                if(each.toLowerCase()=="confirm password"||each.toLowerCase()=="password"){
                    return(
                        <div class="form-group">
                        <div class="form-group">
                        <label>{each} </label>
                        </div>
                        <div class="form-group">
                        <input 
                        type="password"
                        name={each}
                        //onChange={}
                        //value={}
                        />
                        </div>
                        </div>
                    )

                }else{
                    return(
                        <div class="form-group">
                        <div class="form-group">
                        <label>{each}</label>
                        </div>
                        <div class="form-group">
                        <input
                        name={each}
                        //onChange={}
                        //value={}
                        />
                        </div>
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
                    <div class="form-group"><button class="btn btn-primary btn-block" onclick={each[1]} type="button">{each[0]}</button></div>
                )
            })
        } else {
            return []
        }
    }


    return (
        <div class="login-light">

        <form onSubmit={handleSubmit}>
        <h2>{name}</h2>
        {inputFields()}
        <div class="form-group"><button class="btn btn-primary btn-block" type="submit">{name}</button></div>
        {buttons()}
        </form>
        </div>
    );
}

export default basicform
