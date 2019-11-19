const baseUrl = 'http://localhost:3001'

export const addTrack = ( track, history ) => {
    return dispatch => {
      return fetch(baseUrl + '/tracks', {
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
        history.push('/tracks')
      })
    }
  }

  export const getTracks = () => {
    return dispatch => {
      dispatch({ type: "LOADING_TRACKS" })
      return fetch(baseUrl + '/tracks')
        .then(resp => resp.json())
        .then(tracks => {
          return dispatch({ type: 'GET_TRACKS', tracks })
        })
    }
  }
  
  export const getTrack = id => {
    return dispatch => {
      dispatch({ type: "LOADING_TRACKS" });
      return fetch(baseUrl + '/tracks/' + id)
        .then(resp => resp.json())
        .then( track => dispatch({ type: "GET_TRACK", track }))
    }
  }
  
  