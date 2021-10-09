import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function basicform(props) {
    const {name, fieldnames} = props

    return (
        <form onSubmit={}>
            <label>{fieldnames[0]}</label>
            <input
                name={fieldnames[0]}
                onChange={}
                value={}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default basicform
