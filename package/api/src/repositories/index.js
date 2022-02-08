const UserRepository = require("./user-repository");
const TrackRepository = require("./track-repository");
const PlaylistRepository = require("./playlists-repository");


module.exports = {
  UserRepo: UserRepository,
  TrackRepo: TrackRepository,
  playlistRepo:PlaylistRepository,
};
