import React, { useRef, useState } from 'react';
import './Registration2.css'
import Navbar from './Navbar';
import RegFooter from './RegFooter';
import { auth } from '../../Pages/Utiles/Config';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';



const Registration2 = () => {

    let datas = localStorage.getItem('inpname')
    const[userName,setUserName] = useState(localStorage.getItem('inpname'))

    const[password,setPassword] = useState()

    function handlePass(e){
        setPassword(e.target.value)     
    }

    const inputvalue = useRef()
    localStorage.setItem('passwordValue',password)

    let navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()

        signInWithEmailAndPassword(auth,userName,password)
        .then((res)=> navigate('/netflixHomepage'))
        .catch((err)=>console.log(err))      
    }

    return (
        <div>
            <div>
                    <Navbar/>

                    <div>
                        <div className='RegMainCont2'>

                            <div className='RegMainDiv2'>
                                <p>STEP <b>1</b> OF <b>3</b></p>
                                <h1>Welcome back!</h1>
                                <h1>Joining Netflix is easy.</h1>
                                <p>Enter your password and you'll be watching in no time. </p>
                                <p>Email</p>
                                <p><b>{datas}</b></p>

                                <form action="">
                                    <div className="Signinput-field">
                                        <input type="password" required onChange={handlePass}  ref={inputvalue} />
                                    <label>Password</label>
                                    </div>

                                    <p>Forgot your password?</p>

                                    
                                <button className='RegNext2' type='submit' onClick={handleClick}>Submit</button>
                                </form>
                                
                            </div>

                        </div>
                    </div>

                    <RegFooter/>

            </div>

        </div>
    );
};

export default Registration2;