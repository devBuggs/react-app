import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser : (state, action) => {
            console.log("Saving signedin user into store...");
            state.value = action.payload;
        },
    },
});

export const { saveUser } = authSlice.actions;
export default authSlice.reducer;