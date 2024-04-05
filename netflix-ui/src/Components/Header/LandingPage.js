import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import "./Landing.css";
import tv from "../../assets/tv.png";
import girl from "../../assets/girl.jpg";
import stranger from "../../assets/stranger.png";
import rajma from "../../assets/rajma.png";
import child from "../../assets/children.png";
import Faq from "./Faq";
import { useNavigate} from "react-router-dom"
import axios from "axios";


const LandingPage = () => {
 
  const navigate = useNavigate()


  // for the email validation

    const [data,setData] = useState([]);

    const[email, setEmail] = useState()

    const[emaildata, setEmailData] = useState();

    useEffect(()=>{
      let netflixData = axios.get('https://65b77f8e46324d531d54bbcb.mockapi.io/netflix')
      .then(res => setEmailData(res.data))
    },[])


    function handle(e){
      e.preventDefault();
      setData({...data,[e.target.name] : e.target.value})
    }
    const inputvalue = useRef()

    const [emptyError,setEmptyError] = useState(false)
    const [invalidError,setInvalidError] = useState(false)
    
    
    function change(e){
      e.preventDefault();
      
        if(inputvalue.current.value === ''){
            setEmptyError(true)
            setInvalidError(false)
            inputvalue.current.classList.add('inperr')
        }
        else if(inputvalue.current.value.match(/^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/)){
            setEmptyError(false)
            setInvalidError(false)
            inputvalue.current.classList.add('inperrgreen')
            localStorage.setItem('inpname', inputvalue.current.value)

            let netflix = emaildata.find((o)=> o.userName === inputvalue.current.value)

          if(netflix){                   
              navigate('/login')
          }
          else{
            navigate('signup/registration')
          }                       
        }
        else{
            setEmptyError(false)
            setInvalidError(true)
            inputvalue.current.classList.add('inperr')
        }
    }

    


  return (
    <div className="background">

      <div className="backgroundimage">
      <Header />

      
        {/* landing page */}

        <div className="land_intro">

            <div className="intro_sub">

                <div className="big_head">                    
                    <h1>Unlimited movies, TV shows and more</h1>
                </div>

                <div className="membership">
                    <p>Watch anywhere. Cancel anytime</p>
                </div>

                <div className="watch_quote">
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>

                <div className="sign_mail">

                    <div>
                      <input type="email" placeholder='Email address' name="email" value={email} onChange={handle}  ref={inputvalue}/>
                      <br/>{emptyError?<small className='err'><i className="fa-regular fa-circle-xmark"></i> Email is required</small>:<small></small>}{invalidError?<small className='err'><i className="fa-regular fa-circle-xmark"></i> Enter Valid Email address</small>:<small></small>}                      
                    </div>
                    
                    <div>
                      <button className='get_start' onClick={change}><span>Get Started </span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"/></svg>
                      </button> 
                    </div>  

                  </div>
              </div>
          </div>



      </div>


{/* content 1 starts */}
      <div className="sideheading side1">
          <div className="sidehead">
            <h1 className="watch ">Enjoy on your TV</h1>
            <p className="paragraph">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more
            </p>
          </div>

          <div className="div1">
              <img src={tv} alt="" className="tv" />

              <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              muted
              autoPlay
              loop
              className="video1"
              ></video>
          </div>
      </div>

{/* content 2 starts from here */}
    <div className="sideheading sideheading2">

        <div className="div1">
            <img src={girl} alt="" className='girl'/>

            <div className='strangerbtn'>
                <div className="stranger_img">
                    <img src={stranger} alt="" className='stranger' />
                </div>

                <div className="things_main">
                    <div className='things'>
                        <h4>Stranger Things</h4>
                        <p className='downloading'>Downloading...</p>
                    </div>

                    <div className='gif'>
                        <img src="download-icon.gif" alt="" />
                    </div>
                </div>

            </div>                                                              
      </div>

      <div className="sidehead">
          <h1 className="watch watch2">Download your shows to watch offline</h1>
          <p className="paragraph">
          Save your favourites easily and always have something to watch.
          </p>
      </div>


    </div>

{/* content 3 starts from here */}
    <div className="sideheading sideheading3">
        <div className="sidehead ">
          <h1 className="watch watch3">Watch everywhere</h1>
          <p className="paragraph">
          Stream unlimited movies and TV shows on  your phone, tablet, laptop, and TV.
          </p>
        </div>

        <div className="div1 div3">
          <img src={rajma} alt="" className="tv rajma" />

          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"
            muted
            autoPlay
            loop
            className="video1 video3"
          ></video>
        </div>
      </div>

{/* content 4 starts from here */}
      <div className="sideheading sideheading4">

          <div className="div1 div3">
              <img src={child} alt="" className="tv child" />
          </div>
          
          <div className="sidehead sidehead4">
              <h1 className="watch watch4">Create profiles for kids</h1>
              <p className="paragraph">
              Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>
       
      </div>

      <div className="">
        <Faq/>
      </div>

    </div>
  );
};

export default LandingPage;







