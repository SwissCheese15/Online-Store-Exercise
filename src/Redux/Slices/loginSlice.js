import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: "LoginSlice",
    initialState: {
        email: "" ,
        password: "",
        username: "",
        code: "",
        password_rep: "",
        first_name: "",
        last_name: "",
        isLoggedIn: false
    },
    reducers: {

        add_email: (state, action) => {
            state.email = action.payload
        },
        add_password: (state, action) => {
            state.password = action.payload
        },
        add_username: (state, action) => {
            state.username = action.payload
        },
        add_code: (state, action) => {
            state.code = action.payload
        },
        add_password_rep: (state, action) => {
            state.password_rep = action.payload
        },
        add_first: (state, action) => {
            state.first_name = action.payload
        },
        add_last: (state, action) => {
            state.last_name = action.payload
        },
        login_logout: (state) => {
            state.isLoggedIn = !state.isLoggedIn
        }
    }
})

export const { add_email, add_password, add_code, add_first, add_last, add_password_rep, add_username, login_logout } = LoginSlice.actions;
export default LoginSlice.reducer;