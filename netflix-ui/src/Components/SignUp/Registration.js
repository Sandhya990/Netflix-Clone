import React from 'react';
import './Registration.css'
import devices from '../../assets/devices.png'
import Navbar from './Navbar';
import RegFooter from './RegFooter';
import { Link } from 'react-router-dom';


const Registration = () => {
    return (
        <div>
            <div className='registration'>
                
                <Navbar />

                <div className='RegMainCont'>

                    <div className='RegMainDiv'>
                        <img src={devices} alt=""  className='device'/>
                        <p>STEP <b>1</b> OF <b>3</b></p>
                        <h1>Finish setting up your account</h1>
                        <p>Netflix is personalised for you. </p>
                        <p>Create a password to watch on any </p>
                        <p> device at any time.</p>
                        
                        <Link to='/signup/regform' ><button className='RegNextButton'>Next</button></Link>

                    </div>
                    
                </div>
                
                <RegFooter/>

            </div>
            
        </div>
    );
};

export default Registration;