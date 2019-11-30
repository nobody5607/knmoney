import React ,{Component} from 'react';
import './App.css';
// import { Button } from 'reactstrap';

import { BrowserRouter as Router, Route } from "react-router-dom"; //Redirect
// import { server } from "./constants";
// import { connect } from 'react-redux';
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';
import Account from './components/account/account';
import AccountForm from './components/account-form/account-form';
import Category from './components/category/category';
import CategoryForm from './components/category-form/category-form';

 
class App extends Component {
  render() {
    return (
      <Router basename={process.env.REACT_APP_IS_PRODUCTION === 1 ? "/demo" : ""} >
        <div className="container-fluid">
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/account" component={Account}/>
          <Route path="/account/form" component={AccountForm}/>
          <Route exact={true} path="/category" component={Category}/>
          <Route path="/category/form" component={CategoryForm}/>

          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>          
        </div>
      </Router>
    )
  }
}

export default App;
