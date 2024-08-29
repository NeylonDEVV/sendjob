'use client';
import { useRef } from 'react';

export default function Stage1() {
  const fileInputRef = useRef<HTMLInputElement>(null); // Especificando o tipo do input

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Agora o TypeScript sabe que `click` existe
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-4xl font-extrabold text-white mb-8">Bem-vindo(a)</h1>

      <div className="flex flex-col space-y-6 w-full">
        <input
          type="text"
          placeholder="Digite seu email"
          className="rounded-lg border-2 p-4 bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-blue-500 focus:outline-none"
        />

        <textarea
          placeholder="Se apresente para a empresa"
          className="rounded-lg border-2 p-4 bg-gray-800 text-white placeholder-gray-400 border-gray-700 h-40 focus:border-blue-500 focus:outline-none"
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

      <button className="w-full mt-3 rounded-lg border-2 bg-green-600 p-4 text-white font-bold hover:bg-green-700 transition-colors">
        Enviar Currículo
      </button>
    </div>
  );
}
