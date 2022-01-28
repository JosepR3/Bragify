const { app } = require("./server");
const { config } = require("./config");
const { connect } = require("./db/connect");

if (!4000) {
  throw new Error("App config is invalid");
}

connect().then(() => {
  app.listen(4000, () => {
    console.log(`Server listening on ${4000}`);
  });
});
