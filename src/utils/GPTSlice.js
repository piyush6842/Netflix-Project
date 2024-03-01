import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name : "GPT",
    initialState : {
        showGPTSearch : false,
        gptMovies : null,
    },
    reducers : {
        toggleGPTSearchView: (state)=>{
            state.showGPTSearch = !state.showGPTSearch
        },
        addGPTMovieResult : (state,action)=>{
            state.gptMovies = action.payload;
        },
        
    },
})

export default GPTSlice.reducer;
export const {toggleGPTSearchView,addGPTMovieResult} = GPTSlice.actions;