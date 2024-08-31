'use server';

import { Resend } from 'resend';
import EmailTemplate from '../Components/template/email-template';

export default async function enviarCurriculo(nome: string, description: string, link: string, contact: string) {
  const empresas = ['neylondev@gmail.com']; // Substitua pelos e-mails das empresas que vão receber o currículo

  const resend = new Resend('re_68GKtrjT_9cwqJrDyQ7ZqmnF15gELRjs6');

  try {
    for (const empresa of empresas) {
      try {
        await resend.emails.send({
          from: 'delivered@resend.dev',
          to: [empresa],
          subject: 'Olá muito prazer meu nome é ' + nome,
          react: EmailTemplate(description, link, contact),
        });
        console.log(`Email enviado com sucesso para ${empresa}`);
      } catch (error) {
        console.error(`Erro ao enviar o email para ${empresa}:`, error);
      }
    }
  } catch (error) {
    console.error('Erro ao enviar os e-mails:', error);
  }
}
