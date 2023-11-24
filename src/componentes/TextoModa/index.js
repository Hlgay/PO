import styled from 'styled-components'
import ImagemModa from '../ImagemModa'

const TextoContainerM = styled.div`
 text-align: justify;
 align-items: start;
 margin-left: 80px;
 margin-right: 80px;
`
const ImagemM = styled.div`
width: 45%;
height: auto;
display: flex;
float: left;
margin-top: 20px;
margin-bottom: 20px;
`
const textoImgM = styled.div`
width: 50%;
float: left;
margin-right: 40px; /* ajuste conforme necessário */
margin-bottom: 20px; /* ajuste conforme necessário */
shape-margin: 80px; 
`


function TextoModa() {
    return(
        <TextoContainerM>
           <textoH>
           <h1>Fast Fashion</h1>
                <p>Que a moda é um ciclo não é novidade, as tendências tendem a retornar de tempos em tempos, um grande exemplo são as roupas “estilo anos 2000” que viraram febre em 2023. O que acontece é que esse ciclo está cada vez mais rápido. Enquanto antes demorava mais de uma década para o ciclo finalizar, agora está finalizando em dois anos. Uma solução que a indústria da moda encontrou para acompanhar, foi criar as fast fashions.</p>
                <p> As fast fashion nada mais são do que empresas que produzem roupas de baixa qualidade, mas que possuam um valor menor, para que todos possam ter acesso. O maior problema dessa ideia é que como as peças não são focadas em qualidades e sim em vendas, as peças acabam estragando muito rápido e criam toneladas de lixo. Além de que, para ter um custo de produção mais baixo, essa indústria foca em mão de obra mais barata, o que em algumas reportagem é considerado analogia a escravidão. </p>
                <textoimagem>
                <ImagemM>
                  <ImagemModa/>
                </ImagemM>
                <textoImgM>
                <p>A gigante da moda chinesa Shein, foi o centro de controvérsias recentemente, quando um documentário da rede de televisão britânica Channel 4, “Untold: Inside the Shein Machine”, expôs as más condições de trabalho dos seus funcionários. Segundo o documentário, esses funcionários estariam tirando apenas um dia de folga por mês, fabricando produtos por menos de R$ 0,20 (0,27 yuan) e trabalhando até 18 horas por dia.</p>
                </textoImgM>
                </textoimagem>
                <p>Mas os problemas sociais não são o principal problema da indústria têxtil, a geração de resíduos também gera um impacto negativo no planeta. Segundo a Remake, grupo de defesa global que luta por salários justos e justiça climática na indústria de vestuário, apenas 20% dos resíduos têxteis são reutilizados ou reciclados globalmente, enquanto 80% são aterrados ou incinerados.</p>
                <p>Peças fast fashion são utilizadas menos de cinco vezes e geram 400% mais emissões de carbono do que peças comuns. Essas são utilizadas 50 vezes. Além disso, a produção de roupas não polui apenas com emissão de carbono.</p>
                <p> Para produzir fibras têxteis é preciso desmatar, utilizar fertilizantes, agrotóxicos, extrair petróleo e transportar, entre outras formas de poluição.</p>
                <p>Para produzir fibras têxteis é preciso desmatar, utilizar fertilizantes, agrotóxicos, extrair petróleo e transportar, entre outras formas de poluição.</p>
                <p>Um relatório realizado pela parceria entre McKinsey & Company e Global Fashion Agenda avaliou os esforços necessários da indústria da moda no combate à poluição ambiental.</p>
                <p>Segundo o documento, as principais contribuições que as marcas podem fazer para o meio ambiente são:</p>
                <li>Melhorar a mistura de matéria-prima;</li>
                <li>Aumentar o uso de transporte sustentável;</li>
                <li>Melhorar as embalagens;</li>
                <li>Descarbonizar as operações de varejo;</li>
                <li>Reduzir a superprodução</li>
                <p>O fast fashion contribuiu para uma significativa redução no número médio de vezes que um item é usado. Isso se deve à velocidade da moda, mas também à durabilidade dos produtos.</p>
                <p>Na contramão, pesquisadores da Columbia University e da Georgetown University publicaram um artigo no Journal of Marketing que examina como os consumidores podem adotar um estilo de vida de consumo mais sustentável ao optar por produtos duráveis, pois são pessoas preocupadas com o meio ambiente.</p>
                <p>Os autores propõem que roupas de maior valor e de alta tecnologia podem ser sustentáveis por terem um ciclo de vida mais longo. Assim, nas estratégias de comunicação e marketing, as marcas podem ajudar os consumidores a concentrarem seus orçamentos em menos produtos, porém duráveis.</p>
               
           </textoH>
        </TextoContainerM>
    )
}
export default TextoModa