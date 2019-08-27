import {
  SAVE_CANVAS_START,
  SAVE_CANVAS_SUCCESS,
  SAVE_CANVAS_FAILURE,
  GET_CANVAS_BY_ID_START,
  GET_CANVAS_BY_ID_SUCCESS,
  GET_CANVAS_BY_ID_FAILURE,
  GET_PROJECTS_BY_ID_START,
  GET_PROJECTS_BY_ID_SUCCESS,
  GET_PROJECTS_BY_ID_FAILURE,
  ADD_PROJECT_START,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  SET_PROJECT_BY_ID_START,
  SET_PROJECT_BY_ID_SUCCESS,
  DELETE_PROJECT_START,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  SET_DELETE_STATE_SUCCESS,
  SET_SIMULATE_STATE_SUCCESS,
  UPDATE_CANVAS_WITHOUT_SAVE
  } from "../actions";

  const initialState = {
    user_id: 1,
    projects: null,
    project_id: 1,
    project_title: null,
    graph_json: null,
    fetching: false,
    added_project: false,
    error: null,
    loggedIn: false,
    fetchingProjectId: false,
    saving_canvas: false,
    delete_project: false,
    simulate_project: false
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_CANVAS_START:
        return {
          ...state,
          saving_canvas: true
        };
      case SAVE_CANVAS_SUCCESS:
        return {
          ...state,
          saving_canvas: false,
          error: false
        };
      case SAVE_CANVAS_FAILURE:
        return {
          ...state,
          saving_canvas: false,
          error: action.payload
        };
      case GET_CANVAS_BY_ID_START:
        return {
          ...state,
          fetching: true
        };
      case GET_CANVAS_BY_ID_SUCCESS:
        return {
          ...state,
          error: null,
          fetching: false,
          graph_json: action.payload.graph_json,
          project_title: action.payload.project_title
        };
      case GET_CANVAS_BY_ID_FAILURE:
        return {
          ...state,
          fetching: false,
          error: action.payload
        };
      case GET_PROJECTS_BY_ID_START:
        return {
          ...state,
          fetching: true
        };
      case GET_PROJECTS_BY_ID_SUCCESS:
        return {
          ...state,
          error: null,
          fetching: false,
          projects: action.payload
        };
      case GET_PROJECTS_BY_ID_FAILURE:
        return {
          ...state,
          fetching: false,
          error: action.payload,
          projects: null
        };
      case ADD_PROJECT_START:
        return {
          ...state,
          added_project: true,
          fetching: true,
        };
      case ADD_PROJECT_SUCCESS:
        return {
          ...state,
          added_project: false,
          fetching: false,
          error: false
        };
      case ADD_PROJECT_FAILURE:
        return {
          ...state,
          added_project: false,
          fetching: false,
          error: action.payload
        };
      case SET_PROJECT_BY_ID_START:
        return {
          ...state,
          fetchingProjectId: true
        };
      case SET_PROJECT_BY_ID_SUCCESS:
        return {
          ...state,
          fetchingProjectId: false,
          project_id: action.payload
        };
      case SET_DELETE_STATE_SUCCESS:
        return {
          ...state,
          delete_project: action.payload
        };
      case SET_SIMULATE_STATE_SUCCESS:
        return {
          ...state,
          simulate_project: action.payload
        };
      case DELETE_PROJECT_START:
        return {
          ...state,
          fetching: true
        };
      case DELETE_PROJECT_SUCCESS:
        return {
          ...state,
          fetching: false,
          delete_project: false,
          error: false
        };
      case DELETE_PROJECT_FAILURE:
        return {
          ...state,
          fetching: false,
          error: action.payload
        };
        case UPDATE_CANVAS_WITHOUT_SAVE:
          return {
            ...state,
            graph_json: action.payload
          };



      // case FETCH_NOTES_BY_SORT_START:
      //   return {
      //     ...state,
      //     fetching: true
      //   };
      // case FETCH_NOTES_BY_SORT_SUCCESS:
      //   return {
      //     ...state,
      //     error: null,
      //     fetching: false,
      //     notes: action.payload
      //   };
      // case FETCH_NOTES_BY_SORT_FAILURE:
      //   return {
      //     ...state,
      //     fetching: false,
      //     error: action.payload
      //   };
      // case FETCH_NOTES_BY_ID_START:
      //   return {
      //     ...state,
      //     fetching: true
      //   };
      // case FETCH_NOTES_BY_ID_SUCCESS:
      //   return {
      //     ...state,
      //     error: null,
      //     fetching: false,
      //     note: action.payload
      //   };
      // case FETCH_NOTES_BY_ID_FAILURE:
      //   return {
      //     ...state,
      //     fetching: false,
      //     error: action.payload
      //   };
      // case DELETE_NOTE_START:
      //   return {
      //     ...state,
      //     fetching: true
      //   };
      // case DELETE_NOTE_SUCCESS:
      //   return {
      //     ...state,
      //     fetching: false,
      //     error: false
      //   };
      // case DELETE_NOTE_FAILURE:
      //   return {
      //     ...state,
      //     fetching: false,
      //     error: action.payload
      //   };
      // case EDIT_NOTE_START:
      //   return {
      //     ...state,
      //     fetching: true
      //   };
      // case EDIT_NOTE_SUCCESS:
      //   return {
      //     ...state,
      //     fetching: false,
      //     error: false
      //   };
      // case EDIT_NOTE_FAILURE:
      //   return {
      //     ...state,
      //     fetching: false,
      //     error: action.payload
      //   };
      // case LOGIN_USER_START:
      //   return {
      //     ...state,
      //     fetching: true
      //   };
      // case LOGIN_USER_SUCCESS:
      //   return {
      //     ...state,
      //     fetching: false,
      //     error: false,
      //     userID: action.payload,
      //     loggedIn: true
      //   };
      // case LOGIN_USER_FAILURE:
      //   return {
      //     ...state,
      //     fetching: false,
      //     error: action.payload,
      //     loggedIn: false
      //   };
      //   case REGISTER_USER_START:
      //   return {
      //     ...state,
      //     fetching: true
      //   };
      // case REGISTER_USER_SUCCESS:
      //   return {
      //     ...state,
      //     fetching: false,
      //     error: false,
      //     userID: null,
      //     loggedIn: false
      //   };
      // case REGISTER_USER_FAILURE:
      //   return {
      //     ...state,
      //     fetching: false,
      //     error: action.payload,
      //     loggedIn: false
      //   };
      // case LOGOFF_USER_SUCCESS:
      // return initialState;
      default:
        return state;
    }
  };
  
  export default Reducer;
  