'use client';

import { useState } from 'react';
import Link from 'next/link'; // Importando o Link do Next.js

const CadastroNoticia = () => {
  const [titulo, setTitulo] = useState('');
  const [imagem, setImagem] = useState<File | null>(null);
  const [texto, setTexto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Pega a data atual automaticamente
    const dataAtual = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

    console.log({ titulo, imagem, texto, data: dataAtual });

    setTimeout(() => {
      setIsLoading(false);
      alert('Notícia cadastrada com sucesso!');

      // Limpar o formulário após envio bem-sucedido
      setTitulo('');
      setImagem(null);
      setTexto('');
    }, 1500);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImagem(e.target.files[0]);
    }
  };

  return (
    <div className="mx-auto max-w-screen-md lg:p-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-sky-500">Cadastrar Notícia</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="titulo" className="block text-sm font-semibold text-sky-500">Título</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full p-3 border border-sky-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        <div>
          <label htmlFor="imagem" className="block text-sm font-semibold text-sky-500">Imagem</label>
          <input
            type="file"
            id="imagem"
            onChange={handleImageChange}
            className="w-full p-3 border border-sky-500 rounded-lg text-sky-500 file:border-0 file:bg-sky-100 file:text-sky-500 file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500"
            accept="image/*"
            required
          />
        </div>

        <div>
          <label htmlFor="texto" className="block text-sm font-semibold text-sky-500">Texto</label>
          <textarea
            id="texto"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            className="w-full p-3 border border-sky-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            rows={6}
            required
          />
        </div>

        {/* Removido o input de data */}

        <button
          type="submit"
          className="w-full p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all ease-in-out duration-300 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      <div className="mt-6 flex justify-between gap-4">
        {/* Botão para voltar à página principal usando Link */}
        <Link href="/">
          <button className="px-6 py-2 text-black bg-zinc-300 rounded-md hover:bg-zinc-200 transition-all ease-in-out duration-300">
            Página inicial
          </button>
        </Link>

        {/* Botão para ir para a página de notícias usando Link */}
        <Link href="/noticias">
          <button className="px-6 py-2 text-white bg-sky-500 rounded-md hover:bg-sky-600 transition-all ease-in-out duration-300">
            Ver notícias
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CadastroNoticia;
