import React, { useEffect } from 'react';
import TrendingMovies from './TrendingMovies';
import TrendingTv from './TrendingTv';
import NetflixHomePageFooter from './NetflixHomePageFooter';
import NetflixNav from '../../Components/Home/NetflixNav';



const Trending = () => {

    useEffect(()=>{
        document.title = "Trending Movies"
      },[])
  

    return (
        <div className='trending '  >

            <NetflixNav/>
            <TrendingMovies/>
            <TrendingTv/>

            <NetflixHomePageFooter/>
        </div>
    );
};

export default Trending;
