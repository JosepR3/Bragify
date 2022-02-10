import { combineReducers } from "redux";

import authReducer from "./auth/auth-reducer";
import tracksReducer from "./tracks/tracks-reducer";
import playlistsReducer from "./playlists/playlists-reducer";
import searchReducer from "./search/search-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  tracks: tracksReducer,
  playlistsReducer: playlistsReducer,
  searchReducer: searchReducer
});

export default rootReducer;