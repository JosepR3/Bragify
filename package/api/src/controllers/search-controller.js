const { TrackRepo, playlistRepo, UserRepo } = require('../repositories');
const { handleDbResponse } = require('../repositories/repo-utils');


async function search(req, res, next) {
    const string = req.params.string;

    try {

        const tracks = await TrackRepo.search(string);
        const playlists = await playlistRepo.search(string);
        const users = await UserRepo.search(string);
        console.log(tracks);
        console.log(playlists);
        console.log(users);
        const results =
            [tracks, playlists, users]
        console.log(results);
        handleDbResponse(res, results);

    } catch (error) {
        next(error);
    }

}

module.exports = {
    search: search
}
