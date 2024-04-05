import React, { useEffect , useRef } from 'react';
import './Filtereddata.css'
import { AiOutlineLike } from "react-icons/ai";
import { CiCircleChevDown } from "react-icons/ci";
import vid from './SPIDER-MAN_ NO WAY HOME - Spider-Mans Trailer.mp4'
import { useDispatch, useSelector } from 'react-redux';
import { discoverMovie } from '../Store/Reducer';
import { FaPlayCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";



const Filtereddata = ({ data }) => {
    console.log(data)

    const img = useRef()
    const dispatch = useDispatch()
    const select = useSelector(state => state.movies.movies)
    console.log(select)


    data = data.filter((value, index, self) =>
        index === self.findIndex((e) => (
            e.title=== value.title
        ))||self.findIndex((e) => (
            e.name=== value.name))
    )


    useEffect(() => {
        dispatch(discoverMovie())
    }, [])

    

    return (

        <div className='filteredData'>

        <div id="main-cards-container" >

            <div id="cardsContainer" >

                {
                    data.map((e) =>

                        <div className="Card" key={e.id} >

                                        <div className="imgCard"  >
                                            <div className='itemHover' >
                                                <img className='src pic' src={`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`} ref={img} alt="" />

                                                <video className="src vid" src={vid} autoPlay muted></video>

                                                <div className='vid content_box'>

                                                    <h4 id='filterTitle'>{e.title || e.name}</h4>
                                                    <h6 id='vote'>{e.vote_average ? `${(e.vote_average * 10).toFixed(0)}% Match` : 'N/A'}</h6>

                                                    <div className='icons' id='filterIcons'>
                                                        <div>
                                                            <FaPlayCircle  size={28} className='sliderIcons'/>   

                                                            <CiCirclePlus size={32} className='sliderIcons' /> 

                                                            <AiOutlineLike size={14} className='sliderIcons sliderIconsLike'/>
                                                        </div>

                                                        <div>
                                                            <CiCircleChevDown size={32} />
                                                        </div>
                                                    </div>

                                                   
                                                    <h5 style={{fontSize:'11px'}} className='release'>   <span style={{paddingLeft:'18px'}}>Release Date : {e.first_air_date || e.release_date}</span> </h5>

                                                </div>
                                            </div>
                                        </div>
                        </div>

                    )
                }

            </div>

        </div>


        </div>        
                        

    );
};

export default Filtereddata;