import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './header.css'
const Opcoes = styled.ul`
    display: flex;
    color: #E1EE92;
`

const LinkMenu = styled.div`
display:flex;
justify-content: center;
align-items: center;
font-size: 20px;
// font: arial;
padding: 0 5px;
height: 100%;
min-width: 120px;
cursor: pointer;
color: #E1EE92;
display: flex;

`




function OpcoesHeader() {
    return (
        <Opcoes>
            <LinkMenu id='H' ><a><Link to="/">Home</Link></a></LinkMenu>
            <LinkMenu id='M' ><a><Link to="/pageM">Moda</Link></a></LinkMenu>
            <LinkMenu id='E'><a><Link to="/pageE">Eletrônicos</Link></a></LinkMenu>
            <LinkMenu id='A'><a><Link to="/pageA">Alimentos</Link></a></LinkMenu>
        </Opcoes>

    )
}

export default OpcoesHeader

