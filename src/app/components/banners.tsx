"use client";

import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"; // Importando os ícones do React Icons (Chevron Left e Chevron Right)

const images = [
  {
    src: "/1.jpg",
    text: "Texto para a Imagem 1",
  },
  {
    src: "/2.jpg",
    text: "Texto para a Imagem 2",
  },
  {
    src: "/3.jpg",
    text: "Texto para a Imagem 3",
  },
  {
    src: "/4.jpg",
    text: "Texto para a Imagem 1",
  },
  {
    src: "/5.jpg",
    text: "Texto para a Imagem 2",
  },
  {
    src: "/6.jpg",
    text: "Texto para a Imagem 3",
  },
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [randomImage, setRandomImage] = useState<string>(images[0].src);
  const [imageText, setImageText] = useState<string>(images[0].text);
  const [isFading, setIsFading] = useState<boolean>(false);

  // Função para mudar a imagem
  const changeImage = (nextIndex: number) => {
    setIsFading(true); // Inicia o fade-out da imagem atual
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setRandomImage(images[nextIndex].src);
      setImageText(images[nextIndex].text);
      setIsFading(false); // Após a transição, finaliza o fade-in da nova imagem
    }, 500); // Espera o tempo da transição (500ms)
  };

  // Efeito para trocar a imagem automaticamente a cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      changeImage(nextIndex);
    }, 5000);

    return () => clearInterval(intervalId); // Limpeza do intervalo quando o componente for desmontado
  }, [currentIndex]);

  // Função para navegação manual (próxima imagem)
  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    changeImage(nextIndex);
  };

  // Função para navegação manual (imagem anterior)
  const goToPrevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(prevIndex);
  };

  return (
    <div className="relative w-full h-[30rem] overflow-hidden shadow-lg"> {/* Sombra adicionada aqui */}
      {/* Imagem com transição Fade-in */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ease-in-out ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${randomImage})`,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">{imageText}</h2>
      </div>

      {/* Setas de navegação (visíveis apenas em telas grandes) */}
      <button
        onClick={goToPrevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-sky-500 bg-opacity-75 text-white p-3 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none hidden md:block transition-all duration-300 ease-in-out hover:scale-110"
      >
        <MdChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-sky-500 bg-opacity-75 text-white p-3 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none hidden md:block transition-all duration-300 ease-in-out hover:scale-110"
      >
        <MdChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};
