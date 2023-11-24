import React from 'react';
import styled from 'styled-components'
import './home.css'
import { Link } from 'react-router-dom'
import TextoHome from '../../componentes/TextoHome'
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import TextoCadastro from '../../componentes/TextoCadastro'
import NewsletterForm from '../../componentes/email'
import Links from '../../componentes/Links';



const HomeContainer = styled.div`
background-color: #EFF2DD;
text-align: center;
margin: 0 auto;

`


function Home() {
    return (
        <HomeContainer>
            <Header />
            <TextoHome />

            <div class='links'>
                <h4>Saiba Mais</h4>

            </div>
            <Links/>
            <TextoCadastro/>
            <NewsletterForm/>

            <Footer />
        </HomeContainer>

    )
}
export default Home