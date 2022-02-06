const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const cors = require("cors");
const { errorMiddleware } = require("./middlewares");
const { userRouter,trackRouter} = require("./routes");
const notFoundMiddleware = require("./middlewares/notFound-middleware");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: process.env.URL_CLIENT,
  })
);

app.use(userRouter);
app.use(trackRouter);


app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-world",
  });
});

app.use(errorMiddleware);
app.use(notFoundMiddleware);
module.exports = {
  app: app,
};
