import { combineReducers } from "redux";

import authReducer from "./auth/auth-reducer";
import tracksReducer from "./tracks/tracks-reducer";
import playlistsReducer from "./playlists/playlists-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  tracks: tracksReducer,
  playlists: playlistsReducer
});

export default rootReducer;
