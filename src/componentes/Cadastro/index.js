import styled from "styled-components"
import './cad.css'
import React, { useState } from 'react';
import axios from 'axios';

import ReactDOM from 'react-dom';
import App from "../../App.js";

const CadContainer = styled.div`
display : flex;
justify-content: center;
background-color: #EFF2DD;
`
const Botaocadastro = styled.button`
padding: 10px;
margin: 10px;
background-color: #ffff;
border-radious: 10px;
`

// const { reset} = require('nodemon');
// const dboperations = require('./src/db/dbOperations');
// var Db=require('./src/db/dbOperations');
// dboperations.getDoadores().then(result =>{
//     console.log(result);
// })

function Cadastro() {
    return (
        <CadContainer>
           
            <nav className="cadstyle">
                
                <form>
                <h1>Encontre a Unibes da sua região</h1>
                    <lable>Nome:</lable>
                    <br></br>
                    <input type="text"  placeholder="Seu Nome" />
                    <br></br><br></br>
                    <lable>Endereço:</lable>
                    <br></br>
                    <input type="text"  placeholder="Ex: Rua ..." />
                    <br></br><br></br>
                    {/* <label>Email:</label> <br></br>
                    <input type="email" />
                    <br></br> <br></br> */}
                    <label>Zona</label>
                    <br></br>
                    <input type="Text" placeholder="Ex: Norte" />
                    <br></br> <br></br>

                    <Botaocadastro>Procurar</Botaocadastro>
                   
                </form>


            </nav>
        </CadContainer>
    )
}


export default Cadastro