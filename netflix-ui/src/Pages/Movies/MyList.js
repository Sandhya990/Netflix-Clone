import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { CiCircleChevDown } from "react-icons/ci";
import { FaPlayCircle } from 'react-icons/fa';
import vid from './SPIDER-MAN_ NO WAY HOME - Spider-Mans Trailer.mp4'
import NetflixNav from '.././.././Components/Home/NetflixNav'
import './MyList.css'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";




 const MyList = () => {

    const userEmail = localStorage.getItem('inpname')
    console.log(userEmail)

    const [data, setData] = useState([])

    const image = useRef()


    useEffect(()=>{
        axios.get(`http://localhost:6012/netflixapidatas?userEmail=${userEmail}`)
        .then(res=>{
            setData(res.data)
            console.log(res.data)
        })  
    },[])



    const getData = ()=>{
        axios.get(`http://localhost:6012/netflixapidatas?userEmail=${userEmail}`)
        .then(res=>setData(res.data))
        console.log(res.data)
        console.log(data)
        .catch(error => console.error('Error deleting item:', error));
    }
    console.log(data)


    function deleteHandler(id){
        axios.delete(`http://localhost:6012/netflixapidatas/${id}`)
        .then(()=>getData())
        .catch(error => console.error('Error while deleting item:', error));
    }

    console.log(data)


    return (
        <div >

            <div style={{background:'black'}}>               
                <NetflixNav/>
            </div>

        <div className='filteredData'>

            <div id="main-cards-containe" >

            <div id="cardsContainer" >
            
            {
                data.map((e)=>{
                    return (
                                    <div className="Card" key={e._id} >
                                    
                                        <div className="imgCard"  >
                                            <div className='filterItemHover' >
                                                <img className='src pic' src={`https://image.tmdb.org/t/p/w1280${e.details.imageUrl}`}  alt=""  />

                                                <video className="MyListSrc vid" src={vid} autoPlay muted></video>

                                                <div className='vid content_box'>

                                                    <h4 id='filterTitle'>{e.details.title || e.details.name}</h4>


                                                    <div className='icons' id='filterIcons'>
                                                        <div>
                                                            <FaPlayCircle  size={28} className='sliderIcons'/>   

                                                            <IoIosCheckmarkCircleOutline size={32} className='sliderIcons ' onClick={()=>deleteHandler(e._id)}/> 
                                                            
                                                            <AiOutlineLike size={14} className='sliderIcons sliderIconsLike'/>

                                                        </div>

                                                        <div>
                                                            <CiCircleChevDown size={32} />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                            )           
                })
            }
        </div>
        </div>
        </div>
        </div>
    );
 };
 
 export default MyList;

 