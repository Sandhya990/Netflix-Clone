import React, { useEffect, useRef, useState } from 'react';
import './NewSlider.css'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineLike } from "react-icons/ai";
import { CiCircleChevDown } from "react-icons/ci";
import video from './SPIDER-MAN_ NO WAY HOME - Spider-Mans Trailer.mp4'
import { FaPlayCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios';
import { Link } from 'react-router-dom';




const Slider = ({ data }) => {

    const userEmail = localStorage.getItem('inpname')

    console.log(userEmail)

    console.log(data)

    const img = useRef()
    const slide = useRef()


    


    const slideLeft = () => {
        var slider = slide.current;
        slider.scrollLeft = slider.scrollLeft + 320;
    }

    const slideRight = () => {
        var slider = slide.current;
        slider.scrollLeft = slider.scrollLeft - 320;
    }





    // MyList functionality
    
    const [name, setName] = useState()
    const [imageUrl , setImageUrl] = useState()


    const addToMyList = async(id)=>{
        const filter = data.filter(e=>e.id===id)
        setName(filter[0].title||filter[0].name)
        setImageUrl(filter[0].backdrop_path)
    }


    
    useEffect(()=>{
        console.log(name)
        console.log(imageUrl)

        try{
            if(name !==undefined && imageUrl!==undefined){
                axios.post('http://localhost:6012/netflixapidatas'  , {userEmail,name, imageUrl})
            }
        }
        catch(e){
            console.log(e.error)
        }       
    } , [name,imageUrl])




    return (
        <div id="main-slider-container" >
            <MdChevronLeft className="slider-icon left" onClick={slideRight} />
            <div id="slider" ref={slide}>
                {
                    data.slice(0, 20).map((e) =>
                        <div className="slider-card" key={e.id} >
                            <div className="slider-card-image"  >
                                <div className='itemHover' >
                                    <img className='src pic' src={`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`} ref={img} alt="" />

                                    <video className="src vid" src={video} loop autoPlay muted></video>
                                    <div className='vid content_box'>
                                       
                                        <h4>{e.title || e.name}</h4>
                                        <h6>{e.vote_average ? `${(e.vote_average * 10).toFixed(0)}% Match` : 'N/A'}</h6>

                                        <div className='icons'>

                                            <div>
                                                <Link to={'/player'}><FaPlayCircle  size={28} className='sliderIcons' /> </Link>  

                                                <CiCirclePlus size={32} className='sliderIcons tooltip'  onClick={()=>{addToMyList(e.id)}}/> 

                                                <AiOutlineLike size={14} className='sliderIcons sliderIconsLike'/>
    
                                            </div>
                                            <div>
                                                <CiCircleChevDown size={31} className='sliderIcons'/>
                                            </div>

                                        </div>
                                     

                                        <h5 style={{fontSize:'9px'}}> Release Date : {e.first_air_date || e.release_date}  <span style={{paddingLeft:'40px'}}>Vote Count : {e.vote_count}</span> </h5>


                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }

            </div>

            <MdChevronRight className="slider-icon right" onClick={slideLeft} />
        </div>
    )
}
export default Slider;




