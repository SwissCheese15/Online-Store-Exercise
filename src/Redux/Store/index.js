// Standard Import to build Store
import { configureStore } from "@reduxjs/toolkit";
// Manu's imports
import cartReducer from "../Slices/slice"
import loginSliceReducer from "../Slices/loginSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        LoginSlice: loginSliceReducer
    }
});

