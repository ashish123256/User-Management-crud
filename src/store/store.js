import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../redux/userReducer";


const store = configureStore({
    reducer:{
        users:UserReducer
    }
})


export default store