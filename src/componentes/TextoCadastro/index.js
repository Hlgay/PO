import styled from "styled-components"
import Botaocadastro from "../BotaoCadastro" 
// import BotaoLogin from '../BotaoLogin'
const TextoCadContainer = styled.div`
text-align: center;
margin-top: 60px;
`


function TextoCadastro() {
    return(
        <TextoCadContainer>
            <h1>Sobre Locais Para Doar</h1>
            <p>Quer encontrar o lugar mais Próximo a você para doar?</p>
            <p>Informe a zona de São Paulo em que você mora e descubra!</p>
            {/* botão cadastro será para encontrar a unibes da regiao */}
            <Botaocadastro/>
            {/* <BotaoLogin/> */}
        </TextoCadContainer>
    )
}
export default TextoCadastro