import React from 'react';
import './Footer.css'
import { IoLanguage } from "react-icons/io5";


const Footer = () => {
    return (
        <div className='footerdiv'>
            
            <p>Questions? <span className='call'> <>Call 000-800-919-1694</></span></p>

            <div className='footer'>
                <div>
                    <p><>FAQ</></p>
                    <p><>Investor Relations</></p>
                    <p><>Privacy</></p>
                    <p><>Speed Test</></p>
                </div>

                <div>
                    <p><>Help Centre</></p>
                    <p><>Jobs</></p>
                    <p><>Cookie Preferences</></p>
                    <p><>Legal Notices</></p>
                </div>

                <div>
                    <p><>Account</></p>
                    <p><>Ways to Watch</></p>
                    <p><>Corporate Information</></p>
                    <p><>Only on Netflix</></p>
                </div>

                <div>
                    <p><>Media Centre</></p>
                    <p><>Terms of Use</></p>
                    <p><>Contact Us</></p>
                </div>
            </div>

            <span className='lang'>
                                <span className='icon'><IoLanguage /></span>
                                <select name="langs" id="lang">
                                <option value="eng">English</option>
                                <option lang="hi" label="हिन्दी" value="hi-IN">हिन्दी</option>                      
                            </select>
            </span>                 

            <p className='footerNetflix'>Netflix India</p>

        </div>
    );
};

export default Footer;