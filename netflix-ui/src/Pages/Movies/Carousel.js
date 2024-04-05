import React from 'react';
import Slider from './Slider';
import './Carousel.css'



const Carousel = ({ data, id ,trend}) => {

  console.log(data)

const trendMovies= data.filter((e) =>e.genre_ids.includes(id))
.sort((a, b) => b.popularity - a.popularity)
.filter((v, i, a) => i === a.findIndex(e => e.id === v.id))
console.log(trendMovies)

// const trendTv= trend.filter((e) =>e.genre_ids.includes(id))
// .sort((a, b) => b.popularity - a.popularity)
// .filter((v, i, a) => i === a.findIndex(e => e.id === v.id))
// console.log(trendTv)

const en=data.filter((e) =>e.genre_ids.includes(id)).filter(e=>e.original_language==='en')
console.log(en)


const action = data.filter((e) =>e.genre_ids.includes(id))

const animation = data.filter((e) => e.genre_ids.includes(id)&&e.genre_ids.includes(16))
console.log(animation)

const comedy = data.filter((e) => e.genre_ids.includes(id)&&e.genre_ids.includes(35))
console.log(comedy)

const adventure = data.filter((e) => e.genre_ids.includes(id)&&e.genre_ids.includes(12))
console.log(adventure)

const drama = data.filter((e) => e.genre_ids.includes(id)&&e.genre_ids.includes(28))
console.log(drama)


  return (
    <div>
      <div className='slider-container'>

        {trendMovies.length>1&&<div className='box' >
          <h2>Trending Movies</h2>
          <Slider data={trendMovies} />
        </div>}

       {/* {trendTv.length>1&&
        <div className='box'>
          <h2>Tv Shows</h2>
          <Slider data={trendTv} />
        </div>} */}


        {en.length>1&&
          <div className='box'>
          <h2>International</h2>
          <Slider data={en} />
        </div>}

        <div className='box'>
           <h2>Action</h2>
           <Slider data={drama} />
        </div>


        <div className='box'>
           <h2>Adventure</h2>
           <Slider data={adventure} />
        </div>
        

        <div className='box'>
           <h2>Comedy</h2>
           <Slider data={comedy} />
        </div>

      
        <div className='box'>
           <h2>Animation</h2>
           <Slider data={animation} />
        </div>

      </div>
    </div>
  );
};

export default Carousel;