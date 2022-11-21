import { Container, List, Movie } from "./styles";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Home(){
    const url = 'https://image.tmdb.org/t/p/w500';
    const key = 'ff291250303483e75869fe5f1ba0a178';

    const [populars, setPopulars] = useState([]);
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(element => setPopulars(element.results))
    })
    
    const [top, setTop] = useState([]);
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(element => setTop(element.results))
    })
    
    return(
        <Container>
            <h1> Populares</h1>
            <List>
                {populars.map(populars=>{
                    return(
                        <Movie key={populars.id}>
                            <Link to={`/DetailsMovies/${populars.id}`}>
                                <img id="img" src={`${url}${populars.poster_path}`}>
                                </img>
                            </Link>
                            <span id="title"> {populars.title}</span>
                            <span id="subtitle"> IMDB: {populars.vote_average} </span>
                        </Movie>
                    )
                })}
            </List>
            <h1> Os mais bem avaliados</h1>
            <List>
                {top.map(top=>{
                    return(
                        <Movie key={top.id}>
                            <Link to={`/DetailsMovies/${top.id}`}>
                                <img id="img" src={`${url}${top.poster_path}`}>
                                </img>
                            </Link>
                            <span id="title"> {top.title}</span>
                            <span id="subtitle"> IMDB: {top.vote_average} </span>
                        </Movie>
                    )
                })}
            </List>
        </Container>
    )
}

export default Home;