import { Container, Titulo, List, Movie } from "./styles";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Home(){
    const url = 'https://image.tmdb.org/t/p/w500';
    const key = 'ff291250303483e75869fe5f1ba0a178';

    const [populars, setPopulars] = useState([]);
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=pt-BR`)
        .then(response => response.json())
        .then(element => 
            setPopulars(element.results)
        )
        
    })


    function mediaType(obj) {
        if (obj.media_type === 'tv') {
          return `/DetailsTv/`;
        }
        return `/DetailsMovies/`;
    }

    function title(obj) {
        if (obj.media_type === 'tv') {
          return obj.name;
        }
        return obj.title;
    }
    
    return(
           <Container>
            <Header/>
            <Titulo>
                <h1> Em alta</h1>
            </Titulo>
            <List>
                {populars.map(populars=>{
                    return(
                        <Movie key={populars.id}>
                            <Link to={`${mediaType(populars)}${populars.id}`}>
                                <img id="img" src={`${url}${populars.poster_path}`}/>
                            </Link>
                            <span id="title"> {title(populars)}</span>
                            <span id="subtitle"> IMDB: {populars.vote_average} </span>
                        </Movie>
                    )
                })}
            </List>

            <Footer/>
        </Container>
    )
}

export default Home;