import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container, List, Cast, Titulo } from './styles';
import api from '../../api';
import Header from '../../components/header';
import Footer from "../../components/footer";

function DetailsMovies() {
  const navigate = useNavigate();
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
      <Header/>
      <div className="movie">
        <div className='img'>
          <img src={`${posterPath(movie)}`} alt={movie.title}/>
        </div>
        <div className="details">
          <h1>{movie.title}</h1>
          <span> {movie.overview}</span>
          <button onClick={() => navigate(-1)}> Retornar </button>
        </div>
      </div>
      <Titulo>
        <h2>Elenco</h2>
      </Titulo>
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
    <Footer/>
    </Container>
  );
}

export default DetailsMovies;
