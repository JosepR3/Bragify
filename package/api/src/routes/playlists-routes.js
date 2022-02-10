const Router = require("express").Router;
// const { authMiddleware } = require("../middlewares");
const { playlistController } = require("../controllers");
const playlistRouter = Router();

playlistRouter.post("/playlists", playlistController.createPlaylist);
playlistRouter.get("/playlist/:id", playlistController.fetchPlaylistById);
playlistRouter.get("/playlists", playlistController.fetchPlaylists);
playlistRouter.delete("/playlist/:id", playlistController.deletePlaylist);

module.exports = {
  playlistRouter: playlistRouter,
};
