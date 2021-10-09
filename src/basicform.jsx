import React, {useState} from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function basicform(props) {
    const {name, textInput} = props

    function handleSubmit(event) {
        alert('An essay was submitted: ');
        event.preventDefault();
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

    return (
        <div class="login-light">

        <form onSubmit={handleSubmit}>
        <h2>{name}</h2>
        {inputFields()}
        <button type="submit">Submit</button>
        <div class="form-group"><button class="btn btn-primary btn-block" type="submit">{name}</button></div>
        </form>
        </div>
    );
}

export default basicform
