import React from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <div className = "body">
        <h1>
          {name}
        </h1>
        <button type="button" class="btn btn-primary">
          Login PAGE
        </button>
        </div>
      </>
    );
  }
}

export default Login;
