import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Rajeev",
        email: "rajeev@mail.com"
    },
    reducers:{
        update: (state, action) =>{
            state.name = action.payload.name;
            state.name = action.payload.email;
        },
        remove: (state) => (state = {}),
    },
});

export const {update, remove} = userSlice.actions;
export default userSlice.reducer;