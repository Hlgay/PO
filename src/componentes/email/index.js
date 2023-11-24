import React, { useState } from 'react';
import axios from 'axios';
import './email.css'
import styled from 'styled-components'

const MailContainer = styled.div`
margin: 20px;
`

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/newsletter', { email });
      alert('Cadastro efetuado com sucesso!');
      setEmail('');
    } catch (err) {
      console.error(err);
      alert('Ocorreu um erro ao cadastrar seu email. Tente novamente.');
    }
  };

  return (
    <MailContainer>
      <h4>Informe seu e-mail para mais inofrmações</h4>
      <form className='form-mail' onSubmit={handleSubmit}>
        <input className='colocar-email'
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br></br>
        <button className='botao-email' type="submit">Cadastrar</button>
      </form>
    </MailContainer>
  );
};

export default NewsletterForm;
// como eu faço o back end desse arquivo?