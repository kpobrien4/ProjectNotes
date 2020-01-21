import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (<div>
      <nav className="light-blue darken-1">
        <div className="container">
          <Link to="/" className="brand-logo">TrackNotes</Link>
          {/* <ul className="right">
            <li><Link to="/tracks/new">Create a Track</Link></li>
            <li><Link to="/tracks">View Tracks</Link></li>
          </ul> */}
        </div>
      </nav>
      <br></br>
      </div>
    )
  }
}

export default Nav