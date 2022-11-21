import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, List, Movie } from './styles';
import api from '../../api';

function DetailsCast() {
  const { id } = useParams();
  const key = "ff291250303483e75869fe5f1ba0a178";
  const url = 'https://image.tmdb.org/t/p/w500';

  const [movie, setMovie] = useState([]);

    async function getMovie() {
      try {
        var result = await api.get(`/3/person/${id}/movie_credits?api_key=${key}&language=pt-BR`);
        setMovie(result.data.cast);
      } catch (error) {
        console.log("[ERROR] - getMovie: ", error)
      }
    }

    useEffect(() => { getMovie() }, []); 

    const [person, setPerson] = useState([]);
    async function getPerson() {
      try {
        var result = await api.get(`/3/person/${id}?api_key=${key}&language=pt-br`);
        setPerson(result.data);
      } catch (error) {
        console.log("[ERROR] - getPerson: ", error)
      }
    }

    function profilePath(obj) {
      if (obj.profile_path === null || obj.backdrop_path === null) {
        return "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg";
      }
      return url + obj.profile_path;
    }

    function posterPath(obj) {
      if (obj.poster_path === null) {
        return "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg";
      }
      return url + obj.poster_path;
    }

    useEffect(() => { getPerson() }, []); 

  return (
    <Container> 
      <div className="person">
        <div className='img'>
          <img id="img" src={`${profilePath(person)}`} alt={person.name}/>
        </div>
        <div className="details">
          <h1>{person.name}</h1>
          <span> {person.biography}</span>
          <Link to="/">
              <button> Retornar </button>
          </Link>
        </div>
      </div>
      <h2>Filmes que participou</h2>
      <List>
        {movie.map((event) =>{
            return(
                <Movie key={event.id}>
                    <Link to={`/DetailsMovie/${event.id}`}>
                        <img id="img" src={`${posterPath(event)}`} alt={event.title}>
                        </img>
                    </Link>
                    <h3 id="title"> {event.title}</h3>
                    <span id='subtitle'> IMDB: {event.vote_average} </span>
                </Movie>
            )
        })}
    </List> 
    </Container>
  );
}

export default DetailsCast;
