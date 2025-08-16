import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name:"Retro",
    avatar: "https://gravatar.com/avatar/000?d=retro"
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeName: (state, action) => {state.name = action.payload},
        changeAvatar: (state, action) => {state.avatar = action.payload}
    },
})

// type: user/changeName type:user/avatar
export const {changeName, changeAvatar} = userSlice.actions;
export default userSlice.reducer;