import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/tracks/new"><button class="right waves-effect waves-light btn-large light-blue darken-1">Add a Track</button></Link>
        <br></br>
        <h1 className="center">Welcome to TrackNotes!</h1>
        <h3 class="center grey-text">Keep your projects on track</h3>
      </div>
    )
  }
}

export default Home