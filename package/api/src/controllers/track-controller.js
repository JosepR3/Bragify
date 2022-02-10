const { TrackRepo } = require("../repositories");
const { handleDbResponse } = require("../repositories/repo-utils");

async function createTrack(req, res, next) {
  console.log(req.body);

  const { title, url, thumbnail, genre, duration, authorId } = req.body;

  try {
    if (!title && !url) {
      res.status(400).send({
        data: null,
        error: "Missing Fields (title, url)",
      });
    }

    const dbResponse = await TrackRepo.create({
      title: title,
      url: url,
      thumbnail: thumbnail,
      duration: duration,
      genre: genre,
      authorId: authorId,
    });

    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

async function fetchTracks(req, res, next) {
  try {
    const tracks = await TrackRepo.find({ title: true }[0]);
    handleDbResponse(res, tracks);
  } catch (error) {
    next(error);
  }
}



async function fetchTrackById(req, res, next) {
  const id = req.params.id;
  try {
    const dbResponse = await TrackRepo.findById({
      _id: id,
    });
    console.log(dbResponse);
    handleDbResponse(res, dbResponse);
  } catch (err) {
    next(err);
  }
}

async function deleteTrack(req, res, next) {
  const id = req.params.id;
  try {
    const tracks = await TrackRepo.deleteOne(id);
    handleDbResponse(res, tracks);
  } catch (error) {
    next(error);
  }
}

async function likeTrack(req, res, next) {
  const trackId = req.params.id;
  const { userId } = req.body;
  console.log(userId);
  try {
    const tracks = await TrackRepo.likeTrack(trackId, userId);
    handleDbResponse(res, tracks);
  } catch (error) {
    next(error);
  }
}
async function unlikeTrack(req, res, next) {
  const trackId = req.params.id;
  const { userId } = req.body;
  try {
    const tracks = await TrackRepo.unlikeTrack(trackId, userId);
    handleDbResponse(res, tracks);
  } catch (error) {
    next(error);
  }
}

async function fetchLikedTracks(req, res, next) {
  const userId = req.params.id;
  try {
    const tracks = await TrackRepo.fetchLikedTracks(userId);
    handleDbResponse(res, tracks);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTrack: createTrack,
  fetchTracks: fetchTracks,
  deleteTrack: deleteTrack,
  likeTrack: likeTrack,
  unlikeTrack: unlikeTrack,
  fetchLikedTracks: fetchLikedTracks,
  fetchTrackById:fetchTrackById
};
