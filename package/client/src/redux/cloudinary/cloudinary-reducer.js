import {
  SET_TRACK_REQUEST,
  SET_TRACK_ERROR,
  SET_TRACK_SUCCESS,
  SET_IMAGE_REQUEST,
  SET_IMAGE_ERROR,
  SET_IMAGE_SUCCESS
} from "./cloudinary-types";

import initialState from "./cloudinary-state";

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACK_REQUEST: {
      return {
      };
    }
    case SET_TRACK_ERROR: {
      return {
      };
    }
    case EDIT_PROFILE: {
      return {
      };
    }
    case SET_TRACK_SUCCESS: {
      return {
      };
    }
    case SET_IMAGE_REQUEST: {
      return {
      };
    }
    case SET_IMAGE_ERROR: {
      return {
      };
    }
    case SET_IMAGE_SUCCESS: {
      return {
      };
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;