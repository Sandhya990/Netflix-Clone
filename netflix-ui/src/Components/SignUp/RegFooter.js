import React from 'react';
import { FaGlobe } from "react-icons/fa";
import './RegFooter.css'



const RegFooter = () => {
    return (
        <div>         
            <div className='RegFooter'>
                    <p>Questions? Call <span className='RegCall'>000-800-919-1694</span></p>
                    <div className='RegFootCont'>
                        <div >
                            <p>FAQ</p>
                            <p>Privacy</p>
                        </div>

                        <div>
                            <p>Help Centre</p>
                            <p>Cookies Preferences</p>
                        </div>

                        <div>
                            <p>Netflix Shop</p>
                            <p>Corporate Information</p>
                        </div>

                        <div>
                            <p>Terms of Use</p>
                        </div>
                    </div>
                    <span className='RegLang'>
                                    <span className='RegIcon'><FaGlobe /></span>
                                    <select name="langs" id="RegLang">
                                        <option value="eng">English</option>
                                        <option lang="hi" label="हिन्दी" value="hi-IN">हिन्दी
                                        </option>                      
                                    </select>
                            </span>
                </div>
        </div>
    );
};

export default RegFooter;

