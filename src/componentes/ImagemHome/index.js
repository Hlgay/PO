import img1 from '../../imagens/img1.compras.jpg'
import styled from 'styled-components'

const ImgContainer = styled.div`
    display:flex;
    text-align: center;
`
const ImgHome = styled.img`
    margin-right: 10px;
    max-width: 500px;
   
`
function ImagemHome(){
    return(
        <ImgContainer>
        <ImgHome 
            src={img1}
            alt="Descrição da Imagem"
           />
      </ImgContainer>
    )
}

export default ImagemHome