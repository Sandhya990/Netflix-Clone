import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from './Slider';
import { trendingTV } from '../Store/Reducer';



const TrendingTv = () => {

    const dispatch = useDispatch();
    const select = useSelector(state => state.movies);
    console.log(select);

    const geners=select
    console.log(select.trendTV);

    const mv = [...geners.trendTV]
    console.log(mv);


    useEffect(() => {
        dispatch(trendingTV());     
    }, []);


  return (
    <div>


      <div className='trendingTv' style={{marginTop:'-3rem'}}>
          <h2 style={{paddingLeft:'35px'}}>Trending TV Shows</h2>
          <Slider data={mv} title='Trending Movies '/>
      </div>
      

    </div>
    );
};

export default TrendingTv;