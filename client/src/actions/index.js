

export const addTrack = ( track, history ) => {
    return dispatch => {
      return fetch('/tracks', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ track })
      })
      .then(resp => resp.json())
      .then(track => {
        dispatch({ type: "ADD_TRACK", track })
        history.push('/')
      })
    }
  }

  export const getTracks = () => {
    return dispatch => {
      dispatch({ type: "LOADING_TRACKS" })
      return fetch('/tracks')
        .then(resp => resp.json())
        .then(tracks => {
          return dispatch({ type: 'GET_TRACKS', tracks })
        })
    }
  }
  
  export const getTrack = id => {
    return dispatch => {
      dispatch({ type: "LOADING_TRACKS" });
      return fetch('/tracks/' + id)
        .then(resp => resp.json())
        .then( track => dispatch({ type: "GET_TRACK", track }))
    }
  }
  
  