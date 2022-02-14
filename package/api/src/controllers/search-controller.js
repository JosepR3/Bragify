const { TrackRepo, playlistRepo, UserRepo } = require('../repositories');
const { handleDbResponse } = require('../repositories/repo-utils');


async function search(req, res, next) {
    console.log('searching');
    const string = req.params.string;

    try {

        const tracks = await TrackRepo.search(string);
        const playlists = await playlistRepo.search(string);
        const users = await UserRepo.search(string);
        const results = {
            data: {
                tracks: [],
                playlists: [],
                users: []
            }
        }
        tracks.data.length > 0 && results.data.tracks.push(tracks.data);
        playlists.data.length > 0 && results.data.playlists.push(playlists.data);
        users.data.length > 0 && results.data.users.push(users.data);
        handleDbResponse(res, results);

    } catch (error) {
        next(error);
    }

}

module.exports = {
    search: search
}
