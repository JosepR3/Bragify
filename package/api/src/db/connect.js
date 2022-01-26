const mongoose = require("mongoose");

// const { CONFIG } = require("../config");
let db = "mongodb://localhost:27017/bragify";

function connect() {
  return mongoose.connect(db, {
    autoIndex:true
    //useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  });
}

module.exports = {
  connect: connect,
};
