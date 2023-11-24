import styled from "styled-components"
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import TextoCadastro from "../../componentes/TextoCadastro"
import TextoEletronico from "../../componentes/TextoEletronico"
import NewsletterForm from '../../componentes/email'

const ModaContainer = styled.div`
text-align: center;
background-color: #EFF2DD;
text-align: center;
`
function PageEletronico() {
    return(
        <ModaContainer>
            <Header />
            <TextoEletronico/>
            <TextoCadastro/>
            <NewsletterForm/>
            <Footer/>
        </ModaContainer>
    )
}
export default PageEletronico