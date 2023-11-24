import styled from 'styled-components'
import './footer.css'
const FooterContainer = styled.div`
background-color: #383e48;
`
const FooterOpcoes = styled.div`
backgroud-color:  #383e48;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
padding: 0;
text-align: justify; /* deixa o texto justificado */
margin: 5px;
margin-left:20px;
color: #E1EE92;
`

const col1 = styled.div`
display: flex;
`
const col2 = styled.div`
display: flex;
`
const linkedin = styled.ul`
color: #E1EE92;
text-decoration: none;
`
const linkedin2 = styled.a`
color: #E1EE92;
text-decoration: none;
`

const linkedin3 = styled.a`
color: #E1EE92;
text-decoration: none;
`
const col3 = styled.div`
display: flex;
`
const Email = styled.a`
color: #E1EE92;
text-decoration: none;
`
// const email = styled.div

function Footer() {
    return(
        <FooterContainer>
            <FooterOpcoes>
            <col1>
              <h4>Desenvolvido por:</h4>
              <p>Giulia Nogueira</p>
              <p>Rafaella Morelli</p>
              <p>Heitor Cavalcanti</p>
           </col1>
           <col2>
              <h4>LinkedIn</h4>
              <linkedin>
              <p><a href="www.linkedin.com/in/giulia-nog-lopes-de-sa">Giulia Nogueira</a></p>
              <p><a href="https://www.linkedin.com/in/rafaella-morelli-075539240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Rafaella Morelli</a></p>
              <p><a href="#">Heitor Lindo Cavalcanti</a></p>
              </linkedin>
           </col2>
           <col3>
              <h4>Rede Social</h4>
              <p>instagram econsumo</p>
              <h4>Entre em Contato:</h4>
              <Email href="mailto:econsumo@gmail.com" class="author-email">econsumo@gmail.com</Email>
              
           </col3>
            </FooterOpcoes>
        </FooterContainer>
    )
}
export default Footer