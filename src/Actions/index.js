import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";
import streams from "../API/streams";
import history from '../history'

export const SignIn = (UserID) => {
  return { type: SIGN_IN, payload: UserID };
};

export const SignOut = () => {
  return { type: SIGN_OUT };
};

export const createstreams = (formvalues) => {
  return async function (dispatch, getState) {
    const { userID }= getState().auth;
    //console.log(userID);
    const response = await streams.post("/streams", {...formvalues,userID} );

    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push('/');
  };
};

export const fetchstreams = () => {
  return async function (dispatch) {
    const response = await streams.get("/streams");
    
    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};

export const fetchstream = (id) => {
  return async function (dispatch) {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data });
  };
};

export const editstream = (id, formvalues) => {
  return async function (dispatch) {
    const response = await streams.patch(`/streams/${id}`, formvalues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push('/');
  };
};

export const deletestream = (id) => {
  return async function (dispatch) {
     await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
    history.push('/');
  };
};
