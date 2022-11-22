import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background: black;
  height: 8em;
  display: flex;
  align-itens: center;
  justify-content: space-between;
  padding: 0.2 rem 0;
  z-index: 12;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
  
`;

export const NavLogo = styled(Link)`
  widht: 3rem;
  color: #00BCBC;
  font-family: 'Abster';
  font-size: 1.8em;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding-left: 2em ;

`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  transition: 0.7s;
  font-size: 1.4rem;
  letter-spacing: 0.05em;
  &:hover {
    color: #00BCBC;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5vw;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  