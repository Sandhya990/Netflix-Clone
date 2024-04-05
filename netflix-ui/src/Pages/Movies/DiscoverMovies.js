import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { discoverMovie, trendingMovies } from '../Store/Reducer';
import NetflixNav from '../../Components/Home/NetflixNav';
import GenresList from './GenresList';
import NetflixHomePageFooter from './NetflixHomePageFooter';
// import './Carousel.css'



const DiscoverMovies = () => {

    const dispatch = useDispatch();
    const select = useSelector(state => state.movies);
    console.log(select);

    


    const geners=select
    console.log(select.discMovies);

    const mv = [...geners.discMovies]
    console.log(mv)


    const genreList = [...geners.movGenre]
    console.log(genreList)



    const datas= [...geners.discMovies, ...geners.trendMovies]
    console.log(datas)

    const trailer= [...geners.trendMovies]
    console.log(trailer)

    const trending = [...geners.trend]
    console.log(trending)



    useEffect(() => {
        dispatch(discoverMovie())
        .then(dispatch(trendingMovies()))     
    }, [])

    

    useEffect(()=>{
        document.title = "Movies - Netflix"
      },[])


  return (

    <div style={{backgroundColor:'#000', color:'#fff'}}>

        <NetflixNav/>   

        <GenresList title='Movies' listGenre={genreList}  data={datas} trailerdata={trailer} trend={trailer}/>

        <NetflixHomePageFooter/>

    </div>
    
    );
};


export default DiscoverMovies;



