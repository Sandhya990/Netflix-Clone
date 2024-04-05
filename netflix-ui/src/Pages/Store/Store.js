import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";


const Store = configureStore({
    reducer : {
        movies:Reducer
    }

    // reducer : {
    //     movies:Reducer,
    //     newMovies:Reducer2
    // }

})

export default Store;

