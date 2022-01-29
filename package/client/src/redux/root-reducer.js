import { combineReducers } from "redux";

import authReducer from "./auth/auth-reducer";
import songsReducer from "./songs/song-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  songs: songsReducer,
});

export default rootReducer;
