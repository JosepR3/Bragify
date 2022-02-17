import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../../redux/auth/auth-selectors";

import Button from "react-bootstrap/Button";
import { likeTrack, unlikeTrack } from "../../../redux/tracks/tracks-actions";

// Icons
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
export default function LikeButton( {track} ) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(authSelector);
  const likedTracks = useSelector((state) => state.tracks.likedTracksList);

  const userId = currentUser?._id;
  const isLiked = likedTracks.find((e) => e._id === track);

  const handleLike = () => {
    if (isLiked) {

      dispatch(unlikeTrack(track, userId)).then(() => {
        return isLiked;
      });
    } else {
      dispatch(likeTrack(track, userId)).then(() => {
        return isLiked;
      });
    }
  };

  return (
    <Button className="btn__options" onClick={handleLike} id={track}>
      {isLiked ? <BsSuitHeartFill className="fill_like" /> : <BsSuitHeart />}
    </Button>
  );
}
