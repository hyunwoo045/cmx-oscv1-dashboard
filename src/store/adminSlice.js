import {createSlice} from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        admin: {
            status: false,
            userId: "",
            role: "",
            token: "",
            exp: 0
        }
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.admin = {...action.payload}
        },
    }
})

export const {setUserInfo} = adminSlice.actions;

export const selectAdmin = state => state.admin.admin;

export default adminSlice.reducer;