import { Container, Titulo, List, Serie } from "./styles";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Series(){
    const url = 'https://image.tmdb.org/t/p/w500';
    const key = 'ff291250303483e75869fe5f1ba0a178';
    
    const [onTheAir, setOnTheAir] = useState([]);
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(element => setOnTheAir(element.results))
    })

    const [populars, setPopulars] = useState([]);
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(element => setPopulars(element.results))
    })

    const [top, setTop] = useState([]);
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=pt-BR&page=1 `)
        .then(response => response.json())
        .then(element => setTop(element.results))
    })
    
    return(
           <Container>
            <Header/>
            <Titulo>
                <h1> Populares</h1>
            </Titulo>
            <List>
                {populars.map(populars=>{
                    return(
                        <Serie key={populars.id}>
                            <Link to={`/DetailsTv/${populars.id}`}>
                                <img id="img" src={`${url}${populars.poster_path}`}>
                                </img>
                            </Link>
                            <span id="title"> {populars.name}</span>
                            <span id="subtitle"> IMDB: {populars.vote_average} </span>
                        </Serie>
                    )
                })}
            </List>
            <h1> No ar </h1>
            <List>
                {onTheAir.map(onTheAir=>{
                    return(
                        <Serie key={onTheAir.id}>
                            <Link to={`/DetailsTv/${onTheAir.id}`}>
                                <img id="img" src={`${url}${onTheAir.poster_path}`}>
                                </img>
                            </Link>
                            <span id="title"> {onTheAir.name}</span>
                            <span id="subtitle"> Ep1 : {onTheAir.first_air_date} </span>
                        </Serie>
                    )
                })}
            </List>
            <h1> Os mais bem avaliados</h1>
            <List>
                {top.map(top=>{
                    return(
                        <Serie key={top.id}>
                            <Link to={`/DetailsTv/${top.id}`}>
                                <img id="img" src={`${url}${top.poster_path}`}>
                                </img>
                            </Link>
                            <span id="title"> {top.name}</span>
                            <span id="subtitle"> IMDB: {top.vote_average} </span>
                        </Serie>
                    )
                })}
            </List>
            <Footer/>
        </Container>
    )
}

export default Series;