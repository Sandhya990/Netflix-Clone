import React, { useEffect, useRef, useState } from 'react';
import './Login.css'
import { IoEye, IoEyeOff, IoLanguage } from "react-icons/io5";
import { Link , useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Pages/Utiles/Config';


const Login = () => {

    const[loginMail,setLoginMail] = useState(localStorage.getItem('inpname'))
    const[loginPassword,setLoginPassword] = useState(localStorage.getItem('passwordVal'))

    function handleMail(e){
        setLoginMail(e.target.value)
        console.log(loginMail)       
    }


    function handlePassword(e){
        setLoginPassword(e.target.value)
        console.log(loginPassword)       
    }
    

    let navigate = useNavigate()

    function handlePage(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth,loginMail,loginPassword)
        .then((res)=> navigate('/netflixHomepage'))
        .catch((err)=>console.log(err))  
    }

    const[usedMailError,setUsedMailError] = useState('')
    const[invalidMail,setInvalidMailError] = useState('')

    const[emptyPassword,setEmptyPassword] = useState('')
    const[invalidPassword,setInvalidPassword] = useState('')
    
    async function handleClick(e){
        e.preventDefault()

        // from firebase, we are using createUserWithEmailAndPassword()method to create the new email and password.
        // these credentials are going to store in the FB DB. if we provide wrong password, it'll throw an error.

        try{
            await signInWithEmailAndPassword(auth,loginMail,loginPassword).then(()=>navigate('/netflixHomepage'))
            localStorage.setItem('inpname',loginMail)
            localStorage.setItem('passwordVal',loginPassword)
        }
        
        // instead of errors from firebase, we are updating errors as userdefined/custom errors
        catch(err){
            if(err.code=== 'auth/invalid-email'){
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

    useEffect(()=>{
        document.title="Netflix - Login"
    })


    // remember me functionality
    const [email, setemail] = useState(localStorage.getItem("myapp-email") || "");
    const [password, setpassword] = useState(localStorage.getItem("myapp-password") || "")

    const rememberCheck = useRef()

        function remember(){
            if(rememberCheck.current.checked){
              localStorage.setItem("myapp-email", email); 
              localStorage.setItem("myapp-password", password)
            }
            else{
              localStorage.setItem("myapp-email", "")
              localStorage.setItem("myapp-password", "")            
            }
        }

// show password 
        const [showpass,Setshowpass]=useState(true)
    

    return (
        <div>

            <div className='LoginBackground'>
                
                <div className='LoginNavbar'>
                    <div>
                        <Link to='/'><svg viewBox="0 0 111 30" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xmlnsXlink="http://www.w3.org/1999/xlink" 
                            className="netflix-svg"><g>
                            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" ></path></g>
                        </svg></Link>
                    </div>
                </div>
                

                <div className="LoginForm">
                        <form action="">
                            <div className='LoginCont'>
                                <h1>Sign In</h1>
                                
                                <div className="input-field">
                                    <input type="email" required  value={loginMail} onChange={handleMail}/>
                                    <label>Email or phone number</label>
                                </div>
                                {invalidMail&& <small style={{color:'red'}}>{invalidMail}</small>}
                                {usedMailError&& <small style={{color:'red'}}>{usedMailError}</small>}

                                <div className="input-field">                       
                                        {/* <input type="password" required 
                                        onChange={handlePassword}/> */}
                                        <input type={showpass?"password" : "text"} required 
                                        onChange={handlePassword}/>
                                        <span onClick={()=>Setshowpass(!showpass)} className='showPassword'>{showpass?<IoEye />:<IoEyeOff />}</span>
                                    <label>Password</label>
                                </div>

                                

                                {invalidPassword&& <small style={{color:'red'}}>{invalidPassword}</small>}
                                {emptyPassword&& <small style={{color:'red' }}>{emptyPassword}</small>}

                                <br /><br />
                                <button className='LoginButton' onClick={(e)=>handleClick(e)}><b>Sign In</b> </button>
                                <p className='or'>OR</p>
                                <p className='use'> <b>Use a sign-in code</b> </p>

                                <p className='or'>Forgot password?</p>

                                <label htmlFor="Save-login" className='check'>
                                    <input type="checkbox" id="Save-login" onClick={remember} ref={rememberCheck}/>
                                    <p className='Loginremember'>Remember me</p>
                                </label>

                                <p> <span className='LoginNew'>New to Netflix?</span> <b className='LoginSignUp'>Sign up now</b></p>
                                <p className='LoginThis'>This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                                    <span className='LoginLearn'>  Learn more.</span> </p>
                            </div>
                                
                        </form>
                    </div>




                <div className='LoginFooter'>
                    <p>Questions? Call <span>000-800-919-1694</span> </p>
                    <div className='LoginDiv'>
                        <div>
                            <p>FAQ</p>
                            <p>Cookie Preference</p>
                        </div>

                        <div>
                            <p>Help Centre</p>
                            <p>Corporation Information</p>
                        </div>

                        <div>
                            <p>Terms of use</p>
                        </div>

                        <div>
                            <p>Privacy</p>
                        </div>
                    </div>

                    <span className='lang'>
                                <span className='icon'><IoLanguage /></span>
                                <select name="langs" id="lang">
                                <option value="eng">English</option>
                                <option lang="hi" label="हिन्दी" value="hi-IN">हिन्दी</option>                      
                            </select>
                    </span>
                </div>

            </div>

        </div>
    );
};

export default Login;
