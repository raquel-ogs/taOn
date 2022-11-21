import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, List, Cast } from './styles';
import api from '../../api';

function Details() {
  const { id } = useParams();
  const key = "ff291250303483e75869fe5f1ba0a178";
  const url = 'https://image.tmdb.org/t/p/w500';

  const [movie, setMovie] = useState([]);
  async function getMovie() {
    try {
      var result = await api.get(`/3/movie/${id}?api_key=${key}&language=pt-BR`);
      setMovie(result.data);
    } catch (error) {
      console.log("[ERROR] - getMovie: ", error)
    }
  }

  useEffect(() => { getMovie() }, []); 

  const [cast, setCast] = useState([]);
  async function getMovieCredits() {
    try {
      var result = await api.get(`/3/movie/${id}/credits?api_key=${key}&language=pt-BR`);
      setCast(result.data.cast);
    } catch (error) {
      console.log("[ERROR] - getMovieCredits: ", error)
    }
  }

  useEffect(() => { getMovieCredits() }, []); 

  function posterPath(obj) {
    if (obj.poster_path === null) {
      return "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg";
    }
    return url + obj.poster_path;
  }

  function profilePath(obj) {
    if (obj.profile_path === null) {
      return "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg";
    }
    return url + obj.profile_path;
  }

  return (
    <Container> 
      <div className="movie">
        <div className='img'>
          <img src={`${posterPath(movie)}`} alt={movie.title}/>
        </div>
        <div className="details">
          <h1>{movie.title}</h1>
          <span> {movie.overview}</span>
          <Link to="/">
              <button> Retornar </button>
          </Link>
        </div>
      </div>
      <h2>Elenco</h2>
       <List>
        {cast.map((event) =>{
            return(
                <Cast key={event.id}>
                    <Link to={`/DetailsCast/${event.id}`}>
                        <img id="img" src={`${profilePath(event)}`} alt={event.name}>
                        </img>
                    </Link>
                    <h3 id="title"> {event.name}</h3>
                    <span id='subtitle'> {event.character} </span>
                </Cast>
            )
        })}
    </List> 
    </Container>
  );
}

export default Details;
