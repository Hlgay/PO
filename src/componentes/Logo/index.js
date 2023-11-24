import styled from 'styled-components'
import logo from '../../imagens/logo.png'

const LogoConatiner = styled.div`
display: flex;

`
const LogoImage = styled.img`
max-width: 150px;
// border-right: 150px;
margin-left: 60px;
marigin-right:60px;
`
function Logo() {
    return (
        <LogoConatiner>
            <LogoImage id='logo' src={logo}
            alt="Descrição da Imagem"/>
        </LogoConatiner>
    )
}
export default Logo