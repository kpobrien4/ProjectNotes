import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <nav className="light-blue darken-1">
        <div className="container">
          <Link to="/" className="brand-logo">Home</Link>
          <ul className="right">
            <li><Link to="/blogs/new">Create</Link></li>
            <li><Link to="/blogs">View</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav