import styled from "styled-components";

export const Container = styled.div`
    h1{
        font-family: 'Agency FB';
        font-style: normal;
        font-weight: 400;
        font-size: 200%;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        padding-left: 3rem;
        margin: 2.5rem 0;
        
    }
`
export const Titulo = styled.div`
    padding-top: 8.5em;

`

export const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    padding: 0 5rem;
    padding-bottom: 2.5rem;

`

export const Serie = styled.li`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;

    #img{
        border-radius: 1rem;
        width: 12em;
        margin-bottom: 1rem;
        box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.1);
    }
    #title{
        font-family: 'Abel';
        font-style: normal;
        font-size: 155%;
        color: #00ACB7;
    }
    #subtitle{
        font-family: 'Actor';
        font-style: normal;
        font-size: 115%;
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