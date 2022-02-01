const { UserRepo, TrackRepo } = require("../repositories");
const { handleDbResponse } = require("../repositories/repo-utils");


async function createTrack(req, res, next) {
  // const {
  //   body: { title, url, thumbnail, genre, duration = 0 },
  //   user: { uid },
  // } = req;

  try {
    if (!title && !url) {
      res.status(400).send({
        data: null,
        error: "Missing Fields (title, url)",
      });
    }

    const user = await UserRepo.findOne({
      firebase_id: uid,
    });

    const dbResponse = await TrackRepo.create({
      title: title,
      url: url ? url : null,
      thumbnail: thumbnail ? thumbnail : null,
      duration: duration ? duration : 0,
      genre: genre ? genre : null,
      authorId: user._id,
    });

    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}