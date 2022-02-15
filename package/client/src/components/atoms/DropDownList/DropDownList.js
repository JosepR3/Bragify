import React from "react";
import AddtoPlayListButton from "../AddtoPlayListButton/AddtoPlayListButton";
import { addToList } from '../../../redux/playlists/playlists-actions';
import { useDispatch } from "react-redux";


const DropDownList = (props) => {
  const { playlist, track, url, name } = props
  const listPlaylist = playlist.playlists
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem('user'))._id
  function handleAddTrack(data) {
    console.log(data)
    dispatch(addToList(data))
  }
  const isAddList = true
  return ( 
    <div className="dropdown">
      <AddtoPlayListButton isAddList={isAddList} />
      <div className="dropdown-content">
        {listPlaylist && listPlaylist.map((item, index) =>
          <a
            key={index + 1}
            onClick={() => handleAddTrack({ TrackId: track, playListId: item._id, userId: userId, url: url, name: name})} 
            >{item.name}</a>
       )}
      </div>
    </div>
   );
}
 
export default DropDownList;