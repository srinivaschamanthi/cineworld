import './App.css';
import { useEffect,useState } from 'react';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

function App() {
  const  API_URL = 'http://www.omdbapi.com/?apikey=4fe0eb24';
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(()=>{
  searchMovies();
  },[])
    return (
      <div className="app">
        <h1>Cineworld</h1>
  
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchTerm.length > 0 ? searchMovies(searchTerm): alert('enter xtext')}
          />
        </div>
  
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    );
  };
  


export default App;
