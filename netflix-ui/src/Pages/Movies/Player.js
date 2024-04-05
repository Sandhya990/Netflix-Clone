import React from 'react';
import video from './SPIDER-MAN_ NO WAY HOME - Spider-Mans Trailer.mp4'
import './MoviesStyling.css'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';




const Player = () => {

    let navigate = useNavigate()

    function prevPage(){
        navigate(-1)
    }

    return (
        <div id='player'>

            <div >
                <span className='leftArrowPlayerVideo'  onClick={prevPage}><FaArrowLeft size={34}/></span>
                <video className="playerVideo" src={video} controls autoPlay muted loop ></video>
            </div>
            
        </div>
    );
};

export default Player;