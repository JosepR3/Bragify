const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");


class TrackRepository {
  create(options) {
    return normalizeDBQuery(db.Track.create(options));
  }

  find(query) {
    return normalizeDBQuery(db.Track.find(query, "-__v"));
  }

  findOne(query) {
    return normalizeDBQuery(db.Track.findOne(query, "-__v"));
  }

  findById(id) {
    return normalizeDBQuery(db.Track.findById(id, "-__v"));
  }

  deleteOne(id) {
    return normalizeDBQuery(db.Track.deleteOne({ _id: id }));
  }

  likeTrack(track, userId) {
    return normalizeDBQuery(db.Track.updateOne({ _id: track }, { $push: { likedBy: userId } }, { new: true }));
  }

  unlikeTrack(track, userId) {
    return normalizeDBQuery(db.Track.findByIdAndUpdate(track, { $pull: { likedBy: userId } }, { new: true }));
  }

  fetchLikedTracks(userId) {
    return normalizeDBQuery(db.Track.find({ likedBy: { $in: [userId] } }, "-__v"));
  };
}
module.exports = new TrackRepository();
