import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import './Accord.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Faq = () => {

    const items = [
    {
       title: "What is Netflix?",
       content1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices." ,
       content2:"You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
       title: "How much does Netflix cost?",
       content1: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
       content2:""
    },
    {
        title: "Where can I watch?",
        content1: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
        content2:"You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
     },
     {
         title: "How do I cancel?",
         content1: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.",
         content2:""
      },
      {
        title: "What can I watch on Netflix?",
        content1: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        content2:""
     },
     {
        title: "Is Netflix good for kids?",
        content1: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
        content2:"Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
    },
    ] 

    const [activeIndex, setActiveIndex] = useState(-1);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    }

    
    // for the email validation

    const [data,setData] = useState([]);

    const[email, setEmail] = useState()

    const[emaildata, setEmailData] = useState();


    useEffect(()=>{
        let netflixData = axios.get('https://65b77f8e46324d531d54bbcb.mockapi.io/netflix')
        .then(res => setEmailData(res.data))
    },[])
 
    const navigate = useNavigate()

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

    // function display(){
    //     if(inputvalue2.current.value === ''){
    //         seterr3(true)
    //         seterr4(false)
    //         inputvalue2.current.classList.add('inperr')
    //     }
    //     else if(data2.match(/^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/) ){
    //         seterr3(false)
    //         seterr4(false)
    //         inputvalue2.current.classList.add('inperrgre')
    //         localStorage.setItem('inputname',data2)
    //     }
    //     else{
    //         seterr3(false)
    //         seterr4(true)
    //         inputvalue2.current.classList.add('inperr')
    //     }
    // }

return (
    <div>
        <div className="accordionContainer">

            <div className="faqMainDiv">

                <div className="faqHeading">
                    <h1 className='faq'>Frequently Asked Questions</h1>
                </div>

                {items.map((item, index) => (

                    <div className="accordionItem" key={item.title}>
                
                        <div className="accordionClick" onClick={()=>handleClick(index)} >
                            <p className='accordionCross'><span className='ItemSpan'>{item.title}</span>
                                <span className='plus'>
                                    {index !==activeIndex && 
                                        <svg width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fillRule="evenodd" clipRule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"/></svg>}
                                    {index ===activeIndex && 
                                        <svg width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1 cross" data-name="Plus" alt=""><path fillRule="evenodd" clipRule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"/></svg>}
                                </span>
                            </p>
                        </div>

                        <div className="accor_ans">
                            {index === activeIndex && <div className='accordionPara'><p>{item.content1}</p> {item.content2?<p>{item.content2}</p>:<div></div>}</div>}
                        </div>

                    </div>      
                ))}
            </div>

            <div className='mail footermail'>
                <p className='accordpara'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="sign_mail">

                    <div>
                      <input type="email" placeholder='Email address' name="email" value={email} onChange={handle}  ref={inputvalue}/>
                      <br/>{emptyError?<small className='err'><i className="fa-regular fa-circle-xmark"></i> Email is required</small>:<small></small>}{invalidError?<small className='err'><i className="fa-regular fa-circle-xmark"></i> Enter Valid Email address</small>:<small></small>}                      
                    </div>

                    <div>
                      <button className='get_start' onClick={change}><span>Get Started </span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"/></svg>
                      </button> </div>     
                    </div>
            </div>

        </div>

        <Footer/>
    </div>
    );
};

export default Faq;