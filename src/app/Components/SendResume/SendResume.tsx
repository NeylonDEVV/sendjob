'use client';
import enviarCurriculo from '../../../../actions/enviar-curriculo';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formatPhone from '@/app/utils/formatNumber';

export default function SendResume() {
  const [Descricao, setDescricao] = useState('');
  const [Numero, setNumero] = useState('');
  const [Nome, setNome] = useState('');
  const [Email, setEmail] = useState('');
  const [Link, setLink] = useState('');

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!Nome || !Descricao || !Link || !Numero || !Email) {
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

      await enviarCurriculo({ nome: Nome, description: Descricao, email: Email, link: Link, numero: formatPhone(Numero) });
      toast.success('Currículo enviado com sucesso!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
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
    <div className='flex flex-col gap-4 '>
      <div className='flex flex-col lg:flex-row gap-5 '>
        <input
          type="text"
          placeholder="Seu primeiro nome"
          className="rounded-lg lg:w-[45%]  border-2 p-3 bg-[#00000E] text-white placeholder-gray-400 border-blue-600 focus:border-blue-500 focus:outline-none"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Seu número de telefone"
          className="rounded-lg lg:w-[50%] border-2 p-3 bg-[#00000E] text-white placeholder-gray-400 border-blue-600 focus:border-blue-500 focus:outline-none"
          onChange={(e) => setNumero(formatPhone(e.target.value))}
        />
      </div>

      <input
        type="text"
        placeholder="qual seu email"
        className="rounded-lg border-2 p-3 bg-[#00000E] text-white placeholder-gray-400 border-blue-600 focus:border-blue-500 focus:outline-none"
        onChange={(e) => setEmail(e.target.value)}
      />


      <textarea
        placeholder="Se apresente para a empresa"
        className="rounded-lg border-2 p-3 bg-[#00000E] text-white placeholder-gray-400 border-blue-600 h-40 focus:border-blue-500 focus:outline-none"
        onChange={(e) => setDescricao(e.target.value)}
      />

      <input
        type="text"
        placeholder="Cole o link do seu curriculo"
        className="rounded-lg border-2 p-3 bg-[#00000E] text-white placeholder-gray-400 border-blue-600 focus:border-blue-500 focus:outline-none"
        onChange={(e) => setLink(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white font-bold rounded-lg p-4 mt-3 hover:bg-blue-700 transition-colors"
        onClick={handlerSubmit}
      >
        Enviar curriculo
      </button>
      <ToastContainer />
    </div>
  );
}
