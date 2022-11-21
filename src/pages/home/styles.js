import styled from "styled-components";

export const Container = styled.div`
    h1{
        font-family: 'Agency FB';
        font-style: normal;
        font-weight: 400;
        font-size: 200%;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        margin: 4rem 0;
        padding-left: 3rem;
    }
`

export const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;

    #img{
        border-radius: 1rem;
        width: 180px;
        margin-bottom: 1rem;
        box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.1);
    }
    #title{
        font-family: 'Abel';
        font-style: normal;
        font-size: 125%;
        color: #00ACB7;
    }
    #subtitle{
        font-family: 'Actor';
        font-style: normal;
        font-size: 100%;
        margin-top: 1rem;
        color: rgba(255, 255, 255, 0.65);
    }

    a{
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);
    }
`