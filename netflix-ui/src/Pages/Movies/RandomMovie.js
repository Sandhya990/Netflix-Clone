import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiInfo } from "react-icons/fi";
import './MoviesStyling.css';
import video from './SPIDER-MAN_ NO WAY HOME - Spider-Mans Trailer.mp4'
import { Link } from 'react-router-dom';



const RandomMovie = ({randomData}) => {

    console.log(randomData)

    const dispatch = useDispatch()
    const select = useSelector(state => state.movies)
    console.log(select)
    const geners = select
  
    const totalMov = [...geners.discMovies,...geners.discTV,...geners.trendMovies,...geners.trendTV]
    console.log(totalMov)


    const [data,setData]=useState([])
    
    useEffect(() => {
        if (randomData && randomData.length > 0) {
            const randomIndex = Math.floor(Math.random() * randomData.length);
            setData( randomData[randomIndex])
        }
    }, [randomData])

    console.log(data)

    const imgRef=useRef()
    const videoRef=useRef()
    const para=useRef()
    const title=useRef()



    // for automatic(Using setTimeOut) hiding image and setting video into display block

    // setTimeout(() => {
    //     para.current.style.display='none'
    //     title.current.style.top='40%'
    //     title.current.style.fontSize='2.3rem'
    //     title.current.style.transition='.4s'
    // }, 4000)

    // setTimeout(() => {
    //     imgRef.current.style.display='none'
    //     videoRef.current.style.display='block'
    // }, 9000)
    

    setTimeout(() => {
        if(para.current!==null &&title.current!==null){        
        para.current.style.display='none'
        title.current.style.top='40%'
        title.current.style.fontSize='2.3rem'
        title.current.style.transition='.4s'
        }
    }, 4000);    

    setTimeout(() => {
        if(videoRef.current!==null){
            imgRef.current.style.display='none'
            videoRef.current.style.display='block'
        }
    },5000);



    return (
        <div>

            <div className="randomDiv">
                {data && (
                    <>
                        <img src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`} alt={data.title}  className="randomImage" ref={imgRef}/>

                        <video className="randomImage" src={video} ref={videoRef} style={{display:'none', zIndex:'-1'}} loop autoPlay muted  ></video>

                        <h1 className="movieTitle" ref={title}>{data.title||data.name} </h1>
                        
                        {/* <p className="movieOverview" ref={para}>{data.overview}</p> */}
                        <p className="movieOverview" ref={para}>{data.overview}</p>


                        <div className="randombtns">
                            <div>
                                <Link to={'/player'}><button className="randomPlayButton" > <span className="randomPlay"><i class="fa-solid fa-play"></i></span>Play</button></Link>
                            </div>
                            <div>
                                <button className="randomMoreInfo"> <span className="randomInfoIcon"><FiInfo /> </span >More Info</button> 
                            </div>
                        </div>                    
                        
                    </>
                )}
            </div>

        </div>

    );
};

export default RandomMovie;

