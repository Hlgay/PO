const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

// Configuração do Sequelize (substitua 'database', 'username' e 'password' pelos seus próprios valores)
const sequelize = new Sequelize('email', 'Giulia Nogueira', '0624664gg.', {
  host: '3306',
  dialect: 'mysql',
});

// Modelo Sequelize
const Subscriber = sequelize.define('Subscriber', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

// Configuração de transporte de e-mail (substitua 'user' e 'pass' pelos seus próprios valores)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seuemail@gmail.com',
    pass: 'suasenha',
  },
});

app.use(bodyParser.json());

// Endpoint para inscrições na newsletter
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  try {
    // Verifica se o e-mail já está cadastrado
    const existingSubscriber = await Subscriber.findOne({ where: { email } });

    if (existingSubscriber) {
      return res.status(400).json({ error: 'E-mail já cadastrado na newsletter.' });
    }

    // Cria um hash para a senha (opcional, mas útil para senhas)
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Cria um novo inscrito
    await Subscriber.create({ email });

    // Exemplo de envio de e-mail
    const mailOptions = {
      from: 'seuemail@gmail.com',
      to: email,
      subject: 'Bem-vindo à Newsletter',
      text: 'Obrigado por se inscrever em nossa newsletter!',
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Inscrição bem-sucedida' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar o e-mail.' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
