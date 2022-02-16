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

  addPlaylist(track) {
    return normalizeDBQuery(
      db.Playlist.updateOne(
        { _id: track.playListId },
        { $addToSet: { tracks: track } },
        { upsert: true },
      ),
    );
    // return normalizeDBQuery(db.Playlist.updateOne({ _id: playListId }, { $push: { tracks: TrackId } }, { new: true }));
  }

  removePlaylist(trackId, playlist) {
    console.log(track, playlist);
    return normalizeDBQuery(
      db.Playlist.findByIdAndUpdate(
        { _id: playlist },
        { $pull: { tracks: { trackId: trackId } } },
        { multi: true },
      ),
    );
  }
}

module.exports = new PlaylistRepository();
