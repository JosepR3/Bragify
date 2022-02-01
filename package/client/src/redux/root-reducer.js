import { combineReducers } from "redux";

import authReducer from "./auth/auth-reducer";
import tracksReducer from "./tracks/tracks-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  tracks: tracksReducer,
});

export default rootReducer;
