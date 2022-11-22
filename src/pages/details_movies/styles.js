import styled from "styled-components";

export const Container = styled.div`

  h1{
    font-size: 55px;
    font-family: 'Agency FB';
    font-weight: 400;
    letter-spacing: 0.05em;
    color: #00ACB7;
    margin: 3rem 0;
  }

  h2{
    font-size: 45px;
    font-family: 'Agency FB';
    font-weight: 400;
    letter-spacing: 0.05em;
    color: #ffffff;
    padiding-left: 3rem ;
    
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
  }
  
  img {
    width: 24em;
    border-radius: 2rem;
    margin-top: 2rem;
    display: flex;
    box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.1);
  }
  vote{
    display: row;
    row-gap: 5px;
  }

  span {
    font-weight: normal;
    font-size: 1.6em;
    text-align: justify;
    margin-bottom: 2.5rem;
    line-height: 130%;
    color: white;
    font-family: 'Abel';
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    max-width: 45%;
  }
  button {
    background-color: #00ACB7;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    padding: 0.6rem 3rem;
    margin-top: 1rem;
    font-size: 160%;
    font-weight: 200;
    letter-spacing: 0.05em;
    font-family: 'Agency FB';
    transition: all .3s;
    border: 2px solid #00ACB7;

  }
  button:hover {
    background-color: transparent;
    border: 2px solid #00ACB7;
    color: #00ACB7;
  }

  @media (max-width: 1000px) {  
    
      .movie {
        padding: 0        
      }
      
    }
  }
`

export const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    padding: 0 5rem;
`

export const Titulo = styled.div`
    padding-left: 2.5em;

`

export const Cast = styled.li`
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
    h3{
      margin-bottom; -2rem;
      font-family: 'Agency FB';
      font-style: normal;
      font-size: 180%;
      font-weight: 400;
      letter-spacing: 0.05em;
      color: #00ACB7;
    }
    #subtitle{
      font-family: 'Actor';
      font-style: normal;
      font-size: 1em;
      margin-top: -0.5rem;
      letter-spacing: 0.03em;
      color: rgba(255, 255, 255, 0.65);
   }
    a{
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);
    }
`