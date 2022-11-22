import styled from 'styled-components';
   
export const Box = styled.div`
  background: #00ACB7;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-evenly;
  padding-top: 3em;
  box-shadow: 0px -4px 50px rgba(255, 255, 255, 0.1);
`;

export const Logo = styled.div`
    text-align: left;
    font-family: Abster;
    margin-top: -25p;
    padding: 0 5rem;
    font-size: 1.5em;
  
  @media (max-width: 1000px) {
      text-align: left;
      font-family: Abster;
      margin-top: -25p;
      padding: 0 5rem;
      font-size: 1.4em
  }
`;

export const Copyright = styled.div`
  font-family: 'Agency FB';
  font-size: 1.5em;
  font-weight: 100;
  letter-spacing: 0.05em;
  }

  @media (max-width: 1000px) {  
    font-family: 'Agency FB';
    font-size: 1.4em;
    letter-spacing: 0.05em;
  }
}
`;