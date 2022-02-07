const Router = require("express").Router;
// const { authMiddleware } = require("../middlewares");
const { playlistController } = require("../controllers");
const playlistRouter = Router();

playlistRouter.post("/playlists", playlistController.createPlayList);
// playListRouter.get("/playlist", playlistController.fetchList);
// playListRouter.delete("/playlist/:id", playlistController.deleteList);

module.exports = {
  playlistRouter: playlistRouter,
};
