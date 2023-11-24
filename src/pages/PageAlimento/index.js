import styled from "styled-components"
import TextoAlimento from "../../componentes/TextoAlimento"
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import TextoCadastro from "../../componentes/TextoCadastro"
import NewsletterForm from '../../componentes/email'
const ModaContainer = styled.div`
text-align: center;
background-color: #EFF2DD;
text-align: center;
`
function PageAlimento() {
    return(
        <ModaContainer>
            <Header />
            <TextoAlimento/>
            <TextoCadastro/>
            <NewsletterForm/>
            <Footer/>
        </ModaContainer>
    )
}
export default PageAlimento