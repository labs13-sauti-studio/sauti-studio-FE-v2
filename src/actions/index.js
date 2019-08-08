import axios from "axios";

export const GET_CANVAS_START = "SAVE_CANVAS_START";
export const GET_CANVAS_SUCCESS = "SAVE_CANVAS_SUCCESS";
export const GET_CANVAS_FAILURE = "SAVE_CANVAS_FAILURE";

export const SAVE_CANVAS_START = "SAVE_CANVAS_START";
export const SAVE_CANVAS_SUCCESS = "SAVE_CANVAS_SUCCESS";
export const SAVE_CANVAS_FAILURE = "SAVE_CANVAS_FAILURE";


let productionServer = process.env.REACT_APP_BE_API_URL;


export const getCanvasById = (project_id1) => dispatch => {
  dispatch({ type: GET_CANVAS_START });
  let endpoint1;
  if(productionServer){
    endpoint1 = `${productionServer}/projects/${project_id1}`;
  }else{
    endpoint1 = `http://localhost:5000/projects/${project_id1}`;
  } 
  console.log("endpoint1",endpoint1);
  axios
    .get(
      endpoint1,
    )
    .then(response => {
      console.log("response",response);
      dispatch({ type: GET_CANVAS_SUCCESS, payload: response.data.graph_json});
    })
    .catch(err => dispatch({ type: GET_CANVAS_FAILURE, payload: err }));
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
// export const addNote = (userID, item) => dispatch => {
//   dispatch({ type: ADD_NOTE_START });
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