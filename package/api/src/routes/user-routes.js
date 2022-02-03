const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { userController } = require("../controllers");


const userRouter = Router();

userRouter.post("/sign-up", authMiddleware, userController.signUp);
userRouter.post("/sign-out", authMiddleware, userController.signOut);
userRouter.put("/edit-user", authMiddleware, userController.editUser);
userRouter.get("/get-user", authMiddleware, userController.getUser);

module.exports = {
  userRouter: userRouter,
};
