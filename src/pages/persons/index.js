import { Container, Titulo, List, Cast } from "./styles";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Persons(){
    const url = 'https://image.tmdb.org/t/p/w500';
    const key = 'ff291250303483e75869fe5f1ba0a178';

    const [populars, setPopulars] = useState([]);
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${key}&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(element => setPopulars(element.results))
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
                        <Cast key={populars.id}>
                            <Link to={`/DetailsCast/${populars.id}`}>
                                <img id="img" src={`${url}${populars.profile_path}`}>
                                </img>
                            </Link>
                            <span id="title"> {populars.name}</span>
                        </Cast>
                    )
                })}
            </List>
            <Footer/>
        </Container>
    )
}

export default Persons;