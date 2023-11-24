import styled from "styled-components"
import { Link } from 'react-router-dom'
import './botaolog.css'
const LinkCadastro = styled.div`
`
const BotaoCad = styled.button`
padding: 16px;
margin: 10px;
background-color: #EFF2DD;
border: solid 2px;
border-color: #383e48;
color: #383e48;

`

function BotaoLogin() {
    return (
        <LinkCadastro>
            < section><Link to="/pageL"><BotaoCad className="custom-button">Entre</BotaoCad></Link></section>
        </LinkCadastro>
    )
}
export default BotaoLogin