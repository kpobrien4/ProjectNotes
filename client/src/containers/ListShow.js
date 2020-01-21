import React, { Component } from 'react'
import { connect } from 'react-redux';
import Nav from "../components/Nav"
import { deleteTrack } from '../actions';

import { getTrack } from '../actions';

export class ListShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      notes: ''
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getTrack(id)
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.deleteTrack( this.state, this.props.currentTrack.id, this.props.history )
  }

  render() {
    if(!this.props.loading && this.props.currentTrack ) {
      return (
        <div>
          
          <h3 class="title">{ this.props.currentTrack.title }</h3>
          <p>{new Date(this.props.currentTrack.created_at).toLocaleString()}</p>
          <p>{this.props.currentTrack.notes }</p>
          <form id="track-form" onSubmit={ this.handleSubmit }>
          <input type="submit" value="Delete Track" className="btn light-blue darken-1 addbutton" /> 
          </form>
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.tracksReducer.loading,
    currentTrack: state.tracksReducer.currentTrack
  }
}

export default connect(mapStateToProps, { getTrack, deleteTrack })(ListShow);