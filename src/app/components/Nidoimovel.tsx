"use client"

import { useState } from 'react';
import { FaHome, FaBuilding, FaDollarSign, FaChartLine, FaUsers } from 'react-icons/fa';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { id: 1, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/10-imagem.png', alt: 'Imagem 1' },
  { id: 2, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/11-imagem.png', alt: 'Imagem 2' },
  { id: 3, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/10-imagem.png', alt: 'Imagem 3' },
  { id: 4, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/11-imagem.png', alt: 'Imagem 4' },
  { id: 5, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/10-imagem.png', alt: 'Imagem 5' },
];

export const Nidoimovel = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(images[0]);

  const handleMouseEnter = (image: ImageData) => {
    setSelectedImage(image);
  };

  return (
    <section className="lg:py-24 py-14 flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl relative">

        {/* Header Section */}
        <div className="mx-auto w-full items-center justify-center lg:max-w-3xl mb-12">
          <div className="text-center flex flex-col">
            <p className="text-lg font-medium leading-8 text-gray-500">
              Notícias
            </p>
            <h1 className="mb-5 lg:text-5xl text-3xl font-bold tracking-tight text-sky-500">
              Oferecemos um processo eficiente e integrado com a simplicidade que você precisa.
            </h1>
            <p className="mb-10 text-base text-gray-500 text-center">
              Nosso blog está repleto de materiais para ajudar no seu dia a dia e proporcionar uma visão mais profunda sobre nossos produtos, aprimorando sua gestão de vendas e conhecimento do mercado
            </p>
          </div>
        </div>

        {/* Desktop Version - Lista à esquerda e Imagem à direita */}
        <div className="lg:flex lg:flex-row w-full hidden">

          {/* Lista à esquerda (Desktop) */}
          <div className="lg:w-1/2 w-full p-4 lg:pr-8 lg:pb-0">
            <ul className="space-y-6">
              {/* Item 1 */}
              <li
                className="flex items-start cursor-pointer p-4 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                onMouseEnter={() => handleMouseEnter(images[0])}
              >
                <FaHome className="text-3xl text-sky-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Gestão Inteligente</h3>
                  <p className="text-sm text-gray-500">Elimine o trabalho manual e deixe a tecnologia fazer o serviço pesado.</p>
                </div>
              </li>

              {/* Item 2 */}
              <li
                className="flex items-start cursor-pointer p-4 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                onMouseEnter={() => handleMouseEnter(images[1])}
              >
                <FaBuilding className="text-3xl text-sky-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Título 2</h3>
                  <p className="text-sm text-gray-500">Descrição do segundo item da lista.</p>
                </div>
              </li>

              {/* Item 3 */}
              <li
                className="flex items-start cursor-pointer p-4 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                onMouseEnter={() => handleMouseEnter(images[2])}
              >
                <FaDollarSign className="text-3xl text-sky-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Título 3</h3>
                  <p className="text-sm text-gray-500">Descrição do terceiro item da lista.</p>
                </div>
              </li>

              {/* Item 4 */}
              <li
                className="flex items-start cursor-pointer p-4 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                onMouseEnter={() => handleMouseEnter(images[3])}
              >
                <FaChartLine className="text-3xl text-sky-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Título 4</h3>
                  <p className="text-sm text-gray-500">Descrição do quarto item da lista.</p>
                </div>
              </li>

              {/* Item 5 */}
              <li
                className="flex items-start cursor-pointer p-4 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                onMouseEnter={() => handleMouseEnter(images[4])}
              >
                <FaUsers className="text-3xl text-sky-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Título 5</h3>
                  <p className="text-sm text-gray-500">Descrição do quinto item da lista.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Imagem à direita (Desktop) */}
          <div className="lg:w-1/2 w-full p-4 flex justify-center">
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full h-auto rounded-lg transition-all duration-500 ease-in-out opacity-100 transform"
              />
            )}
          </div>
        </div>

        {/* Mobile Version - Mostrar todos os itens com suas imagens */}
        <div className="lg:hidden w-full">
          <ul className="space-y-6">
            {images.map((image, index) => (
              <li
                key={image.id}
                className="flex flex-col items-center p-4 bg-gray-200 rounded-md hover:bg-gray-300 transition"
              >
                <div className="flex items-center mb-2">
                  {index === 0 && <FaHome className="text-3xl text-sky-500" />}
                  {index === 1 && <FaBuilding className="text-3xl text-sky-500" />}
                  {index === 2 && <FaDollarSign className="text-3xl text-sky-500" />}
                  {index === 3 && <FaChartLine className="text-3xl text-sky-500" />}
                  {index === 4 && <FaUsers className="text-3xl text-sky-500" />}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{image.alt}</h3>
                    <p className="text-sm text-gray-500">Descrição do item {index + 1}</p>
                  </div>
                </div>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg mt-4"
                />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
