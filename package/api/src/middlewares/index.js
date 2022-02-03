const { authMiddleware } = require("./auth-middleware");
const { errorMiddleware } = require("./error-middleware");
const {notFoundMiddleware}=require("./notFound-middleware")
module.exports = {
  authMiddleware: authMiddleware,
  errorMiddleware: errorMiddleware,
  notFoundMiddleware:notFoundMiddleware,
};
