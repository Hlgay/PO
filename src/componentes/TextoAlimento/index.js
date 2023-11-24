import styled from 'styled-components'
import ImagemAlimento from '../ImagemAlimento'

const TextoContainerA = styled.div`
 text-align: justify;
 align-items: start;
 margin-left: 80px;
 margin-right: 80px;
`
const ImagemA = styled.div`
width: 45%;
height: auto;
display: flex;
float: left;
margin-top: 20px;
margin-bottom: 20px;
`
const textoImgA = styled.div`
width: 50%;
float: left;
margin-right: 40px; /* ajuste conforme necessário */
margin-bottom: 20px; /* ajuste conforme necessário */
shape-margin: 80px; 
`

function TextoAlimento() {
    return(
        <TextoContainerA>
   <textoH>
           <h1>Desperdício de Alimentos</h1>
                <p>Segundo o IBGE  o Brasil é o 10º país  que mais desperdiça comida no mundo, resultando em cerca de 30% relacionado a produção de alimentos.O desperdício é um problema grave e muito presente na sociedade em que vivemos, que pode nos impedir de alcançar o desenvolvimento de forma sustentável.</p>
                <textoimagem>
                <ImagemA>
                  <ImagemAlimento/>
                </ImagemA>
                <textoImgA>
                <p>O deputado estadual pelo Paraná e Líder RAPS, Goura (PDT/PR), apresentou, em 2018, um Projeto de Lei (PL) para autorizar a ocupação de espaços públicos e privados para o desenvolvimento de atividades de agricultura urbana. A iniciativa regulamentou a prática de agricultura urbana em dois espaços, o urbano e o rural, proporcionando à população a oportunidade de encontrar uma alimentação saudável, garantindo a segurança alimentar dessas famílias e geração de renda e mão de obra. </p>
                <p>Além disso, a ação colabora com a preservação ambiental dos espaços públicos e privados que se encontram desocupados ou abandonados, uma vez que, com a prática de agricultura urbana, esses lugares são revitalizados, reforçando a democratização do uso e ocupação dos espaços pela população</p>
                </textoImgA>
                </textoimagem>
                
                <p>A outra iniciativa que vamos apresentar é do Líder RAPS Lucas Abrahão (REDE/AP) que, quando era secretário municipal de Desenvolvimento Econômico de Macapá, implantou a política pública de ecopontos para o recolhimento e reutilização de óleo de cozinha. Direcionado aos empreendedores populares que ocupam espaços de atividade econômica nos arredores das praças de Macapá, a iniciativa impactou, aproximadamente, 100 deles em sete praças da cidade.</p>
                <p> O projeto tinha como foco o descarte correto do produto, visto que a cidade se encontra no coração da Amazônia, e possui menos de 10% de cobertura de esgoto. Com a iniciativa, os empreendedores tiveram a oportunidade de entrar em contato com conceitos de sustentabilidade e entender a importância do descarte responsável dos resíduos, uma vez que estudos comprovam que um litro de óleo despejado nos rios pode contaminar até 20.000 mil litros de água. </p>
               
                </textoH>
        </TextoContainerA>
    )
}
export default TextoAlimento