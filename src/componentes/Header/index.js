
import Logo from '../Logo'
import styled from 'styled-components'
import OpcoesHeader from '../OpcoesHeader'
import './header.css'
const HeaderContainer = styled.div`
display: flex;
background-color: #383e48;
// justify-content: center;
gap: 190px;
`
function Header() {
  return (
    <HeaderContainer>
     
     <Logo />
     <OpcoesHeader/>
    </HeaderContainer>
  );
}

export default Header