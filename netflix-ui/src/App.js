import './App.css';
import React from 'react';
import LandingPage from './Components/Header/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Components/SignUp/Registration';
import Registration2 from './Components/SignUp/Registration2';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignUp/Login';
import NetflixHomePage from './Components/Home/NetflixHomePage';
import DiscoverMovies from './Pages/Movies/DiscoverMovies';
import DiscoverTv from './Pages/Movies/DiscoverTv';
import TrendingTv from './Pages/Movies/TrendingTv';
import Trending from './Pages/Movies/Trending';
import MyList from './Pages/Movies/MyList';
import Player from './Pages/Movies/Player';


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
          
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/signup/registration' element={<Registration/>}/>
            <Route path='/signup/password' element={<Registration2/>}/>
            <Route path='/signup/regform' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>

          <Routes>
            <Route path='/netflixHomepage'  element={<NetflixHomePage/>} />
            <Route path='/discoverMovies'  element={<DiscoverMovies/>} />
            <Route path='/discoverTvShows'  element={<DiscoverTv/>} />
            <Route path='/trendingMovies'  element={<Trending/>} />
            <Route path='/trendingTvShows'  element={<TrendingTv/>} />
            <Route path='/myList'  element={<MyList/>} />
            <Route path='/player'  element={<Player/>} />
          </Routes>
          
      </BrowserRouter>
     

    </div>
  );
};

export default App;
