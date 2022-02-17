import React from "react";
import { addToList } from "../../../redux/playlists/playlists-actions";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../../redux/auth/auth-selectors";

import Dropdown from "react-bootstrap/Dropdown"

import { BsPlusLg } from "react-icons/bs";

const DropDownList = (props) => {
  const dispatch = useDispatch();
  const { playlist, trackId, url, name, artists, genre, thumbnail  } = props
  const listPlaylist = playlist.playlists
  const { currentUser } = useSelector(authSelector);
  const userId = currentUser?._id;

  function handleAddTrack(data) {

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
