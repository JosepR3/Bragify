const Router = require("express").Router;

const { searchController } = require("../controllers");

const searchRouter = Router();

searchRouter.get("/search/:string", searchController.search);

module.exports = {
    searchRouter: searchRouter,
};