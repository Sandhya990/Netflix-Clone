import React from 'react';
import NetflixNav from './NetflixNav';
import MainApp from '../../Pages/Store/MainApp';
import NetflixHomePageFooter from '../../Pages/Movies/NetflixHomePageFooter';


const NetflixHomePage = () => {

    return (
        <div>

            
            <NetflixNav/>

            <MainApp/>

            <NetflixHomePageFooter/>

        </div>
    );
};


export default NetflixHomePage;


