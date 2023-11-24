import styled from 'styled-components'
import ImagemHome from '../ImagemHome'

const TextoContainer = styled.div`
 text-align: justify;
 align-items: start;
 margin-left: 80px;
 margin-right: 80px;
 
`
const ImagemH = styled.div`
width: 45%;
height: auto;
display: flex;
float: left;
margin-top: 20px;
margin-bottom: 20px;
`
const textoImg = styled.div`
width: 50%;
float: left;
margin-right: 40px; 
margin-bottom: 20px;
shape-margin: 80px; 
`
// const textoimagem = styled.div`
//  width: 100%;
//       max-width: 800px; /* ajuste conforme necessário */
//       margin: 100px;
// `


function TextoHome() {
    return(
        <TextoContainer>
           <textoH>
           <h1>Consumo e Produção Responsável</h1>
                <p>O filme de comédia romântica “Os Delírios de Consumo de Becky Bloom” conta a história de Becky, uma jornalista financeira que ensina as pessoas a economizar, mas é viciada em compras e possui um monte de dívidas. Crítica o consumo excessivo e a ilusão à felicidade que ele provoca, mostrando as consequências negativas para a sua vida profissional e pessoal.</p>
                <p> Dentro de um mundo no qual a maioria dos países estão dentro do modelo capitalista, que tem como características principais: a lei do mercado (oferta e procura), o lucro como objetivo principal de uma produção e a possibilidade de acúmulo de riquezas. O consumo e a produção excessiva são inevitáveis. Tornou-se cada vez mais comum ver conteúdos ligados a compras e desperdícios em diversos aspectos, sejam quanto a alimentos, roupas e acessórios, eletrônicos, livros etc.</p>
                <textoimagem>
                <ImagemH>
                  <ImagemHome/>
                </ImagemH>
                <textoImg>
                <p>Atualmente os seres humanos são muito taxados pelo o que possuem, muito mais do que pelo que são. Por conta disso, o consumismo fez-se muito mais visto na nossa sociedade. O consumismo se trata do ato de consumir em excesso, onde em sua maioria dos casos se trata de uma fuga de problemas e dores ligados a sensação de prazer. Afinal quem nunca comprou algo e ficou extremamente feliz com sua conquista?<br/>
                Com o aumento das mídias sociais e canais de comunicação como o Youtube, Tiktok, Instagram entre outros; podemos acompanhar a aquisição de diversos influencers, com vídeos de “comprinhas” e “unboxing”.  Além de desafios que envolvem alimentos que acabam contendo desperdício.</p>
                </textoImg>
                </textoimagem>
                <p>Sabemos que o consumismo pode se tornar uma doença, onde o consumista só consegue obter prazer ao comprar. Assim não resistindo a compra mesmo não precisando ou não tendo condições financeiras. Normalmente o ato está ligado a um momento de tristeza, medo, raiva ou ansiedade.</p>
                <p> O consumismo alienado de produtos industrializados cresceu consideravelmente após a Revolução Industrial, mudando definitivamente as relações entre o ser humano e suas necessidades materiais. As pessoas, influenciadas pela mídia e os meios de comunicação de massa, são bombardeadas com informações que visam principalmente a publicidade de diversos produtos, nos quais incentivam o consumo. Essa maneira de agir, sem questionar e destituída de pensamento crítico, é chamada de "Alienação Social".</p>
                <p> Alinhado ao tema está ligado a produção excessiva da indústria, ou seja, quando a fábrica produz mais do que precisa, acaba gerando o desperdício do excesso dos produtos acabados no estoque. Esses produtos geram custos de estocagem para empresa e podem estragar caso sejam perecíveis ou podem acabar ficando obsoletos com o tempo. A superprodução pode ser ocasionada pela falta de previsão de vendas e de um bom planejamento e controle de produção.</p>
               
           </textoH>
        </TextoContainer>
    )
}
export default TextoHome