import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Form from './containers/Form';
import List from './containers/List';
import ListShow from './containers/ListShow';
import Errors from './components/Errors';
import './App.css';

class App extends Component {
  render(){
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tracks" component={List} />
          <Route exact path="/tracks/new" component={Form} />
          <Route exact path="/tracks/:id" component={ListShow} />
          <Route component={Errors} />
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;