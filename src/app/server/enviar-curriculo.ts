'use server';

import { Resend } from 'resend';
import cron from 'node-cron';
import EmailTemplate from '../Components/template/email-template';
import { getEmpresasMany } from './empresa-service';

export default async function scheduleEmail(nome: string, description: string, link: string, numero: string) {
  const resend = new Resend('re_68GKtrjT_9cwqJrDyQ7ZqmnF15gELRjs6');

  // Configura o cron job para rodar todos os dias às 9:00 AM
  cron.schedule('0 9 * * *', async () => {
    console.log('Enviando e-mails automáticos...');

    try {
      const empresas = await getEmpresasMany(); // Obtém a lista de empresas
      const emails = empresas.map(empresa => empresa.email); // Extrai os e-mails

      for (const email of emails) {
        try {
          await resend.emails.send({
            from: 'delivered@resend.dev',
            to: [email],
            subject: `Olá, muito prazer. Meu nome é ${nome}`,
            react: EmailTemplate(description, link, numero),
          });
          console.log(`Email enviado com sucesso para ${email}`);
        } catch (error) {
          console.error(`Erro ao enviar o email para ${email}:`, error);
        }
      }
    } catch (error) {
      console.error('Erro ao obter e-mails das empresas:', error);
    }
  });

  console.log('Cron job configurado para enviar e-mails diariamente às 9:00 AM');
}
