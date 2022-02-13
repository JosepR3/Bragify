import React from "react";
import AddtoPlayListButton from "../AddtoPlayListButton/AddtoPlayListButton";
import { addToList } from '../../../redux/playlists/playlists-actions';
import { useDispatch } from "react-redux";


const DropDownList = (props) => {
  const { playlist, trackId } = props
  const listPlaylist = playlist.playlists
  // const playlistId=playlist
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem('user'))._id
  // const addListTracks = useSelector((state) => state.playlistsReducer.myPlaylist);
  // const checkPlaylist = addListTracks.find(e => e === trackId);
  function handleAddTrack(data) {
    dispatch(addToList(data))
  }
  const isAddList = true
  return ( 
    <div className="dropdown">
      <AddtoPlayListButton isAddList={isAddList} />
      <div className="dropdown-content">
        {listPlaylist.map((item, index) =>
          <a
            key={index + 1}
            onClick={() => handleAddTrack({ TrackId: trackId, playListId: item._id, userId: userId})} 
            >{item.name}</a>
       )}
      </div>
    </div>
   );
}
 
export default DropDownList;