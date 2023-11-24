import imgM from  '../../imagens/imgModa.jpg'
import styled from 'styled-components'

const ImgContainerM = styled.div`
    display:flex;
    text-align: center;
`
const ImgModa = styled.img`
    margin-right: 10px;
    max-width: 500px;
   
`
function ImagemModa(){
    return(
        <ImgContainerM>
        <ImgModa
            src={imgM}
            alt="Descrição da Imagem"
           />
      </ImgContainerM>
    )
}
export default ImagemModa