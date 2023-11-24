import styled from "styled-components"
import Cadastro from "../../componentes/Cadastro"
import Footer from "../../componentes/Footer"
import Header from "../../componentes/Header"
const CadastroContainer = styled.div`
text-align: center;
justify-content: center;
background-color: #EFF2DD;
`
function PageCadastro() {
    return(
        <CadastroContainer>
             <Header/>
            <Cadastro/>
            <Footer/>
        </CadastroContainer>
    )
}
export default PageCadastro