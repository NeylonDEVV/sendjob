'use client';
import enviarCurriculo from '@/app/server/enviar-curriculo';
import { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formatPhone from '@/app/utils/formatNumber';
import AddUrl from '../addurl/modal';

export default function Stage1() {
  const [description, setDescription] = useState('');
  const [numero, setNumero] = useState('');
  const [nome, setNome] = useState('');
  const [link, setLink] = useState('');

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!nome || !description || !link || !numero) {
        toast.error('Preencha todos os campos!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }

      await enviarCurriculo(nome, description, link, numero);
      toast.success('Currículo enviado com sucesso!', {
        position: "top-right",
        autoClose: 3000, // Fecha automaticamente após 3 segundos
        hideProgressBar: true, // Oculta a barra de progresso
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error('Erro ao enviar o currículo. Tente novamente.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }



  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 shadow-blue-700 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-4xl font-extrabold text-white mb-5">Bem-vindo(a)</h1>
      <p className="text-white mb-5 text-center">
        Preencha o formulário e espere o contato das empresas. <span className="font-bold">Não se esqueça de verificar o seu email.</span>
      </p>
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
          placeholder="Seu número de telefone"
          className="rounded-lg border-2 p-4 bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-blue-500 focus:outline-none"
          value={numero}
          onChange={(e) => setNumero(formatPhone(e.target.value))}
        />

        <textarea
          placeholder="Se apresente para a empresa"
          className="rounded-lg border-2 p-4 bg-gray-800 text-white placeholder-gray-400 border-gray-700 h-40 focus:border-blue-500 focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Cole o link do seu currículo"
          className="rounded-lg border-2 p-4 bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-blue-500 focus:outline-none"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>

      <button onClick={handlerSubmit} className="w-full mt-3 rounded-lg border-2 bg-green-600 p-4 text-white font-bold hover:bg-green-700 transition-colors">
        Enviar Currículo
      </button>

      <AddUrl />

      {/* Contêiner do Toast */}
      <ToastContainer />
    </div>
  );
}
