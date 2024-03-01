import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./MovieSlice";
import GPTReducer from "./GPTSlice";
const AppStore = configureStore({
    reducer :{
        user  : userReducer , 
        movies : moviesReducer,
        GPT : GPTReducer,
    },
})

export default AppStore;