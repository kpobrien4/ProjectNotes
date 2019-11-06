import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render(){
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/tracks" component={Tracks} />
          <Route exact path="/tracks/new" component={New} /> */}
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;