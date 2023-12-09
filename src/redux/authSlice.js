import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthStatus: (state, action) => {
            state.isAuth = action.payload;
        },
    },
});

export const { setAuthStatus } = authSlice.actions;
export default authSlice.reducer;
