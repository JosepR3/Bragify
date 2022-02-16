import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { likeTrack, unlikeTrack } from "../../../redux/tracks/tracks-actions";

// Icons
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
export default function LikeButton({ track }) {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser?._id;
  const likedTracks = useSelector((state) => state.tracks.likedTracksList);
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
