import imgE from '../../imagens/imgEletronico.jpg'
import styled from 'styled-components'

const ImgContainerE = styled.div`
    display:flex;
    text-align: center;
`
const ImgEle = styled.img`
    margin-right: 10px;
    max-width: 500px;
   
`
function ImagemEletronicos(){
    return(
        <ImgContainerE>
        <ImgEle
            src={imgE}
            alt="Descrição da Imagem"
           />
      </ImgContainerE>
    )
}

export default ImagemEletronicos