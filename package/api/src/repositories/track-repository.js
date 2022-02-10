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

  likeTrack(trackId, userId) {
    return normalizeDBQuery(db.Track.updateOne({ _id: trackId }, { $push: { likedBy: userId } }, { new: true }));
  }

  unlikeTrack(trackId, userId) {
    return normalizeDBQuery(db.Track.findByIdAndUpdate(trackId, { $pull: { likedBy: userId } }, { new: true }));
  }

  fetchLikedTracks(userId) {
    return normalizeDBQuery(db.Track.find({ likedBy: { $in: [userId] } }, "-__v"));
  };
  search(data){
    return normalizeDBQuery(db.Track.find({$or:[{title: {$regex: data, $options: 'i'}},{description: {$regex: data, $options: 'i'}}]}));
  }
  
}
module.exports = new TrackRepository();
