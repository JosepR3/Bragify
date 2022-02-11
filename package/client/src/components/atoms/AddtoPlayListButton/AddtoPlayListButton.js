import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

import addIcon from '../../../assets/Icons/addList.png';
import removeIcon from '../../../assets/Icons/removeList.png';

import { addToList } from '../../../redux/playlists/playlists-actions';
function AddtoPlayListButton(props) {
  const { trackId, playlistId }=props
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem('user'))._id
  const addListTracks = useSelector((state) => state.playlistsReducer.myPlaylist);

  const isAddList = addListTracks.find(e => e === trackId);
  function handleAddTrack() {
    if (isAddList) {
      dispatch(addToList(trackId, playlistId, userId))
    //   //   .then(() => {
    //   //   return isAddList;
    //   // });
    } else {
      console.log("inside else")
    //   // dispatch(likeTrack(trackId, userId)).then(() => {
    //   //   return isAddList
    //   // });
    }
  }
  return<Button
    variant="secondary"
    color="#292929"
    onClick={handleAddTrack}
    id={trackId}
  >
    {isAddList ?
      <img
        className='icon__add-list'
        src={removeIcon}
      />
      : <img
        className='icon__add-list'
        src={addIcon}
      />}
  </Button >
}
export default AddtoPlayListButton