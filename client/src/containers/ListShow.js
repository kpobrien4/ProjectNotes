import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getTrack } from '../actions';

export class ListShow extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getTrack(id)
  }

  render() {
    if(!this.props.loading && this.props.currentTrack ) {
      return (
        <div>
          <h3>{this.props.currentTrack.title }</h3>
          <p>{new Date(this.props.currentTrack.created_at).toLocaleString()}</p>
          <p>{this.props.currentTrack.notes }</p>
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

export default connect(mapStateToProps, { getTrack })(ListShow);