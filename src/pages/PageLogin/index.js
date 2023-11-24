
import styled from "styled-components"
import Login from "../../componentes/Login"
import Footer from "../../componentes/Footer"
import Header from "../../componentes/Header"
const LoginContainer = styled.div`
text-align: center;
justify-content: center;
background-color: #EFF2DD;
`
function PageLogin() {
    return(
        <LoginContainer>
             <Header/>
            <Login/>
            <Footer/>
        </LoginContainer>
    )
}
export default PageLogin