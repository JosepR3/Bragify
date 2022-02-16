const { TrackRepo, playlistRepo, UserRepo } = require('../repositories');
const { handleDbResponse } = require('../repositories/repo-utils');


async function search(req, res, next) {
    console.log('searching');
    const string = req.params.string;

    try {

        const tracks = await TrackRepo.search(string);
        const playlists = await playlistRepo.search(string);
        const results = {
            data: {
                tracks: [],
                playlists: [],
            }
        }
        tracks.data.length > 0 && results.data.tracks.push(tracks.data);
        playlists.data.length > 0 && results.data.playlists.push(playlists.data);
        handleDbResponse(res, results);

    } catch (error) {
        next(error);
    }

}

module.exports = {
    search: search
}
