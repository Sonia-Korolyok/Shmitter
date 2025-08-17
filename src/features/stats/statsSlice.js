import {createSlice} from "@reduxjs/toolkit";


const statsSlice = createSlice({
    name: "stats",
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStats: {
            reducer: (state, action) => {
            const res = state[action.payload.statsType] + action.payload.sum;
            state[action.payload.statsType] = res >= 0 ? res : 0;
        },
            prepare: (statsType, sum) => ({payload: {statsType, sum}})
        }
    }
})
// type: stats/increase, type: stats/decrease
export const {changeStats} = statsSlice.actions;
export default statsSlice.reducer;