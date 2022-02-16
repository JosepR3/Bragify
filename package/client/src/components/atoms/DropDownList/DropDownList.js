import React from "react";
import { addToList } from "../../../redux/playlists/playlists-actions";
import { useDispatch } from "react-redux";

import Dropdown from "react-bootstrap/Dropdown"

import { BsPlusLg } from "react-icons/bs";



const DropDownList = (props) => {
  const { playlist, trackId, url, name, artists, genre, thumbnail  } = props
  const listPlaylist = playlist.playlists
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem("user"))._id;

  function handleAddTrack(data) {
    console.log("handle add track")
    dispatch(addToList(data));
  }
  return (
    <Dropdown className="p-1">
        <Dropdown.Toggle title="add-to-track" className="btn__options">
          <BsPlusLg />
        </Dropdown.Toggle>
          <Dropdown.Menu>
            {listPlaylist &&
            listPlaylist.map((item, index) => (
              <Dropdown.Item
                key={index + 1}
                onClick={() =>
                  handleAddTrack({
                    trackId: trackId,
                    playListId: item._id,
                    userId: userId,
                    url: url,
                    name: name,
                    artists: artists,
                    genre: genre,
                    thumbnail: thumbnail
                  })
                }
              >
                {item.name}
              </Dropdown.Item>
              ))}
        </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownList;
