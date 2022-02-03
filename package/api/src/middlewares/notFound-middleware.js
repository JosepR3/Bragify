function notFoundMiddleware(req, res, next) {
    res.status(404).send({
        isSuccessful: false,
        data: null,
        errorMessage: "Not found",
    });
  }
  
  module.exports = notFoundMiddleware;