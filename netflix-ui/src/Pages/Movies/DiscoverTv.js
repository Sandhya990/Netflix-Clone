import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { discoverTV, trendingTV } from '../Store/Reducer';
import NetflixNav from '../../Components/Home/NetflixNav';
import './Carousel.css'
import NetflixHomePageFooter from './NetflixHomePageFooter';
import GenresListTv from './GenreListTv';



const DiscoverTv = () => {

    const dispatch = useDispatch();
    const select = useSelector(state => state.movies);
    console.log(select);

    const geners=select
    console.log(select.discTV);

    const mv = [...geners.discTV]
    console.log(mv);

    const genreList = [...geners.tvGenre]
    console.log(genreList)


    const datas= [...geners.discTV, ...geners.trendTV]
    console.log(datas)

    const trailer= [...geners.trendTV]
    console.log(trailer)


    useEffect(() => {
      dispatch(discoverTV())
      .then(dispatch(trendingTV()))     
  }, [])


    useEffect(()=>{
      document.title = "TV Shows - Netflix"
    },[])

    const[list,setList]=useState(false)

    function genresOpen() {
      setList(!list)
    }


  return (
    <div style={{backgroundColor:'#000'}}>
      
      <NetflixNav/>


      <GenresListTv title='TV Shows' listGenre={genreList} data={datas} trailerdata={trailer} trend={trailer} />


      <NetflixHomePageFooter/>

    </div>
    );
};

export default DiscoverTv;

