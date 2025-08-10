export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const CHANGE_NAME = 'CHANGE_NAME';
export const INCREASE_FOLLOWERS = 'INCREASE_FOLLOWERS';
export const INCREASE_FOLLOWING = 'INCREASE_FOLLOWING';
export const DECREASE_FOLLOWERS = 'DECREASE_FOLLOWERS';
export const DECREASE_FOLLOWING = 'DECREASE_FOLLOWING';

export const changeAvatar = url => ({
    type: CHANGE_AVATAR,
    payload: url
});
export const changeName = name => ({
    type: CHANGE_NAME,
    payload: name
});

export const increaseFollowers = () => ({
    type: INCREASE_FOLLOWERS,
})
export const increaseFollowing = () => ({
    type: INCREASE_FOLLOWING,
})
export const decreaseFollowers = () => ({
    type: DECREASE_FOLLOWERS,
})
export const decreaseFollowing = () => ({
    type: DECREASE_FOLLOWING,
})