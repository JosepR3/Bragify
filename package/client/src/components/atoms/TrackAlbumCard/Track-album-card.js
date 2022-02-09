import React from "react";
import { useEffect } from "react";
import { fetchAllPlaylists } from "../../../redux/playlists/playlists-actions";
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { playlistStateSelector } from "../../../redux/playlists/playlists-selector";
import { RiPlayCircleFill } from "react-icons/ri"

// import { playTrack } from "../../../redux/tracks/tracks-actions";
import DeletePlaylistButton from "../../../components/atoms/DeletePlaylistButton/DeletePlaylistButton";


export default function TrackAlbumCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPlaylists);
  }, [dispatch]);

  const { playlists } = useSelector(playlistStateSelector);

  return (
    <div>
      {playlists &&
        playlists.map((playlist) => {
          return (
            <>
              <Card key={playlist._id} className="p-2 m-2">
                <div className="position-relative p-0">
                  <Card.Img
                    variant="top"
                    src={playlist.thumbnail}
                  />
                  <RiPlayCircleFill
                    className="card__play position-absolute top-50 start-50 translate-middle"
                  />
                </div>
                <Card.Body className="p-1 mt-2">
                  <Card.Title className="m-0">
                    {playlist.name}
                  </Card.Title>
                  <Card.Subtitle>
                    {playlist.description}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
              <DeletePlaylistButton id={playlist._id} />
            </>
          )
        })
      }
    </div>
  );
}



{/* 


  const { playlists } = useSelector(playlistStateSelector);
  console.log(playlists);

  return (
    <ListGroup horizontal>

      { playlists &&
        playlists.map((playlist) => {
        return (
          <ListGroup.Item
            key={playlist._id}
            onClick={() => navigate("/playlists/single-playlist")}
          >
            <TrackAlbumCard/>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
 */}




{/* 
//   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const tracks = useSelector((state) => state.tracks);
  //   const { currentTrack } = tracks;
  //   const [isPlaying, setIsPlaying] = useState(false);

  // const handleClick = () => {

  //     dispatch(playTrack(tracks));

  // };

  // const viewTracks = (e) => {
  //     if (e.target.id !== 'pause-button' && e.target.id !== 'play-button' && e.target.id !== 'button-box') {
  //         navigate('/tracks');
  //         dispatch(playTrack(tracks));
  //         // navigate('/track-song-list');

  //     }
  // }
 */}


