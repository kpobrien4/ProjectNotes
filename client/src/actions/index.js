const baseUrl = 'http://localhost:3001'

export const addProject = ( project, history ) => {
    return dispatch => {
      return fetch(baseUrl + '/projects', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ project })
      })
      .then(resp => resp.json())
      .then(project => {
        dispatch({ type: "ADD_project", project })
        history.push('/projects')
      })
    }
  }