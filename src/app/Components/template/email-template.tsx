
export default function EmailTemplate(description: string, link: string, contact: string) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 shadow-blue-700 rounded-lg shadow-lg max-w-md mx-auto">
      <p>{description}</p>
      <a href={link} className="w-full mt-3 rounded-lg border-2 bg-green-600 p-4 text-white font-bold hover:bg-green-700 transition-colors">
        Clique aqui para acessar o meu curriculo
      </a>
      <p className="text-white text-sm mt-4">Caso queira entrar em contato comigo, entre em contato pelo e-mail {contact}</p>
    </div>
  )
}
