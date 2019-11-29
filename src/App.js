import React ,{Component} from 'react';
import './App.css';
import { Button } from 'reactstrap';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { server } from "./constants";
import { connect } from 'react-redux';
import Login from './components/login/login';
import Register from './components/register/register';

 
class App extends Component {
  render() {
    return (
      <Router basename={process.env.REACT_APP_IS_PRODUCTION === 1 ? "/demo" : ""} >
        <div className="container-fluid">
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>          
        </div>
      </Router>
    )
  }
}

export default App;
