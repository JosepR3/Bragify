import * as AuthTypes from "./auth-types";
import api from "../../api";
import * as auth from "../../services/auth";

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

export function signUpWithGoogleRequest() {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest());
    try {
      await auth.singInWithGoogle();
    } catch (error) {
      dispatch(signUpError(error.message));
    }
  };
}

export function signUpWithEmailRequest(user) {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest());
    try {
      const response = await auth.singUpWithEmailAndPassword(user.email, user.password);
      // if (response !== null) {
      //   dispatch(UpdateUsersync(user))
      // }
    } catch (error) {
      dispatch(signUpError(error.message));
    }
  }
}


// export function getUsername(username){
  //   return username;
  //   }
  
  export function UpdateUsersync(user) {
    return async function syncSignInThunk(dispatch) {
      const token = await auth.getCurrentUserToken();
      const response = await api.update({
        Authorization: `Bearer ${token}`,
      },user);
      
      if (response) {
        console.log(response);
      }
      
      // return dispatch(console.log(response.data));
    };
    
  }

  export function signInWithEmailRequest(email, password) {
    return async function signUpThunk(dispatch) {
      dispatch(signUpRequest());
      try {
        await auth.singInWithEmailAndPassword(email, password);
      } catch (error) {
        dispatch(signUpError(error.message));
      }
    };
  }
  
  export function signOut() {
    return async function signOutThunk(dispatch) {
      dispatch(signOutRequest());
      
    const token = await auth.getCurrentUserToken();
    const response = await api.signOut({
      Authorization: `Bearer ${token}`,
    });

    if (response.errorMessage) {
      return dispatch(signOutError(response.errorMessage));
    }

    auth.signOut();

    return dispatch(signOutSuccess());
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

    return dispatch(signUpSuccess(response.data));
  };
  
}

export const updateSuccess = (user) => ({
  type: AuthTypes.UPDATE_SUCCESS,
  payload: user,
});
export const signUpSuccess = (user) => ({
  type: AuthTypes.SIGN_UP_SUCCESS,
  payload: user,
});


export const signOutRequest = () => ({
  type: AuthTypes.SIGN_OUT_REQUEST,
});


export const signOutError = (message) => ({
  type: AuthTypes.SIGN_OUT_ERROR,
  payload: message,
});

export const signOutSuccess = () => ({
  type: AuthTypes.SIGN_OUT_SUCCESS,
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
