const { UserRepo, TrackRepo } = require("../repositories");
const { handleDbResponse } = require("../repositories/repo-utils");

async function createTrack(req, res, next) {
  // console.log("Inside")
  // const {
  //   body: { title, url, thumbnail, genre, duration = 0 },
  //   user: { uid },
  // } = req;

  try {
    //   // if (!title && !url) {
    //   //   res.status(400).send({
    //   //     data: null,
    //   //     error: "Missing Fields (title, url)",
    //   //   });
    //   // }

    //   // const user = await UserRepo.findOne({
    //   //   firebase_id: "ge2WtP90RRV4udE7OMvNGmWsYl43",
    //   // });

    const dbResponse = await TrackRepo.create({
      title: "title",
      url: "url",
      thumbnail: "thumbnail",
      duration: 0,
      genre: "pop",
      authorId: "ge2WtP90RRV4udE7OMvNGmWsYl43",
    });

    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

async function fetchTracks(req, res, next) {
  try {
    const tracks = await TrackRepo.find({title: true}[0])
    handleDbResponse(res, tracks);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTrack: createTrack,
  fetchTracks: fetchTracks,
};
