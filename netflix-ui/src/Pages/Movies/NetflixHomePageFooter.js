import React from 'react';
import './NetflixHomePageFooter.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




const NetflixHomePageFooter = () => {
    return (
        <div>
            
            <div className='netHomeFooterdiv'>

                <div className='navIcons'>
                    <div><FaFacebookF /></div>
                    <div><FaInstagram /></div>
                    <div><FaTwitter /></div>
                    <div><FaYoutube /></div>
                </div>

                <div className='netHomeFooter'>
                    <div>
                        <p><>Audio Description</></p>
                        <p><>Investor Relations</></p>
                        <p><>Legal Notices</></p>
                    </div>

                    <div>
                        <p><>Help Centre</></p>
                        <p><>Jobs</></p>
                        <p><>Cookie Preferences</></p>
                    </div>

                    <div>
                        <p><>Gift Cards</></p>
                        <p><>Terms of Use</></p>
                        <p><>Corporate Information</></p>
                    </div>

                    <div>
                        <p><>Media Centre</></p>
                        <p><>Privacy</></p>
                        <p><>Contact Us</></p>
                    </div>
                </div>

                <div className='serviceCode'>
                    Service Code
                </div>

                <div>
                    <p> &copy; 1997-2024 Netflix, Inc</p>
                </div>

            </div>
        </div>
    );
};

export default NetflixHomePageFooter;

