import imgA from '../../imagens/imgAlimento.jpg'
import styled from 'styled-components'

const ImgContainerA = styled.div`
    display:flex;
    text-align: center;
`
const ImgAli = styled.img`
    margin-right: 10px;
    max-width: 500px;
   
`
function ImagemAlimento(){
    return(
        <ImgContainerA>
        <ImgAli
            src={imgA}
            alt="Descrição da Imagem"
           />
      </ImgContainerA>
    )
}

export default ImagemAlimento