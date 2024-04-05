import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { discoverMovie, discoverTV,  movieGenres,  trendingMovies, trendingTV, tvGenres } from "./Reducer";
import Slider from "../Movies/Slider.js";
import '../Movies/MoviesStyling.css'
import RandomMovie from "../Movies/RandomMovie.js";



function MainApp() {

  const dispatch = useDispatch()
  const select = useSelector(state => state.movies)
  console.log(select)
  const geners = select

  const totalMov = [...geners.discMovies,...geners.discTV,...geners.trendMovies,...geners.trendTV]
  console.log(totalMov)

  const action = []
  const adventure = []
  const animation = []
  const comedy = []
  const crime = []
  const documentary = []
  const drama = []
  const family = []
  const fantacy = []
  const history = []
  const horror = []
  const mystery = []
  const romance = []
  const scifi = []
  const thriller = []
  const war = []
  const western = []

  
  for (var i in totalMov) {

    var aa = totalMov[i].genre_ids

    for (var j = 0; j <= aa.length; j++) {
      if (aa[j] == 28) {
        action.push(totalMov[i])
      }
      else if (aa[j] == 12) {
        adventure.push(totalMov[i])
      }
      else if (aa[j] == 16) {
        animation.push(totalMov[i])
      }
      else if (aa[j] == 35) {
        comedy.push(totalMov[i])
      }
      else if (aa[j] == 80) {
        crime.push(totalMov[i])
      }else if (aa[j] == 99) {
        documentary.push(totalMov[i])
      }
      else if (aa[j] == 18) {
        drama.push(totalMov[i])
      }
      else if (aa[j] == 10751) {
        family.push(totalMov[i])
      }
      else if (aa[j] == 14) {
        fantacy.push(totalMov[i])
      }
      else if (aa[j] == 36) {
        history.push(totalMov[i])
      }
      else if (aa[j] == 27) {
        horror.push(totalMov[i])
      }
      else if (aa[j] == 9648) {
        mystery.push(totalMov[i])
      }
      else if (aa[j] == 10749) {
        romance.push(totalMov[i])
      }
      else if (aa[j] == 878) {
        scifi.push(totalMov[i])
      }
      else if (aa[j] == 53) {
        thriller.push(totalMov[i])
      }
      else if (aa[j] == 10752) {
        war.push(totalMov[i])
      }
      else if (aa[j] == 37) {
        western.push(totalMov[i])
      }

      }
    }


    console.log(action);
    console.log(adventure);
    console.log(animation);
    console.log(thriller);



    useEffect(() => {
      dispatch(discoverMovie())
      .then(dispatch(discoverTV()))
      .then(dispatch(trendingMovies()))
      .then(dispatch(trendingTV()))
      .then(dispatch(movieGenres()))
      .then(dispatch(tvGenres()))
     
    }, [])
  

  const random= Math.floor(Math.random()*totalMov.length)

  const data=totalMov[random]

  console.log(data)

       

    return (
      <div className="MainAppSliderDiv"  >

        <div>
          <RandomMovie randomData={totalMov}/>  
        </div>

        <div className="actionMovies" >
          <h3>Action Movies</h3>
          <Slider data={action} title='Action Movies'/>
        </div>
        

      <div>
        <h3>Adventure Movies</h3>
        <Slider data={adventure}/>
      </div>

      <div>
        <h3>Animation Movies</h3>
        <Slider data={animation}/>
      </div>

      <div>
        <h3>Comedy Movies</h3>
        <Slider data={comedy}/>
      </div>
      

      <div>
        <h3>Drama Movies</h3>
        <Slider data={drama}/>
      </div>
    

      <div>
        <h3>Fantacy Movies</h3>
        <Slider data={fantacy}/>
      </div>


      <div>
        <h3>Horror Movies</h3>
        <Slider data={horror}/>
      </div>

      <div>
        <h3>Mystery Movies</h3>
        <Slider data={mystery}/>
      </div>

      

      <div>
        <h3>Science-Fiction Movies</h3>
        <Slider data={scifi}/>
      </div>

      <div>
        <h3>Family Movies</h3>
        <Slider data={family}/>
      </div>

      <div>
        <h3>Romance Movies</h3>
        <Slider data={romance}/>
      </div>

      <div>
        <h3>Crime Movies</h3>
        <Slider data={crime}/>
      </div>

      <div>
        <h3>Thriller Movies</h3>
        <Slider data={thriller}/>
      </div>

      <div>
        <h3>War Movies</h3>
        <Slider data={war}/>
      </div>


          
      </div>
    );
  }

  export default MainApp;
