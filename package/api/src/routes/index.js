const { userRouter } = require("./user-routes");
const { trackRouter } = require("./track-routes");
const { Playlist}=require("./playlists-routes")
module.exports = {
  userRouter: userRouter,
  trackRouter: trackRouter,
  Playlist: Playlist,
};
