
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageHome from './pages/PageHome';
import PageEletronico from './pages/PageEletronico';
import PageAlimento from './pages/PageAlimento';
import PageModa from './pages/PageModa'
import PageCadatro from './pages/PageCadastro'
import PageLogin from './pages/PageLogin';
import axios from 'axios';

// const { reset} = require('nodemon');
// const dboperations = require('./src/db/dbOperations');
// var Db=require('./src/db/dbOperations');
// dboperations.getDoadores().then(result =>{
//     console.log(result);
// })
axios.get('http://localhost:3000/app')
 .then(response => {
    console.log(response.data);
 })
 .catch(error => {
    console.log(error);
 });
// conexão com o back end
fetch('http://localhost:3000/data')
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error('Erro:', error));
// fim conexão com o back end
function App() {
  return (

    
    <Router>
      <Routes>
        <Route path="/" exact element={<PageHome/>} />
        <Route path="/pageM" element={<PageModa/>} />
        <Route path="/pageE" element={<PageEletronico/>} />
        <Route path="/pageA" element={<PageAlimento/>} />
        <Route path="/pageC" element={<PageCadatro/>} />
        <Route path="/pageL" element={<PageLogin/>} />


      </Routes>
    </Router>
  );
}
export default App;
