'use client';
import enviarCurriculo from '@/app/server/enviar-curriculo';
import { useRef, useState } from 'react';
import EmailTemplate from '../template/email-template';
import formatPhoneNumber from '@/app/utils/formatNumber';

export default function Stage1() {
  const [description, setDescription] = useState('');
  const [numero, setNumero] = useState('');
  const [nome, setNome] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null); // Especificando o tipo do input

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Agora o TypeScript sabe que click existe
    }
  };


  const HandleSendCurriculo = () => {
    EmailTemplate(description);
    enviarCurriculo(nome, description);
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 shadow-blue-700 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-4xl font-extrabold text-white mb-5">Bem-vindo(a)</h1>
      <p className="text-white mb-5 text-center" >Preencha o formulario e espere o contato da empresas, <span className='font-bold'>não esqueça de verificar o seu email </span></p>
      <div className="flex flex-col space-y-6 w-full">
        <input
          type="text"
          placeholder="Seu primeiro nome"
          className="rounded-lg border-2 p-4 bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-blue-500 focus:outline-none"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Seu numero de telefone"
          className="rounded-lg border-2 p-4 bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-blue-500 focus:outline-none"
          value={numero}
          onChange={(e) => setNumero(formatPhoneNumber(e.target.value))}
        />

        <textarea
          placeholder="Se apresente para a empresa"
          className="rounded-lg border-2 p-4 bg-gray-800 text-white placeholder-gray-400 border-gray-700 h-40 focus:border-blue-500 focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Input de arquivo estilizado */}
        <div className="mb-6">
          <button
            onClick={handleFileUpload}
            className="w-full rounded-lg border-2 p-4 bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            Carregue o seu currículo
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
          />
        </div>
      </div>

      <button onClick={HandleSendCurriculo} className="w-full mt-3 rounded-lg border-2 bg-green-600 p-4 text-white font-bold hover:bg-green-700 transition-colors">
        Enviar Currículo
      </button>
    </div>
  );
}