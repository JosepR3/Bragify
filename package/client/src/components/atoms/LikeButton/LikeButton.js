import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import { likeTrack, unlikeTrack, fetchLikedTracks } from '../../../redux/tracks/tracks-actions';
import './likeButton.scss';
import filledLike from '../../../assets/images/filled_like.svg';
import unfilledLike from '../../../assets/images/unfilled_like.svg';

export default function LikeButton({ trackId }) {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.username._id);

    const [isLoading, setIsLoading] = useState(false);
    const likedTracks = useSelector((state) => state.tracks.likedTracks);
    const isLiked = likedTracks.find(e => e === trackId);

    useEffect(() => {
        dispatch(fetchLikedTracks(userId));
    }, [dispatch]);


    const handleLike = () => {

        if (isLiked) {
            dispatch(unlikeTrack(trackId, userId)).then(() => {
                // dispatch(fetchLikedTracks(userId)).then(() => {
                return isLiked;
                // }).catch(err => {
                //     console.log(err);
                // });
            });
        } else {
            dispatch(likeTrack(trackId, userId)).then(() => {
                // dispatch(fetchLikedTracks(userId)).then(() => {
                return isLiked
                // });
            });
        }

    }

    return <Button variant="secondary" color="#292929" onClick={handleLike} id={trackId} >
        {isLiked ? <img
            src={filledLike}
        /> : <img
            src={unfilledLike}
        />}
    </Button >
}
