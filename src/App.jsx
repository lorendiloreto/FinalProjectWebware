import React from "react";
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <Router>
        <div className = "body">
        <h1>
          {name}
        </h1>
        <Link to={'/login'}>
            <button type="button" class="btn btn-primary">
                This is a bootstrap button
            </button>
        </Link> 
        <Link to={'/signup'}>
            <button type="button" class="btn btn-primary">
                go to signup
            </button>
        </Link><Switch>
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
        </Switch>
            </div>
      </Router>
    );
  }
}

export default App;
