import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
} from './styles';
  
function Header() {
     return (
        <Nav>
          <Bars/>
          <NavLogo to='/'>             
              TAON 
          </NavLogo>
          <NavMenu>
            <NavLink to='/' activeStyle>
              INÍCIO
            </NavLink>
            <NavLink to='/Movies' activeStyle>
              FILMES
            </NavLink>
            <NavLink to='/Series' activeStyle>
              SÉRIES
            </NavLink>
            <NavLink to='/Persons' activeStyle>
              PESSOAS
            </NavLink>
          </NavMenu>
        </Nav>
    );
  };
    
export default Header;
