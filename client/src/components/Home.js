import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import List from "../containers/List"

export class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/tracks/new"><button class="right waves-effect waves-light btn-large light-blue darken-1 addbutton">Add Track</button></Link>
        <br></br>
        <h2 className="center">Welcome to TrackNotes</h2>
        <h4 class="center grey-text">Keep your projects on track</h4>
        <List></List>
      </div>
    )
  }
}

export default Home