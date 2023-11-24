import styled from "styled-components"
import { Link } from 'react-router-dom'
import './botaocad.css'
const LinkCadastro = styled.div`
`
const BotaoCad = styled.button`
padding: 16px;
margin: 10px;
background-color:#EFF2DD;
border: solid 2px;
border-color: #383e48;
color: #383e48;
`

function Botaocadastro() {
    return (
        <LinkCadastro>
            < section><Link to="/pageC"><BotaoCad className="custom-button">Encontre Aqui</BotaoCad></Link></section>
        </LinkCadastro>
    )
}
export default Botaocadastro
