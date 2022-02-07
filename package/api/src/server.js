const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const cors = require("cors");
const { errorMiddleware } = require("./middlewares");
const { userRouter, trackRouter, playlistRouter} = require("./routes");
const notFoundMiddleware = require("./middlewares/notFound-middleware");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(userRouter);
app.use(trackRouter);
app.use(playlistRouter);




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
