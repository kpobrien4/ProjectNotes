import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import List from "../containers/List"

export class Home extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h2 className="center">Welcome to ProjectNotes</h2>
        <h4 class="center grey-text">Keep your music projects on track</h4>
        <Link to="/tracks/new"><i class="material-icons addbutton right medium">add</i></Link>
        <List></List>
      </div>
    )
  }
}

export default Home