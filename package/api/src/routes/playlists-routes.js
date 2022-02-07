
const Router = require("express").Router;
const { authMiddleware } = require("../middlewares");
const { listController } = require("../controllers");
const listRouter = Router();

listRouter.post("/track-list",listController.createList);
listRouter.get("/track-list", listController.fetchList);
listRouter.delete("/track-list/:id", listController.deleteList);

module.exports = {
  listRouter: listRouter,
};
