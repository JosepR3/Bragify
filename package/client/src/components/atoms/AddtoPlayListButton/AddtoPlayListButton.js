import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { likeTrack, unlikeTrack } from '../../../redux/tracks/tracks-actions';
// import '../LikeButton/LikeButton.scss';
import filledLike from '../../../assets/images/filled_like.svg';
import unfilledLike from '../../../assets/images/unfilled_like.svg';
function AddtoPlayListButton({ trackId }) {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem('user'))
  const userId = currentUser._id
  const addListTracks = useSelector((state) => state.tracks);
  const isAddList = addListTracks.find(e => e === trackId);
  const handleLike = () => {

    if (isAddList) {
      dispatch(unlikeTrack(trackId, userId)).then(() => {
        return isAddList;
      });
    } else {
      dispatch(likeTrack(trackId, userId)).then(() => {
        return isAddList
      });
    }
  }
  return <Button variant="secondary" color="#292929" onClick={handleLike} id={trackId} >
    {isAddList ? <img
      src={filledLike}
    /> : <img
      src={unfilledLike}
    />}
  </Button >
}
export default AddtoPlayListButton