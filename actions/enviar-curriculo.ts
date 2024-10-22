'use server';

import { Resend } from 'resend';
import cron from 'node-cron';
import EmailTemplate from '../src/app/Components/Template/email-basic';
import { getEmpresasMany } from './empresa-service';


interface ServiceProps {
  nome: string;
  description: string;
  email: string;
  link: string;
  numero: string;
}

export default async function scheduleEmail({ nome, description, email, link, numero }: ServiceProps) {
  const resend = new Resend('RESEND_API_KEY');


  cron.schedule('0 9 * * *', async () => {
    console.log('Enviando e-mails automáticos...');

    try {
      const empresas = await getEmpresasMany();
      const emails = empresas.map(empresa => empresa.email);

      for (const emailEmpresas of emails) {
        try {
          await resend.emails.send({
            from: email,
            to: [emailEmpresas],
            subject: `Olá, muito prazer. Meu nome é ${nome}`,
            react: EmailTemplate(description, link, numero),
          });
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
