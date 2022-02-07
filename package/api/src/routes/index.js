const { userRouter } = require("./user-routes");
const { trackRouter } = require("./track-routes");
const { listRouter}=require("./playlists-routes")
module.exports = {
  userRouter: userRouter,
  trackRouter: trackRouter,
  listRouter: listRouter,
};
