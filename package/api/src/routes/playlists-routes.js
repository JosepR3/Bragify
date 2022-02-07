
const Router = require("express").Router;

const { listController } = require("../controllers");
const Router = require("express").Router;


const listRouter = Router();

listRouter.post("/track-list", listController.createList);
listRouter.get("/track-list", listController.fetchList);
listRouter.delete("/track-list/:id", listController.deleteList);

module.exports = {
  listRouter: listRouter,
};
