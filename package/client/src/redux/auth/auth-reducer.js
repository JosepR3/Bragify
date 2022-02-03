import * as AuthTypes from "./auth-types";

export const AuthInitialState = {
  isSigningUp: false,
  signUpError: null,
  isSigningOut: false,
  signOutError: null,
  isAuthenticated: false,
  isSendingPasswordReset: false,
  isLoading: false,
  isEditing: false,
  editSuccess: false,
  editMessage: null,
  passwordResetError: null,
  passwordResetSent: false,
  currentUser: {
    email: null,
    username: null,
    firstName: null,
    lastName: null,
  },
  
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
    case AuthTypes.EDIT_PROFILE: {
      return {
        ...state,
        isEditing: true
      };
    }
    case AuthTypes.SIGN_UP_SUCCESS: {
      const user = action.payload
      return {
        ...state,
        isAuthenticated: true,
        isSigningUp: false,
        signUpError: null,
        currentUser: {
          email: user.email,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        username: action.payload,
        isLoading: false,
      };
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
    case AuthTypes.EDIT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthTypes.EDIT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        editSuccess: true,
        editMessage: action.payload,
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
