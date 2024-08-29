'use server';

import nodemailer from 'nodemailer'

export default async function enviarCurriculo(email: string, description: string, curriculo: File) {
  const Empresas = ['empresa1@example.com', 'empresa2@example.com', 'empresa3@example.com']; // Substitua pelos emails das empresas que vão receber o currículo

  // Configurar o transporter para usar o Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seu-email@gmail.com', // Seu email
      pass: 'sua-senha-de-aplicativo', // Sua senha de aplicativo (gerada nas configurações do Google)
    },
  });

  // Criar as opções do email
  const mailOptions = {
    from: email,
    to: Empresas.join(','), // Enviar para todas as empresas na lista
    subject: 'Novo Currículo Recebido',
    text: description,
    attachments: [
      {
        filename: curriculo.name,
        content: curriculo, // O arquivo do currículo
      },
    ],
  };

  // Enviar o email
  try {
    await transporter.sendMail(mailOptions as any);
    console.log('Email enviado com sucesso');
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
  }
}
