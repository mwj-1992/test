import React, {Component} from 'react';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import './App.css';
import {FirstQuestion,SecondQuestion} from './Questions.js';
import FirstStep from './PersonalInfoForm.js';
import {BrowserRouter as Router, Route, Switch,NavLink} from 'react-router-dom';
window.$= $;
window.API = process.env.NODE_ENV == 'development' ? "http://localhost:8080/test/" : "/test/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user:{}
    }
  }
  
  routerChanged = ()=>{
    window.$('html,body').animate({'scrollTop':"0px"},50);
  }
  
  render() {
    return (
      <div >
        <nav className="navbar navbar-light ">
            <NavLink activeClassName="selected" className="navbar-brand " to="/test/"><img src={logo}/></NavLink>
            <NavLink activeClassName="selected" className="navbar-brand " to="/test/whoami">Who am i ?</NavLink>
            <NavLink activeClassName="selected" className="navbar-brand " to="/test/first_question">First Question</NavLink>
            <NavLink activeClassName="selected" className="navbar-brand " to="/test/second_question">Second Question</NavLink>
        </nav>
      <Router basename={process.cwd()}>
        <Switch >
              <Route path={`${process.env.PUBLIC_URL}/first_question`}   render={(props)=><FirstQuestion classes=""  {...props}  />}/>
              <Route path={`${process.env.PUBLIC_URL}/second_question`}  render={(props)=><SecondQuestion classes=""  {...props}/>}/>
              <Route path={`${process.env.PUBLIC_URL}/whoami`}  render={(props)=><FirstStep classes=""  {...props}  user={this.state.user}/>}/>
              <Route path={`${process.env.PUBLIC_URL}/`} render={(props)=><FirstStep classes=""  {...props}  user={this.state.user}/>}/>

        </Switch>
        </Router>
      </div>
    );
  }
}
export default App;