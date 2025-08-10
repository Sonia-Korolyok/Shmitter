import {
    CHANGE_AVATAR,
    CHANGE_NAME,
    INCREASE_FOLLOWERS,
    INCREASE_FOLLOWING,
    DECREASE_FOLLOWERS,
    DECREASE_FOLLOWING
} from "../actions/userAction.js";

// typeof State = {
//     user: {
//         name: string,
//         avatar: string
//     },
//     stats: {
//         followers: number,
//         following: number
//     }
// }

export const shmitterReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}};
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: action.payload || state.user.name}};
        case INCREASE_FOLLOWERS:
            return {...state, stats: {...state.stats, followers: state.stats.followers + 1}};
        case INCREASE_FOLLOWING:
            return {...state, stats: {...state.stats, following: state.stats.following + 1}};
        case DECREASE_FOLLOWERS:
            return {...state, stats: {...state.stats, followers: Math.max(0, state.stats.followers - 1)}};
        case DECREASE_FOLLOWING:
            return {...state, stats: {...state.stats, following: Math.max(0, state.stats.following - 1)}};
        default:
            return state;
    }
}