import React from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


var type = "LOGIN"
class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        login: "LOGIN"
    }
  }
 
  updateContent = () => {
      console.log(this.state.login)
      if(this.state.login == "LOGIN")this.setState({ login: "SIGNUP"});
 
      if(this.state.login == "SIGNUP")this.setState({ login: "LOGIN"});
    }
 

    render() {

    function handleClick(e) {
        type = "SIGNUP"
        console.log(type);
    
    }
    const { name } = this.props;
    return(
      <>
        <div className = "body">
        <h1>
          {name}
        </h1>
            <button type="button" onClick={this.updateContent} class="btn btn-primary">
      { this.state.login }
            </button>

           </div>
      </>
    );
  }
}

export default App;
