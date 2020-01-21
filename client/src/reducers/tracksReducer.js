const initialState = {
  tracks: [],
  loading: false,
  tracksLoaded: false,
  currentTrack: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "GET_TRACKS":
      return {
        ...state,
        tracks: action.tracks,
        loading: false,
        tracksLoaded: true
      }
    case "GET_TRACK":
      return {
        ...state,
        loading: false,
        currentTrack: action.track
      }
    case "LOADING_TRACKS":
      return {
        ...state,
        loading: true
      }
    case "ADD_TRACK":
      return {
        ...state,
        tracks: [...state.tracks, action.track]
      }
     case 'DELETE_TRACK':
         return {
           ...state,
           tracks: state.tracks.filter(track => track.id !== action.id)
        }
    default:
      return state;
  }
}