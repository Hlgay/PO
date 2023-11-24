import styled from "styled-components"
import './log.css'

const LogContainer = styled.div`
display : flex;
justify-content: center;
background-color: #EFF2DD;
`
const BotaoLog = styled.button`
padding: 10px;
margin: 10px;
background-color: #ffff;
border-radious: 10px;
`

function Login() {
    return (
        <LogContainer>
           
            <nav className="cadstyle">
                
                <form>
                <h1>Cadastro</h1>
                    <label>Email Cadastrado</label> <br></br>
                    <input type="email" />
                    <br></br> <br></br>
                    <label>Senha</label>
                    <br></br>
                    <input type="password" placeholder="Digite sua senha" />
                    <br></br> <br></br>
                    <BotaoLog>Entre</BotaoLog>
                </form>
            </nav>
        </LogContainer>
    )
}

export default Login