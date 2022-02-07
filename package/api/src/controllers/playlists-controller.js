const { playlistRepo } = require("../repositories");
const { handleDbResponse } = require("../repositories/repo-utils");


async function createPlayList(req, res, next) {
  console.log(req);
  const {
    name,
    description,
    thumbnail,
    authorId,

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
      thumbnail: thumbnail,
      authorId: authorId,
    });

    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

async function fetchPlaylist(req, res, next) {
  // console.log(req);
  // try {
  //   const tracks = await playlistRepo.find({ title: true }[0])
  //   handleDbResponse(res, tracks);
  // } catch (error) {
  //   next(error);
  // }
}

async function deletePlaylist(req, res, next) {
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
  createPlayList: createPlayList,
  // fetchList: fetchList,
  // deleteList: deleteList,
};
