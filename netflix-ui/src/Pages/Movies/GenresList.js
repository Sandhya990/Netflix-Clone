import React, { useEffect, useRef, useState } from 'react';
import './GenreList.css';
import { RiArrowDownSFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import { useSelector } from 'react-redux';
import { RiMenu2Line } from "react-icons/ri";
import { IoGridSharp } from "react-icons/io5";
import RandomMovie from './RandomMovie';
import Filtereddata from './Filtereddata';



const GenresList = ({ title, listGenre, data, trailerdata, trend }) => {

  console.log(data)

  const genrebox = useRef()
  const [input, setinput] = useState(true)
  const search = useRef()

  const alldatamovie = useSelector(store => store.movies.discMovies)
  console.log(alldatamovie)

  const alldatatv = useSelector(store => store.movies.discTV)
  console.log(alldatatv)

  const moviegenres = useSelector(store => store.movies.movGenre)
  console.log(moviegenres)

  const [list, setList] = useState(true)

  function genresOpen() {
    openlist.current.style.display = 'grid'
  }


  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('GenreListStyle')
      if (window.scrollY > 40) {
        navbar.style.backgroundColor = 'black'
      } else {
        navbar.style.backgroundColor = 'transparent'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  function removeGenre(e) {
    if (genrebox.current && !openlist.current.contains(e.target))
      openlist.current.style.display = 'none'
  }

  useEffect(() => {
    document.addEventListener('mousedown', removeGenre)
  }, [])


  var genreId = 35;

  var [Genre, setGenre] = useState('')

  listGenre.forEach(e => {
    if (e.id === Genre) {
      genreId = e.id
    }
  })

  console.log(genreId)

  console.log(Genre)

  

  const openlist = useRef()
  const right = useRef()

  const [choosegenre, setChoosegenre] = useState('')

  function add(i) {
    console.log(i.target.outerText)
    setGenre(i.target.value)
    setChoosegenre(i.target.outerText)
    genrebox.current.style.display = 'none'
    right.current.style.display = 'block'
  }

  function remove(i) {
    setGenre('')
    setChoosegenre('')
    genrebox.current.style.display = 'block'
    right.current.style.display = 'none'
  }


// window toggle functionality
  function click() {
    setinput(!input)
    setList(false)
  }



  const [inputs, setInput] = useState(false);

  function listadd(){
    setinput(true)
    setList(true)
    setInput(false)
  }

  function click() {
    setInput(!inputs);
    setList(false)
  }


// select by option functionality
  const [select,setSelect]=useState('1')
  const inputsearch=useRef()

  const filterBySelection=[...data]
  console.log(filterBySelection)


  if(select==='2'){
    filterBySelection.sort((a,b)=>(b.release_date||b.first_air_date).localeCompare(a.release_date||a.first_air_date))
  }
  else if(select==='3'){
    filterBySelection.sort((a,b)=>(a.title||a.name).localeCompare(b.title||b.name)) 
  }
  else if(select==='4'){
    filterBySelection.sort((a,b)=>(b.title||b.name).localeCompare(a.title||a.name))
  }


  

  return (
    <div>
      <div className='discoverTvCont' id='GenreListStyle'>

        <div className='genresbox'>
          <div>
            <h1 onClick={() => remove()} style={{ cursor: 'pointer' }}>{title}</h1>
          </div>
          <h3 ref={right} style={{ display: 'none' }}>&gt;</h3>
          <div> <h1>{choosegenre}</h1></div>

          <div className='tvGenres' onClick={genresOpen} ref={genrebox}> <span className='genres'>Genres <span className='upArrow'><RiArrowDownSFill /></span></span>

            <div className=''>
                <div className='genresList' ref={openlist}>

                  {listGenre.map(e =>

                    <ul key={e.id} >
                      <Link> <li value={e.id} onClick={(i) => add(i)}>{e.name}</li></Link>
                    </ul>

                  )}

                </div>
            </div>

          </div>

        </div>




        <div className='flitericons'>

          <button className='button1' onClick={() =>listadd()}>
            <RiMenu2Line size={20} />
          </button>

          <div className="searchGenre" ref={search}>
            <button onClick={() => click()} className='button2'>
              <IoGridSharp size={20} />
            </button >           


              {inputs && (
                <select className={(input)?"input":"extend"} ref={inputsearch} value={select} onChange={(e)=>setSelect(e.target.value)}>
                  <option value="1">Suggested for you</option>
                  <option value="2">Year Released</option>
                  <option value="3">A-Z</option>
                  <option value="4">Z-A</option>
                </select>
               )} 
              
          </div>

        </div>
      </div>

      <div>
        {list == false &&
          <Filtereddata data={filterBySelection} />
        }
      </div>


      <div>

        {list == true && <RandomMovie randomData={trailerdata} channel='Movie' />}

      </div>


      <div>

        {list &&
          <Carousel data={data} id={genreId} trend={trend} />
        }

      </div>

    </div>

    
  );
};

export default GenresList;



