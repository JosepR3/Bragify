import * as AuthTypes from "./auth-types";
import api from "../../api";
import * as auth from "../../services/auth";

// -----------------CHANGE STATE ACTIONS
export const resetStoreAndLogOut = () => ({
  type: AuthTypes.RESET_STORE_AND_LOG_OUT,
});

export const signUpRequest = (user) => ({
  type: AuthTypes.SIGN_UP_REQUEST,
  payload: user,
});

export const signUpError = (message) => ({
  type: AuthTypes.SIGN_UP_ERROR,
  payload: message,
});

export const signOutError = (message) => ({
  type: AuthTypes.SIGN_OUT_ERROR,
  payload: message,
});

export const signOutSuccess = () => ({
  type: AuthTypes.SIGN_OUT_SUCCESS,
});

export const editRequest = () => ({
  type: AuthTypes.EDIT_REQUEST,
});

export const editSuccess = (response) => ({
  type: AuthTypes.EDIT_SUCCESS,
  payload: response.data.message,
});

export function sendPasswordResetEmail(email) {
  return async function sendPasswordResetEmailRequestThunk(dispatch) {
    dispatch(sendPasswordResetEmailRequest());
    try {
      await auth.sendPasswordResetEmail(email);
      dispatch(sendPasswordResetEmailSuccess());
    } catch (error) {
      dispatch(sendPasswordResetEmailError(error.message));
    }
    return dispatch(sendPasswordResetEmailSuccess());
  };
}

export const sendPasswordResetEmailRequest = () => ({
  type: AuthTypes.SEND_PASSWORD_RESET_EMAIL_REQUEST,
});

export const sendPasswordResetEmailError = (message) => ({
  type: AuthTypes.SEND_PASSWORD_RESET_EMAIL_ERROR,
  payload: message,
});

export const sendPasswordResetEmailSuccess = () => ({
  type: AuthTypes.SEND_PASSWORD_RESET_EMAIL_SUCCESS,
});

export const resetAuthState = () => ({
  type: AuthTypes.RESET_AUTH_STATE,
});

export const signUpSuccess = (user) => ({
  type: AuthTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signOutRequest = () => ({
  type: AuthTypes.SIGN_OUT_REQUEST,
});

export const editProfile = () => ({
  type: AuthTypes.EDIT_PROFILE,
});

// -----------------LOGIC ACTIONS

export function signUpWithGoogleRequest() {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest());
    try {
      await auth.signInWithGoogle();
      console.log("signin in with Google");
      dispatch(signUpSuccess());
    } catch (error) {
      console.log(error);
      // dispatch(signUpError(error.message));
    }
  };
}

export function signUpWithEmailRequest(user) {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest());
    try {
      await auth.singUpWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      dispatch(signUpError(error.message));
    }
  };
}

export function signInWithEmailRequest(email, password) {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest(email));
    try {
      await auth.singInWithEmailAndPassword(email, password);
    } catch (error) {
      dispatch(signUpError(error.message));
    }
  };
}

export function syncSignIn() {
  return async function syncSignInThunk(dispatch) {
    const token = await auth.getCurrentUserToken();
    if (!token) {
      return dispatch(signOutSuccess());
    }

    const response = await api.signUp({
      Authorization: `Bearer ${token}`,
    });

    if (response.errorMessage) {
      return dispatch(signUpError(response.errorMessage));
    }
    return dispatch(signUpSuccess(response.data.data));
  };
}

export function editUser(user) {
  return async function editUserThunk(dispatch) {
    dispatch(editRequest());
    const token = await auth.getCurrentUserToken();
    if (!token) {
      return dispatch(signOutSuccess());
    }
    const reqBody = {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      img:user.img
    };
    const response = await api.editUser({
      headers: { Authorization: `Bearer ${token}` },
      body: reqBody,
    });
    dispatch(editSuccess(response));
  };
}

export function signOut() {
  return async function signOutThunk(dispatch) {
    dispatch(signOutRequest());
    const token = await auth.getCurrentUserToken();
    if (!token) {
      return dispatch(signOutSuccess());
    }
    const response = await api.signOut({
      Authorization: `Bearer ${token}`,
    });

    if (response.errorMessage) {
      return dispatch(signOutError(response.errorMessage));
    }
    localStorage.removeItem("user");
    auth.signOut();
    return dispatch(signOutSuccess());
  };
}

export function getUser() {
  return async function getUserThunk(dispatch) {
    const token = await auth.getCurrentUserToken();
    if (!token) {
      return dispatch(signOutSuccess());
    }
    const response = await api.getUser({
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.setItem('user', JSON.stringify(response.data));
    dispatch(signUpSuccess(response.data));
  };
}