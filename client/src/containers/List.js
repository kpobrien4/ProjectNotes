import React, { Component } from 'react'
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';

import { getTracks } from '../actions';

class List extends Component {
  componentDidMount() {
    if(!this.props.tracksLoaded) {
      this.props.getTracks();
    }
  }

  render() {
    if( !this.props.loading ) {
      const tracks = this.props.tracks.map(( track, i ) => ( 
          <ListItem key={i}
                    title={ track.title }
                    id={ track.id }
                    created_at={ track.created_at }
          />
      ))
      return (
          <div className="track-lists">
            <h3>List of Tracks:</h3>
            { tracks }
          </div>
      )
    } else {
      return (
        <div className="track-lists">
          <h3>Loading...</h3>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracksReducer.tracks,
    loading: state.tracksReducer.loading,
    tracksLoaded: state.tracksReducer.trackLoaded
  }
}

export default connect(mapStateToProps, { getTracks })(List);