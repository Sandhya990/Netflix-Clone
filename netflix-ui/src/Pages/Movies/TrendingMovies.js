import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from './Slider';
import { trendingMovies } from '../Store/Reducer';
import './MoviesStyling.css'


const TrendingMovies = () => {

    const dispatch = useDispatch();
    const select = useSelector(state => state.movies);
    console.log(select);

    const geners=select
    console.log(select.trendMovies);

    const mv = [...geners.trendMovies]
    console.log(mv);


    useEffect(() => {
        dispatch(trendingMovies());     
    }, []);




  return (
    <div>


      <div className='trendingMovies'>
          
          <h2 style={{paddingLeft:'35px'}}>Trending Movies</h2>

          <Slider data={mv} title='Trending Movies'/>

      </div>

    </div>
    );
};

export default TrendingMovies;