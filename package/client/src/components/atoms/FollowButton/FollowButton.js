import React, { useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import followIcon from '../../../assets/images/follow.svg';
import unfollowIcon from '../../../assets/images/unfollow.svg';

export default function FollowButton() {
    
    const isFollowing = false;

    // const followedUsers = useSelector((state) => state.auth.followedBy);
    // const isFollowing = followedUsers.find(e => e === userId);

    useEffect(() => {
        // dispatch(followedUsers(userId));
    }, [isFollowing]);


    const handleFollow = () => {

        if (isFollowing) {
            // dispatch(unlikeTrack(track, userId)).then(() => {
            return !isFollowing;
            // });
        } else {
            //     dispatch(likeTrack(track, userId)).then(() => {
            return isFollowing
            // });
        }

    }

    return <Button variant="secondary" color="#292929" onClick={handleFollow}>
        {isFollowing ?
            <img src={unfollowIcon} /> :
            <img src={followIcon} />}
    </Button>;
}
