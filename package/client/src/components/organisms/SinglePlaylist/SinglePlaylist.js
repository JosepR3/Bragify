import React from "react";
// import { fetchPlaylistById } from "../../../redux/playlists/playlists-actions";
// Components
import SinglePlaylistHeader from "../../molecules/SinglePlaylistHeader";
import SinglePlaylistTracks from "../../molecules/SinglePlaylistTracks";

function SinglePlaylist() {

  return (
<<<<<<< HEAD
    <div className="mb-3">
      <SinglePlaylistHeader />
      <SinglePlaylistTracks /> 
    </div>
=======
    
    <>
      <main id="main">
        <div className="flex-row d-flex gap-5">
          <div className="" id="photo">
            <img
              id="sm"
              src={playlistId?.thumbnail}
              alt=""
            />
          </div>
          <div
            className="col-sm-8 d-flex flex-column justify-content-center"
            id="detail"
          >
            <h3 id="shawn">
              <b>{playlistId?.name}</b>
            </h3>
            <p className="brand_color">{playlistId?.description}</p>
            <div className="d-flex gap-2 flex-row" id="interact_buttons">
              <button id="play">▶ Play</button>
              <button id="play">⥃ Shuffle</button>
            </div>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Title</td>
              <td>Album</td>
              <td>duration</td>
              <td>
                <i className="fa fa-clock-o"></i>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dawn FM</td>
              <td>Dawn FM</td>
              <td>3:58</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Gasoline</td>
              <td>Dawn FM</td>
              <td>3:11</td>
            </tr>
            <tr>
              <td>3</td>
              <td>How Do I Make You Love Me</td>
              <td>Dawn FM</td>
              <td>3:18</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Take My Breath</td>
              <td>Dawn FM</td>
              <td>3:35</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Sacrifice</td>
              <td>Dawn FM</td>
              <td>3:27</td>
            </tr>
            <tr>
              <td>6</td>
              <td>A tale By Quincy</td>
              <td>Dawn FM</td>
              <td>3:36</td>
            </tr>
            <tr>
              <td>7</td>
              <td>I Dont Even Know Your Name</td>
              <td>Dawn FM</td>
              <td>3:46</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Something Big</td>
              <td>Dawn FM</td>
              <td>3:00</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
>>>>>>> dev2
  );
}

export default SinglePlaylist;
