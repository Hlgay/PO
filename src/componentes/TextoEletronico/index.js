
// MUDAR O TEXTO DE ELETRONICOS

import styled from 'styled-components'
import ImagemEletronicos from '../ImagemEletronicos'

const TextoContainerE = styled.div`
 text-align: justify;
 align-items: start;
 margin-left: 80px;
 margin-right: 80px;
`
const ImagemE = styled.div`
width: 45%;
height: auto;
display: flex;
float: left;
margin-top: 20px;
margin-bottom: 20px;
`
const textoImgE = styled.div`
width: 50%;
float: left;
margin-right: 40px; /* ajuste conforme necessário */
margin-bottom: 20px; /* ajuste conforme necessário */
shape-margin: 80px; 
`

function TextoEletronico() {
  return (
    <TextoContainerE>
      <textoH>
        <h1>Eletrônicos e Consumo Responsável</h1>
        <p>Segundo o IBGE  o Brasil é o 10º país  que mais desperdiça comida no mundo, resultando em cerca de 30% relacionado a produção de alimentos.O desperdício é um problema grave e muito presente na sociedade em que vivemos, que pode nos impedir de alcançar o desenvolvimento de forma sustentável.</p>
        <textoimagem>
          <ImagemE>
            <ImagemEletronicos />
          </ImagemE>
          <textoImgE>
            <p>Responsabilidade Ambiental:</p>
            <li>Design Sustentável: Comprometemo-nos a desenvolver produtos eletrônicos com design inovador e sustentável, utilizando materiais recicláveis e de baixo impacto ambiental.</li>
            <li> Eficiência Energética:
              Priorizamos a eficiência energética em todos os estágios da produção, desde a fabricação até o uso pelo consumidor final, visando reduzir a pegada de carbono.
            </li>
            <li>Gestão de Resíduos:
              Implementamos sistemas de gestão de resíduos eficazes, promovendo a reciclagem de componentes eletrônicos e minimizando a quantidade de resíduos destinados a aterros.
            </li>
            <p> Responsabilidade Social:
            </p>
            <li> Condições de Trabalho Justas:
              Comprometemo-nos a garantir condições de trabalho justas em toda a nossa cadeia de suprimentos, promovendo um ambiente seguro e respeitoso para todos os trabalhadores envolvidos na produção de eletrônicos.
            </li>
            <li> Transparência na Cadeia de Suprimentos:
              Buscamos total transparência em nossa cadeia de suprimentos, assegurando que os materiais utilizados sejam obtidos de maneira ética e sustentável.
            </li>
            <li> Envolvimento com Comunidades Locais:
              Ativamente envolvemo-nos com as comunidades locais onde operamos, contribuindo para o desenvolvimento social e econômico por meio de parcerias e iniciativas com impacto positivo.
            </li>
            <p>Educação do Consumidor:
            </p>
            <li> Informação Transparente:
              Fornecemos informações claras e transparentes aos consumidores sobre o impacto ambiental de nossos produtos, incentivando escolhas conscientes.
            </li>
            <li>Programas de Reciclagem:
              Estabelecemos programas de reciclagem acessíveis, facilitando o descarte adequado de dispositivos eletrônicos e promovendo a circularidade dos materiais.
            </li>

          </textoImgE>
        </textoimagem>

        <p>Ao adotar esses compromissos, acreditamos que podemos moldar um setor de eletrônicos mais responsável, equilibrando inovação tecnológica com a preservação ambiental e a promoção de condições de trabalho éticas. Estamos empenhados em liderar pelo exemplo e inspirar mudanças positivas em toda a indústria. A produção responsável de eletrônicos não é apenas um compromisso empresarial, mas uma contribuição significativa para um futuro sustentável e ético.
        </p>


      </textoH>
    </TextoContainerE>
  )
}
export default TextoEletronico