import { useState, useEffect } from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';
import { Container, List, Cast, Titulo } from './styles';
import api from '../../api';
import Header from '../../components/header';
import Footer from "../../components/footer";

function DetailsSeries() {
  const { id } = useParams();
  const navigate = useNavigate();
  const key = "ff291250303483e75869fe5f1ba0a178";
  const url = 'https://image.tmdb.org/t/p/w500';

  const [serie, setSerie] = useState([]);
  async function getSerie() {
    try {
      var result = await api.get(`/3/tv/${id}?api_key=${key}&language=pt-BR`);
      setSerie(result.data);
    } catch (error) {
      console.log("[ERROR] - getSerie: ", error)
    }
  }

  useEffect(() => { getSerie() }, []); 

  const [cast, setCast] = useState([]);
  async function getSerieCredits() {
    try {
      var result = await api.get(`/3/tv/${id}/credits?api_key=${key}&language=pt-BR`);
      setCast(result.data.cast);
    } catch (error) {
      console.log("[ERROR] - getSerieCredits: ", error)
    }
  }

  useEffect(() => { getSerieCredits() }, []); 

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
      <div className="serie">
        <div className='img'>
          <img src={`${posterPath(serie)}`} alt={serie.title}/>
        </div>
        <div className="details">
          <h1>{serie.name}</h1>
          <span> {serie.overview}</span>
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

export default DetailsSeries;
