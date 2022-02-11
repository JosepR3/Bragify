const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");


class PlaylistRepository {
  create(options) {
    return normalizeDBQuery(db.Playlist.create(options));
  }

  find(query) {
    return normalizeDBQuery(db.Playlist.find(query, "-__v"));
  }

  findOne(query) {
    return normalizeDBQuery(db.Playlist.findOne(query, "-__v"));
  }

  findById(id) {
    return normalizeDBQuery(db.Playlist.findById(id, "-__v"));
  }

  deleteOne(id) {
    return normalizeDBQuery(db.Playlist.deleteOne({ _id: id }));
  }

  addPlaylist(trackId, playlistId) {
    return normalizeDBQuery(db.Playlist.updateOne({ _id: playlistId }, { $push: { tracks: trackId } }, { new: true }));
  }
}

module.exports = new PlaylistRepository();