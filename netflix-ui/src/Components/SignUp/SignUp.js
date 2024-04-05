import React, { useEffect, useState } from 'react';
import './SignUp.css'
import Navbar from './Navbar';
import RegFooter from './RegFooter';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Pages/Utiles/Config';
import axios from 'axios';




const SignUp = () => {

//to get the username(email) from the local storage.We set email at LandingPage component and getting in this component
    const[userName,setUserName] = useState(localStorage.getItem('inpname'))

    function handleCredentials(e){
        setUserName(e.target.value)
        console.log(userName)       
    }


    const[password,setPassword] = useState()

    function handlePassword(e){
        setPassword(e.target.value)  
        console.log(password)  
        localStorage.setItem('passwordVal',password) 
    }

    // to navigate to the another page when we click on particular button or element
    let navigate = useNavigate()


    const[emaildata, setEmailData] = useState();
    console.log(emaildata)


    useEffect(()=>{
      let netflixData = axios.get('https://65b77f8e46324d531d54bbcb.mockapi.io/netflix')
      .then(res => setEmailData(res.data))
    },[])

    const[usedMailError,setUsedMailError] = useState('')
    const[invalidMail,setInvalidMailError] = useState('')

    const[emptyPassword,setEmptyPassword] = useState('')
    const[invalidPassword,setInvalidPassword] = useState('')
    
    async function handleClick(e){
        e.preventDefault()

        // from firebase, we are using createUserWithEmailAndPassword() method to create the new email and password.
        // these credentials are going to store in the FB DB. if we provide wrong password, it'll throw an error.

        try{
            await createUserWithEmailAndPassword(auth,userName,password).then(()=> navigate('/netflixHomepage'))
            
            if(emaildata != userName){
                axios.post('https://65b77f8e46324d531d54bbcb.mockapi.io/netflix', {userName, password})
            }
        }

        // instead of errors from firebase, we are updating errors as userdefined/custom errors
        catch(err){
            if(err.code==='auth/email-already-in-use'){
                setUsedMailError("Email is already exists")
            }
            else if(err.code=== 'auth/invalid-email'){
                setInvalidMailError('Email is not valid')
            }
            else if(err.code==='auth/weak-password'){
                setInvalidPassword("Password should be 6 and 60 charecters")
                }
            else if(err.code==='auth/missing-password'){
                setEmptyPassword("Please enter your password")
            }
        } 

        
    }

    


    return (
        <div>
            
            <div>

                <Navbar/>

                <div className='SignupCont'>
                    <div className='SignupMain'>
                        <p id='SignUpStep'>STEP <b>1</b> OF <b>3</b></p>
                        <div className='SignUpHeader'>Create a password to start your membership</div>
                        <div className="signup-caption">
                            <p >Just a few more steps and you're done!</p>
                            <p>We hate paperwork, too.</p>
                        </div>

                        <div className="SignLoginForm">
                            <form action="">
                            <div className='SignLoginCont'>
                                
                                
                                
                                <div className="Signinput-field">
                                    <input type="text" required  value={userName} 
                                    onChange={handleCredentials}/>
                                    
                                    <label>Email or phone number</label>
                                </div>
                                {invalidMail&& <small style={{color:'red'}}>{invalidMail}</small>}
                                  {usedMailError&& <small style={{color:'red'}}>{usedMailError}</small>}

                                <div className="Signinput-field">
                                    <input type="password" required  onChange={handlePassword}/>
                                    <label>Password</label>
                                </div>
                                {invalidPassword&& <small style={{color:'red'}}>{invalidPassword}</small>}
                                {emptyPassword&& <small style={{color:'red'}}>{emptyPassword}</small>}

                                <button className='SignupNext' type='submit' onClick={handleClick}>Submit</button>

                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>

                <RegFooter/>
            </div>
        </div>
    );
};

export default SignUp;