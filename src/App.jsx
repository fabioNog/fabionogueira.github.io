import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Sobre from './Components/Sobre'
import Home from './Components/Home'
import NavBar from'./Components/CustomNavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route path="/sobre" component={Sobre}/>
        </div>
      </Router>
    );
  }
}

export default App;
