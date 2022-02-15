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

  addPlaylist(TrackId, playListId) {
    return normalizeDBQuery(db.Playlist.updateOne({ _id: playListId }, { $addToSet: { tracks: TrackId } }, { upsert: true }));
  }

  removePlaylist(track, playlist) {
    console.log(track,playlist)
    return normalizeDBQuery(db.Playlist.findByIdAndUpdate({ _id: playlist }, { $pull: { tracks: track } }, { new: true }));
  }
}

module.exports = new PlaylistRepository();