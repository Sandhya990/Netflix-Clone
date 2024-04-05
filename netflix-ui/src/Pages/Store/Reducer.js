import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "./API_KEY";
import axios from "axios";



export const discoverMovie = createAsyncThunk('netflix-discMov', async()=>{
  const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?${API_KEY}&language=en`);
  console.log(data)
  
 

  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=941772dfca358ffe8b21cd29cf85c5fc&append_to_response=videos,images`)

  return res.json();  
})


export const discoverTV = createAsyncThunk('netflix-discTV', async()=>{
  const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=941772dfca358ffe8b21cd29cf85c5fc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
  console.log(res)

  return res.json();

})

export const trending = createAsyncThunk('netflix-trend', async()=>{
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=941772dfca358ffe8b21cd29cf85c5fc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
  console.log(res)
  return res.json();
})


export const trendingMovies = createAsyncThunk('netflix-trendMovies', async()=>{
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=941772dfca358ffe8b21cd29cf85c5fc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
  return res.json();  
})

export const trendingTV = createAsyncThunk('netflix-trendTV', async()=>{
  const res = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=941772dfca358ffe8b21cd29cf85c5fc&include_adult=false`)
  

  console.log(res)
  return res.json();   
})



export const movieGenres = createAsyncThunk('netflix-movGenre', async()=>{
  const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=941772dfca358ffe8b21cd29cf85c5fc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
  console.log(data)

  return data.genres;

})

export const tvGenres = createAsyncThunk('netflix-tvGenre', async()=>{
  const {data} = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=941772dfca358ffe8b21cd29cf85c5fc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
  console.log(data)
  return data.genres;
});

 

const storeSlice = createSlice({
    name: 'movies',
    initialState :{
        discMovies:[],
        discTV:[],
        trendMovies:[],
        trendTV:[],
        movGenre:[],
        tvGenre: [],
        trend: [],
    },
    extraReducers: (builder)=>{
       
        builder.addCase(discoverMovie.fulfilled,(state, {payload})=>{
          state.discMovies=payload.results
          console.log(state.discMovies)
        });
        builder.addCase(discoverTV.fulfilled,(state, {payload})=>{
          state.discTV=payload.results
          console.log(state.discTV)
        });
        
        builder.addCase(trendingMovies.fulfilled, (state,{payload})=>{
          state.trendMovies = payload.results
          console.log(state.trendMovies)
         });

        builder.addCase(trendingTV.fulfilled, (state,{payload})=>{
          state.trendTV = payload.results
          console.log(state.trendTV)
         });


        builder.addCase(movieGenres.fulfilled, (state,{payload}) => {
          console.log(payload)
          state.movGenre = payload
          console.log(state.movGenre)
        });

        builder.addCase(tvGenres.fulfilled, (state,{payload}) => {
          console.log(payload)
          state.tvGenre = payload 
          console.log(state.tvGenre)
        });

        builder.addCase(trending.fulfilled, (state,{payload})=>{
          state.trend = payload.results
          console.log(state.trend)
         });



    },
   
})

export default storeSlice.reducer;



// TV Array(16) [
//   { id: 10759, name: 'Action & Adventure' },
//   { id: 16, name: 'Animation' },
//   { id: 35, name: 'Comedy' },
//   { id: 80, name: 'Crime' },
//   { id: 99, name: 'Documentary' },
//   { id: 18, name: 'Drama' },
//   { id: 10751, name: 'Family' },
//   { id: 10762, name: 'Kids' },
//   { id: 9648, name: 'Mystery' },
//   { id: 10763, name: 'News' },
//   { id: 10764, name: 'Reality' },
//   { id: 10765, name: 'Sci-Fi & Fantasy' },
//   { id: 10766, name: 'Soap' },
//   { id: 10767, name: 'Talk' },
//   { id: 10768, name: 'War & Politics' },
//   { id: 37, name: 'Western' }
// ]

// {
//   Movies genres: Array(19) [
//     { id: 28, name: 'Action' },
//     { id: 12, name: 'Adventure' },
//     { id: 16, name: 'Animation' },
//     { id: 35, name: 'Comedy' },
//     { id: 80, name: 'Crime' },
//     { id: 99, name: 'Documentary' },
//     { id: 18, name: 'Drama' },
//     { id: 10751, name: 'Family' },
//     { id: 14, name: 'Fantasy' },
//     { id: 36, name: 'History' },
//     { id: 27, name: 'Horror' },
//     { id: 10402, name: 'Music' },
//     { id: 9648, name: 'Mystery' },
//     { id: 10749, name: 'Romance' },
//     { id: 878, name: 'Science Fiction' },
//     { id: 10770, name: 'TV Movie' },
//     { id: 53, name: 'Thriller' },
//     { id: 10752, name: 'War' },
//     { id: 37, name: 'Western' }
//   ]
// }




// npm i react-redux @reduxjs/toolkit





