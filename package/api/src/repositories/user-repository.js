const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");

class UserRepository {
  create(options) {
    return normalizeDBQuery(db.User.create(options));
  }

  findOne(query) {
    return normalizeDBQuery(db.User.findOne(query, "-__v"));
  }

  findByIdAndUpdate(query) {
    return normalizeDBQuery(db.User.findByIdAndUpdate(query, "-__v"));
  }

  search(data) {
    return normalizeDBQuery(db.User.find({ $or: [{ username: { $regex: data, $options: 'i' } }, { email: { $regex: data, $options: 'i' } }] }));
  }
}

module.exports = new UserRepository();
