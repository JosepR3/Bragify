import * as AuthTypes from "./auth-types";

export const AuthInitialState = {
  isSigningUp: false,
  signUpError: null,
  isSigningOut: false,
  signOutError: null,
  isAuthenticated: false,
  isSendingPasswordReset: false,
  isLoading: false,
  passwordResetError: null,
  passwordResetSent: false,
  currentUser: {
    email: null,
  },
  username: null,
};

const AuthReducer = (state = AuthInitialState, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        signUpError: null,
        isLoading: true,
      };
    }
    case AuthTypes.SIGN_UP_ERROR: {
      return {
        ...state,
        isSigningUp: false,
        signUpError: action.payload,
        isLoading: false,
      };
    }
    case AuthTypes.SIGN_UP_SUCCESS: {
      localStorage.setItem("currentUser", action.payload);
      return {
        ...state,
        isAuthenticated: true,
        isSigningUp: false,
        signUpError: null,
        currentUser: {
          email: action.payload,
        },
        isLoading: false,
      };
    }
    case AuthTypes.UPDATE_SUCCESS: {
      console.log(action.payload)
      // return {
      //   ...state,
      //   isAuthenticated: true,
      //   isSigningUp: false,
      //   signUpError: null,
      //   currentUser: {
      //     email: action.payload,
      //   },
      //   isLoading: false,
      // };
    }
    case AuthTypes.SIGN_OUT_REQUEST: {
      return {
        ...state,
        isSigningOut: true,
        signOutError: null,
      };
    }
    case AuthTypes.SIGN_OUT_ERROR: {
      return {
        ...state,
        isSigningOut: false,
        signOutError: action.payload,
      };
    }
    case AuthTypes.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        isSigningOut: false,
        signOutError: null,
        isAuthenticated: false,
        currentUser: {
          email: null,
        },
        username: null
      };
    }
    case AuthTypes.SEND_PASSWORD_RESET_EMAIL_REQUEST: {
      return {
        ...state,
        isSendingPasswordReset: true,
        passwordResetError: null,
        passwordResetSent: false,
      };
    }
    case AuthTypes.SEND_PASSWORD_RESET_EMAIL_ERROR: {
      return {
        ...state,
        isSendingPasswordReset: false,
        passwordResetError: action.payload,
        passwordResetSent: false,
      };
    }
    case AuthTypes.SEND_PASSWORD_RESET_EMAIL_SUCCESS: {
      return {
        ...state,
        isSendingPasswordReset: false,
        passwordResetError: null,
        passwordResetSent: true,
      };
    }
    case AuthTypes.RESET_AUTH_STATE: {
      return {
        ...state,
        isSigningUp: false,
        signUpError: null,
        isSigningOut: false,
        signOutError: null,
        isSendingPasswordReset: false,
        passwordResetError: null,
        passwordResetSent: false,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
