import axios from "axios";

export const GET_CANVAS_BY_ID_START = "GET_CANVAS_BY_ID_START";
export const GET_CANVAS_BY_ID_SUCCESS = "GET_CANVAS_BY_ID_SUCCESS";
export const GET_CANVAS_BY_ID_FAILURE = "GET_CANVAS_BY_ID_FAILURE";

export const SAVE_CANVAS_START = "SAVE_CANVAS_START";
export const SAVE_CANVAS_SUCCESS = "SAVE_CANVAS_SUCCESS";
export const SAVE_CANVAS_FAILURE = "SAVE_CANVAS_FAILURE";

export const SAVE_TITLE_START = "SAVE_TITLE_START";
export const SAVE_TITLE_SUCCESS = "SAVE_TITLE_SUCCESS";
export const SAVE_TITLE_FAILURE = "SAVE_TITLE_FAILURE";

export const GET_TITLE_BY_ID_START = "GET_TITLE_BY_ID_START";
export const GET_TITLE_BY_ID_SUCCESS = "GET_TITLE_BY_ID_SUCCESS";
export const GET_TITLE_BY_ID_FAILURE = "GET_TITLE_BY_ID_FAILURE";

export const GET_PROJECTS_BY_ID_START = "GET_PROJECTS_BY_ID_START";
export const GET_PROJECTS_BY_ID_SUCCESS = "GET_PROJECTS_BY_ID_SUCCESS";
export const GET_PROJECTS_BY_ID_FAILURE = "GET_PROJECTS_BY_ID_FAILURE";

export const ADD_PROJECT_START = "ADD_PROJECT_START";
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
export const ADD_PROJECT_FAILURE = "ADD_PROJECT_FAILURE";

export const SET_PROJECT_BY_ID_START = "SET_PROJECT_BY_ID_START";
export const SET_PROJECT_BY_ID_SUCCESS = "SET_PROJECT_BY_ID_SUCCESS";

export const DELETE_PROJECT_START = "DELETE_PROJECT_START";
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";
export const DELETE_PROJECT_FAILURE = "DELETE_PROJECT_FAILURE";

export const SET_DELETE_STATE_SUCCESS = "SET_DELETE_STATE_SUCCESS";
export const SET_SIMULATE_STATE_SUCCESS = "SET_SIMULATE_STATE_SUCCESS";
export const UPDATE_CANVAS_WITHOUT_SAVE = "UPDATE_CANVAS_WITHOUT_SAVE";

export const PUBLISH_CANVAS_START = "PUBLISH_CANVAS_START"
export const PUBLISH_CANVAS_SUCCESS = "PUBLISH_CANVAS_SUCCESS"
export const PUBLISH_CANVAS_FAILURE = "PUBLISH_CANVAS_FAILURE"

export const SET_USER_BY_ID_START = "SET_USER_BY_ID_START";
export const SET_USER_BY_ID_SUCCESS = "SET_USER_BY_ID_SUCCESS";

let productionServer = process.env.REACT_APP_BE_API_URL;

export const getProjectsByUserId = (user_id) => dispatch => {
  dispatch({ type: GET_PROJECTS_BY_ID_START });
  let endpoint;
  if(productionServer){
    endpoint = `${productionServer}/projects/user/${user_id}`;
  }else{
    endpoint = `http://localhost:5000/projects/user/${user_id}`;
  } 
  axios
    .get(
      endpoint,
    )
    .then(response => {
      dispatch({ type: GET_PROJECTS_BY_ID_SUCCESS, payload: response.data});
    })
    .catch(err => dispatch({ type: GET_PROJECTS_BY_ID_FAILURE, payload: err }));
};

export const setProjectId = ( project_id) => dispatch => {
  let promise = new Promise(function(resolve, reject) {
      resolve(dispatch({ type: SET_PROJECT_BY_ID_START }));
  });
  promise.then(function() {
    dispatch({ type: SET_PROJECT_BY_ID_SUCCESS, payload: project_id});
  });
};

export const setUserId = ( user_id, loggedIn) => dispatch => {
  let promise = new Promise(function(resolve, reject) {
      resolve(dispatch({ type: SET_USER_BY_ID_START }));
  });
  promise.then(function() {
    dispatch({ type: SET_USER_BY_ID_SUCCESS, payload: {user_id: user_id,loggedIn: loggedIn}});
  });
};

export const getCanvasById = (project_id1) => dispatch => {
  dispatch({ type: GET_CANVAS_BY_ID_START });
  let endpoint1;
  if(productionServer){
    endpoint1 = `${productionServer}/projects/${project_id1}`;
  }else{
    endpoint1 = `http://localhost:5000/projects/${project_id1}`;
  } 
  axios
    .get(
      endpoint1,
    )
    .then(response => {
      dispatch({ type: GET_CANVAS_BY_ID_SUCCESS, payload: response.data});
    })
    .catch(err => dispatch({ type: GET_CANVAS_BY_ID_FAILURE, payload: err }));
};

export const getTitleById = (project_id1) => dispatch => {
  dispatch({ type: GET_TITLE_BY_ID_START });
  let endpoint1;
  if(productionServer){
    endpoint1 = `${productionServer}/projects/${project_id1}`;
  }else{
    endpoint1 = `http://localhost:5000/projects/${project_id1}`;
  } 
  axios
    .get(
      endpoint1,
    )
    .then(response => {
      dispatch({ type: GET_TITLE_BY_ID_SUCCESS, payload: response.data});
    })
    .catch(err => dispatch({ type: GET_TITLE_BY_ID_FAILURE, payload: err }));
  };
  
export const saveCanvas = (objUpdate, project_id) => dispatch => {
  dispatch({ type: SAVE_CANVAS_START });
  let endpoint;
  if(productionServer){
    endpoint = `${productionServer}/projects/${project_id}`;
  }else{
    endpoint = `http://localhost:5000/projects/${project_id}`;
  } 
  axios
    .put(
      endpoint,
      objUpdate
    )
    .then(response => {
      dispatch({
        type: SAVE_CANVAS_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: SAVE_CANVAS_FAILURE, payload: err }));
};

export const publishCanvas = (objUpdate, project_id) => dispatch => {
  dispatch({ type: PUBLISH_CANVAS_START });
  let endpoint;
  if(productionServer){
    endpoint = `${productionServer}/projects/publish/${project_id}`;
  }else{
    endpoint = `http://localhost:5000/projects/publish/${project_id}`;
  } 
  axios
    .post(endpoint,
      objUpdate
    ).then(response => {
      dispatch({
        type: PUBLISH_CANVAS_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: PUBLISH_CANVAS_FAILURE, payload: err }));
        
  }

export const saveTitle = (objUpdate, project_id) => dispatch => {
  dispatch({ type: SAVE_TITLE_START });
  let endpoint;
  if(productionServer){
    endpoint = `${productionServer}/projects/${project_id}`;
  }else{
    endpoint = `http://localhost:5000/projects/${project_id}`;
  } 
  axios
    .put(
      endpoint,
      objUpdate
    ).then(response => {
      dispatch({
      type: SAVE_TITLE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: SAVE_TITLE_FAILURE, payload: err }));
};

export const addProjectByUserId = (item) => dispatch => {
  dispatch({ type: ADD_PROJECT_START });
  let endpoint;
  if(productionServer){
    endpoint = `${productionServer}/projects/`;
  }else{
    endpoint = `http://localhost:5000/projects/`;
  }
  axios
    .post(
      endpoint,
      item
    )
    .then(response => {
      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: ADD_PROJECT_FAILURE, payload: err }));
};

export const setDeleteState = (delete_project) => dispatch => {
  dispatch({ type: SET_DELETE_STATE_SUCCESS, payload: !delete_project});
};

export const setSimulationState = (simulate_project) => dispatch => {
  dispatch({ type: SET_SIMULATE_STATE_SUCCESS, payload: !simulate_project});
};

export const updateCanvasWithoutSave = (json) => dispatch => {
  dispatch({ type: UPDATE_CANVAS_WITHOUT_SAVE, payload: json});
};

export const deleteProject = (project_id, props) => dispatch => {
  dispatch({ type: DELETE_PROJECT_START });
  let endpoint;
  if(productionServer){
    endpoint = `${productionServer}/projects/${project_id}`;
  }else{
    endpoint = `http://localhost:5000/projects/${project_id}`;
  }
  axios
    .delete(
      endpoint,
    )
    .then(response => {
      dispatch({
        type: DELETE_PROJECT_SUCCESS,
        payload: response.data
      });
      props.history.push("/profile");
    })
    .catch(err => dispatch({ type: DELETE_PROJECT_FAILURE, payload: err }));
};

// export const addProjectByUserId = (item) => dispatch => {
//   dispatch({ type: ADD_PROJECT_START });
//   const token = localStorage.getItem("jwt");
//   const options = {
//     headers: {
//       Authorization: token
//     }
//   };
//   axios
//     .post(
//       `https://one-line-a-day-2.herokuapp.com/api/users/${userID}/entries`,
//       item,
//       options
//     )
//     .then(response => {
//       console.log(response);
//       dispatch({
//         type: ADD_NOTE_SUCCESS,
//         payload: response.data
//       });
//     })
//     .catch(err => dispatch({ type: ADD_NOTE_FAILURE, payload: err }));
// };

// export const getNotes = userID => dispatch => {
//   dispatch({ type: FETCH_NOTES_START });
//   console.log(userID);
//   const token = localStorage.getItem("jwt");
//   const options = {
//     headers: {
//       Authorization: token
//     }
//   };
//   axios
//     .get(
//       `https://one-line-a-day-2.herokuapp.com/api/users/${userID}/entries`,
//       options
//     )
//     .then(response => {
//       console.log("fetch finished");
//       dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
//     })
//     .catch(err => dispatch({ type: FETCH_NOTES_FAILURE, payload: err }));
// };

// export const getNotesBySort = sortType => dispatch => {
//   dispatch({ type: FETCH_NOTES_BY_SORT_START });
//   axios
//     .get("https://fe-notes.herokuapp.com/note/get/all")
//     .then(response => {
//       console.log("fetch finished");
//       let result = response.data.sort(sortType);
//       console.log(result);
//       dispatch({
//         type: FETCH_NOTES_BY_SORT_SUCCESS,
//         payload: result
//       });
//     })
//     .catch(err =>
//       dispatch({ type: FETCH_NOTES_BY_SORT_FAILURE, payload: err })
//     );
// };

// export const getNotesById = (userID, entryID) => dispatch => {
//   dispatch({ type: FETCH_NOTES_BY_ID_START });
//   const token = localStorage.getItem("jwt");
//   const options = {
//     headers: {
//       Authorization: token
//     }
//   };
//   axios
//     .get(
//       `https://one-line-a-day-2.herokuapp.com/api/users/${userID}/entries/${entryID}`,
//       options
//     )
//     .then(response => {
//       console.log("fetch finished", response.data);
//       console.log(userID, entryID);
//       dispatch({ type: FETCH_NOTES_BY_ID_SUCCESS, payload: response.data[0] });
//     })
//     .catch(err => dispatch({ type: FETCH_NOTES_BY_ID_FAILURE, payload: err }));
// };

// export const deleteNote = (userID, entryID) => dispatch => {
//   dispatch({ type: DELETE_NOTE_START });
//   const token = localStorage.getItem("jwt");
//   const options = {
//     headers: {
//       Authorization: token
//     }
//   };
//   axios
//     .delete(
//       `https://one-line-a-day-2.herokuapp.com/api/users/${userID}/entries/${entryID}`,
//       options
//     )
//     .then(response => {
//       console.log(response);
//       dispatch({
//         type: DELETE_NOTE_SUCCESS,
//         payload: response.data
//       });
//     })
//     .catch(err => dispatch({ type: DELETE_NOTE_FAILURE, payload: err }));
// };

// export const editNote = (userID, entryID, item) => dispatch => {
//   dispatch({ type: EDIT_NOTE_START });
//   const token = localStorage.getItem("jwt");
//   const options = {
//     headers: {
//       Authorization: token
//     }
//   };
//   axios
//     .put(
//       `https://one-line-a-day-2.herokuapp.com/api/users/${userID}/entries/${entryID}`,
//       item,
//       options
//     )
//     .then(response => {
//       console.log(response);
//       dispatch({
//         type: EDIT_NOTE_SUCCESS,
//         payload: response.data
//       });
//     })
//     .catch(err => dispatch({ type: EDIT_NOTE_FAILURE, payload: err }));
// };

// export const login = (item, props) => dispatch => {
//   dispatch({ type: LOGIN_USER_START });
//   axios
//     .post("https://one-line-a-day-2.herokuapp.com/api/login", item)
//     .then(res => {
//       console.log(res);
//       localStorage.setItem("jwt", res.data.token);
//       console.log(res.data.id);
//       dispatch({
//         type: LOGIN_USER_SUCCESS,
//         payload: res.data.id
//       });
//     }).then(()=>{
//       props.history.push("/");
//     })
//     .catch(err => dispatch({ type: LOGIN_USER_FAILURE, payload: err }));
// };

// export const register = (item, props) => dispatch => {
//   dispatch({ type: REGISTER_USER_START });
//   axios
//     .post("https://one-line-a-day-2.herokuapp.com/api/register", item)
//     .then(res => {
//       console.log(res);
//       console.log(res.data.id);
//       dispatch({
//         type: REGISTER_USER_SUCCESS,
//         payload: res.data.id
//       });
//     }).then(()=>{
//       props.history.push("/login");
//     })
//     .catch(err => dispatch({ type: REGISTER_USER_FAILURE, payload: err }));
// };

// export const logOFF = () => dispatch => {
//   localStorage.removeItem("jwt");
//   dispatch({
//     type: LOGOFF_USER_SUCCESS
//   });
// };