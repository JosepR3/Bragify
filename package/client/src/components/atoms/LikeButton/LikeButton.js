import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { authSelector } from '../../../redux/auth/auth-selectors';

import Button from 'react-bootstrap/Button';
import { likeTrack, unlikeTrack, fetchLikedTracks } from '../../../redux/tracks/tracks-actions';
import './likeButton.scss';
import filledLike from '../../../assets/images/filled_like.svg';
import { getCurrentUserUid } from '../../../services/auth';
import unfilledLike from '../../../assets/images/unfilled_like.svg';

export default function LikeButton( {trackId} ) {
    const dispatch = useDispatch();
    const userId = getCurrentUserUid();

    const likedTracks = useSelector((state) => state.tracks.likedTracks);
    const isLiked = likedTracks.find(e => e === trackId);
    
    useEffect(() => {
        dispatch(fetchLikedTracks(userId));
    }, [dispatch]);
    
    
    const handleLike = () => {
        
        if (isLiked) {
            dispatch(unlikeTrack(trackId, userId)).then(() => {
                return isLiked;
            });
        } else {
            dispatch(likeTrack(trackId, userId)).then(() => {
                return isLiked
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
