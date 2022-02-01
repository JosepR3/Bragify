const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");

class UserRepository {
  create(options) {
    return normalizeDBQuery(db.User.create(options));
  }

  findOne(query) {
    return normalizeDBQuery(db.User.findOne(query, "-__v"));
  }
  findOneAndUpdate(query) {
    return normalizeDBQuery(db.User.findOneAndUpdate(query, "-__v"));
  }
}

module.exports = new UserRepository();
