import styled from "styled-components"
import TextoModa from "../../componentes/TextoModa"
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import TextoCadastro from "../../componentes/TextoCadastro"
import NewsletterForm from '../../componentes/email'
const ModaContainer = styled.div`
justify-content: center;
background-color: #EFF2DD;
text-align: center;
`
function PageModa() {
    return(
        <ModaContainer>
            <Header />
            <TextoModa/>
            <TextoCadastro/>
            <NewsletterForm/>
            <Footer/>
        </ModaContainer>
    )
}
export default PageModa