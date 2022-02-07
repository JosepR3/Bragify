const { playlistRepo } = require("../repositories");
const { handleDbResponse } = require("../repositories/repo-utils");

async function createList(req, res, next) {
  console.log(req)

  const {
    name,
    description,
    collaborative,
    thumbnail,
    publicAccessible,
    numberSongs,
    rating,
    authorId,
    tracks,
    followedBy,
    collaborators,
} = req.body;

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
      collaborative: collaborative,
      thumbnail: thumbnail,
      publicAccessible: publicAccessible,
      numberSongs: numberSongs,
      rating: rating,
      authorId: authorId,
      tracks: tracks,
      followedBy: followedBy,
      collaborators: collaborators,
    });

    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

async function fetchList(req, res, next) {
  // console.log(req);
  // try {
  //   const tracks = await playlistRepo.find({ title: true }[0])
  //   handleDbResponse(res, tracks);
  // } catch (error) {
  //   next(error);
  // }
}


async function deleteList(req, res, next) {
  // const id = (req.params.id)
  // try {
  //   const tracks = await playlistRepo.deleteOne(id)
  //   console.log(req.params.id)
  //   handleDbResponse(res, tracks);
  // } catch (error) {
  //   console.log(req.params)
  //   next(error);
  // }
}

module.exports = {
  createList: createList,
  fetchList: fetchList,
  deleteList: deleteList,
};
