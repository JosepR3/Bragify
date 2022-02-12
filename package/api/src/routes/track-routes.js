const Router = require("express").Router;

// const { authMiddleware } = require("../middlewares");
const { trackController } = require("../controllers");

const trackRouter = Router();

trackRouter.post("/tracks", trackController.createTrack);
trackRouter.get("/tracks", trackController.fetchTracks);
trackRouter.get("/track/:id", trackController.fetchTrackById);
trackRouter.delete("/tracks/:id", trackController.deleteTrack);
trackRouter.put("/tracks/:id/like", trackController.likeTrack);
trackRouter.put("/tracks/:id/unlike", trackController.unlikeTrack);
trackRouter.get("/tracks/:id/liked", trackController.fetchLikedTracks);

module.exports = {
  trackRouter: trackRouter,
};
