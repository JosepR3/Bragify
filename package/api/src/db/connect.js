const mongoose = require("mongoose");

let db = "mongodb+srv://bragifyAssembler123:bragifyAssembler123@cluster0.4pjlp.mongodb.net/bragify";

function connect() {
  return mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
}

module.exports = {
  connect: connect,
};
