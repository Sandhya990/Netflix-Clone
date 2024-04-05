import React from 'react';
import Slider from './Slider';
import './Carousel.css'


const CarouselTv = ({ data, id ,trend}) => {

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


const ActionAdventure = data.filter((e) => e.genre_ids.includes(id)&&e.genre_ids.includes(28))
console.log(ActionAdventure)

const animation = data.filter((e) => e.genre_ids.includes(id)&&e.genre_ids.includes(16))
console.log(animation)

const crime = data.filter((e) => e.genre_ids.includes(id)&&e.genre_ids.includes(80))
console.log(crime)

const war = data.filter((e) => e.genre_ids.includes(id)&&e.genre_ids.includes(10752))
console.log(war)

const Horror = data.filter((e) => e.genre_ids.includes(id)&&e.genre_ids.includes(27))
console.log(Horror)


const Documentary = data.filter((e) => e.genre_ids.includes(id) &&e.genre_ids.includes(99))
console.log(Documentary)




  return (
    <div>
      <div className='Tvslider-container'>

        {trendMovies.length>1&&<div className='box' >
          <h2>Trending TV Shows</h2>
          <Slider data={trendMovies} />
        </div>}

       {/* {trendTv.length>1&&
        <div className='box'>
          <h2>Trending Tv Shows</h2>
          <Slider data={trendTv} />
        </div>} */}


        {en.length>1&&
          <div className='box'>
          <h2>International</h2>
          <Slider data={en} />
        </div>}

        <div className='box'>
           <h2>Animation</h2>
           <Slider data={animation} />
         </div>

        
      </div>
    </div>
  );
};

export default CarouselTv;


