import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    followers: 0,
    following: 0
}
const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        changeStats: (state, action) => {
            const {key, value} = action.payload;
            if (key in state) {
                const newValue = state[key] + value;
                state[key] = newValue < 0 ? 0 : newValue;
            }

        }

    },
})
// type: stats/increase, type: stats/decrease
export const {changeStats} = statsSlice.actions;
export default statsSlice.reducer;