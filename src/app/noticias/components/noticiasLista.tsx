'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { news } from '../../../../notices'; // Importe os dados de notícias

interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  text: string;
}

interface NoticesProps {
  numNotices?: number;  // Número de notícias a serem exibidas
  showPagination?: boolean;  // Controla a exibição da paginação
  title?: string;  // Título opcional para o <h1>
  showTitle?: boolean;  // Controla a exibição do <h1>
}

export function NoticesList({
  numNotices = 12,
  showPagination = true,
  title = 'Últimas Notícias',
  showTitle = true
}: NoticesProps) {
  // O estado das notícias será baseado nos dados importados
  const [currentPage, setCurrentPage] = useState(1);

  // Calculando os índices para paginação
  const indexOfLastNotice = currentPage * numNotices;
  const indexOfFirstNotice = indexOfLastNotice - numNotices;
  const currentNotices = news.slice(indexOfFirstNotice, indexOfLastNotice);

  // Total de páginas de acordo com o número de notícias
  const totalPages = Math.ceil(news.length / numNotices);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="bg-white p-6">
      <div className="container mx-auto max-w-screen-xl">
        {/* Exibe o título h1 somente se showTitle for true */}
        {showTitle && (
          <h1 className="text-2xl font-semibold text-sky-500 capitalize lg:text-2xl border-b-2 border-sky-500">
            {title}
          </h1>
        )}

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {currentNotices.map((item: NewsItem) => (
            <div key={item.id} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden group">
              <Link href={`/noticias/${item.id}`}>
                <picture>
                  <img
                    className="rounded-t-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                    src={item.image}
                    alt={item.title}
                  />
                </picture>
              </Link>

              <div className="flex flex-col justify-between py-4 px-6">
                <Link href={`/noticias/${item.id}`}>
                  <p className="text-xl font-semibold text-gray-800 group-hover:text-sky-500 transition-colors duration-200 ">
                    {item.title}
                  </p>
                </Link>

                {/* Exibe um trecho do texto da notícia (limitando a 100 caracteres) */}
                <p className="text-base text-gray-600 mt-2 ">
                  {item.text.length > 100 ? `${item.text.slice(0, 70)}...` : item.text}
                </p>

                {/* Exibe a data da notícia */}
                <p className="text-sm text-gray-500 mt-2 ">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Se a paginação estiver habilitada, mostra o controle de páginas */}
        {showPagination && (
          <div className="flex justify-center mt-8">
            <nav>
              <ul className="flex space-x-2">
                {/* Botão "Anterior" */}
                <li>
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    className={`px-4 py-2 border rounded-md ${
                      currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-sky-500 text-white'
                    }`}
                    disabled={currentPage === 1}
                  >
                    Anterior
                  </button>
                </li>

                {/* Páginas */}
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`px-4 py-2 border rounded-md ${
                        currentPage === index + 1 ? 'bg-sky-500 text-white' : 'bg-white text-sky-500'
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}

                {/* Botão "Próximo" */}
                <li>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    className={`px-4 py-2 border rounded-md ${
                      currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-sky-500 text-white'
                    }`}
                    disabled={currentPage === totalPages}
                  >
                    Próximo
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Se a paginação não estiver habilitada, mostra o botão "Ver mais" */}
        {!showPagination && (
          <div className="flex justify-center mt-8">
            <Link href="/noticias">
              <button className="px-6 py-2 text-white bg-sky-500 rounded-md hover:bg-sky-600">
                Ver mais
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
