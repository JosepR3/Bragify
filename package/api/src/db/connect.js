const mongoose = require("mongoose");

// const { CONFIG } = require("../config");
let db = "mongodb+srv://bragifyAssembler123:bragifyAssembler123@cluster0.4pjlp.mongodb.net/bragify";

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
