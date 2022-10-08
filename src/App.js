import { useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// 5c063e47


const API_URL ='http://www.omdbapi.com?apikey=5c063e47';

// const movie1 ={
    
//         "Title": "Working Title",
//         "Year": "1992",
//         "imdbID": "tt0250823",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwMDQwMjAwMDBeQTJeQWpwZ15BbWU3MDc4NTAyNTc@._V1_SX300.jpg"
    
// }
const App = () => {
    // const [Movies,setMovies]= useState([]);
    // const [searchterm,setsearchterm]= useState([]);    
    const [Movies, setMovies] = useState([]);
    const [searchterm, setsearchterm] = useState("");


    
    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await  response.json();


        setMovies(data.Search);

    }



    return(
        <div className='app'>
            <h1>Movieland</h1>

            <div className='search'>
                <input
                    placeholder='search for movies'
                    value={searchterm}
                    onChange={(e) => setsearchterm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick ={() => searchMovies(searchterm)}
                />
            </div>

            {Movies?.length > 0 
                ?(<div className='container'>
                    {Movies.map((movie)=> (
                        <MovieCard movie = {movie} />
                    ))}
                </div>
                ):(
                    <div className="empty">
                        <h2>NO Movies Found</h2>
                    </div>
                )}
        </div>
    );
}
export default App;