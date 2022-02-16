const { playlistRepo } = require("../repositories");
const { handleDbResponse } = require("../repositories/repo-utils");

async function createPlaylist(req, res, next) {
  const { name, description, thumbnail, authorId } = req.body;

  try {
    if (!name) {
      res.status(400).send({
        data: null,
        error: "Missing Fields (title, url)",
      });
    }

    const dbResponse = await playlistRepo.create({
      name: name,
      description: description,
      thumbnail: thumbnail,
      authorId: authorId,
    });

    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

async function fetchPlaylistById(req, res, next) {
  const id = req.params.id;
  try {
    const dbResponse = await playlistRepo.findById({
      _id: id,
    });
    handleDbResponse(res, dbResponse);
  } catch (err) {
    next(err);
  }
}

async function fetchPlaylists(req, res, next) {
  try {
    const playlist = await playlistRepo.find({ name: true }[0]);
    handleDbResponse(res, playlist);
    res.status(201).send({
      data: playlist,
      error: null,
    });
  } catch (error) {
    next(error);
  }
}

async function deletePlaylist(req, res, next) {

  const id = req.params.id;
  try {
    const playlist = await playlistRepo.deleteOne(id);
    handleDbResponse(res, playlist);
  } catch (error) {
    next(error);
  }
}
// --------------------------axios  playlist logic -----------------------------------
async function addtoList(req, next) {
  const track = req.body;
  try {
    playlistRepo.addPlaylist(track);
  } catch (error) {
    next(error);
  }
}

async function removeToList(req, res, next) {
  // console.log(req.body)
  const { track, playlist}=req.body
  try {
    const response = await playlistRepo.removePlaylist(track, playlist);
    handleDbResponse(res, response);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createPlaylist: createPlaylist,
  fetchPlaylistById: fetchPlaylistById,
  fetchPlaylists: fetchPlaylists,
  deletePlaylist: deletePlaylist,
  addtoList: addtoList,
  removeToList: removeToList
};
