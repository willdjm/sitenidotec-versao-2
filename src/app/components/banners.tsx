"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"; // Importando os ícones do React Icons (Chevron Left e Chevron Right)

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [randomVideo, setRandomVideo] = useState<string>(""); // Iniciar como uma string vazia
  const [isFading, setIsFading] = useState<boolean>(false);

  // UseMemo para memorizar o array de vídeos e evitar recriação em cada renderização
  const videos = useMemo(() => [
    {
      desktop: "/video-banner-home-nidoimovel.mp4", // Vídeo para desktop na posição 1
      mobile: "/video-banner-home-nidoimovel-mobile.mp4",   // Vídeo para mobile na posição 1
    },
    {
      desktop: "/video-banner-home-nidoadm.mp4", // Vídeo para desktop na posição 1
      mobile: "/video-banner-home-nidoadm-mobile.mp4",   // Vídeo para mobile na posição 1
    },
    {
      desktop: "/video-banner-home-sites.mp4", // Vídeo para desktop na posição 1
      mobile: "/video-banner-home-sites-mobile.mp4",   // Vídeo para mobile na posição 1
    },
    {
      desktop: "/video-banner-home-sistema.mp4", // Vídeo para desktop na posição 1
      mobile: "/video-banner-home-sistema-mobile.mp4",   // Vídeo para mobile na posição 1
    },
  ], []); // Array de vídeos não muda, então o array de dependências é vazio

  // Função para determinar qual vídeo usar dependendo do tamanho da tela (desktop ou mobile)
  const getVideoForDevice = useCallback(() => {
    const isMobile = window.innerWidth <= 768; // Lógica simples para detectar se é mobile (tamanho de tela <= 768px)
    return isMobile ? videos[currentIndex].mobile : videos[currentIndex].desktop;
  }, [currentIndex, videos]); // Agora, vídeos é uma dependência memorizada

  // Função para mudar o vídeo
  const changeVideo = useCallback((nextIndex: number) => {
    setIsFading(true); // Inicia o fade-out do vídeo atual
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setRandomVideo(getVideoForDevice()); // Atualiza o vídeo conforme o tipo de dispositivo
      setIsFading(false); // Após a transição, finaliza o fade-in do novo vídeo
    }, 500); // Espera o tempo da transição (500ms)
  }, [getVideoForDevice]); // Aqui a dependência é getVideoForDevice

  // Efeito para trocar o vídeo automaticamente a cada 5 segundos
  useEffect(() => {
    setRandomVideo(getVideoForDevice()); // Define o vídeo inicial dependendo do dispositivo
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % videos.length;
      changeVideo(nextIndex);
    }, 5000);

    return () => clearInterval(intervalId); // Limpeza do intervalo quando o componente for desmontado
  }, [currentIndex, changeVideo, getVideoForDevice, videos.length]); // Aqui também, vídeos.length é necessário

  // Função para navegação manual (próximo vídeo)
  const goToNextVideo = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    changeVideo(nextIndex);
  };

  // Função para navegação manual (vídeo anterior)
  const goToPrevVideo = () => {
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    changeVideo(prevIndex);
  };

  return (
    <div className="relative w-full h-80 lg:h-[30rem] overflow-hidden shadow-lg">
      {/* Vídeo com transição Fade-in */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Renderizar o vídeo apenas se randomVideo não estiver vazio */}
        {randomVideo && (
          <video
            key={randomVideo} // Garantir que o vídeo seja atualizado quando o src mudar
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src={randomVideo} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        )}
      </div>

      {/* Setas de navegação (visíveis apenas em telas grandes) */}
      <button
        onClick={goToPrevVideo}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-sky-500 bg-opacity-75 text-white p-3 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none hidden md:block transition-all duration-300 ease-in-out hover:scale-110"
      >
        <MdChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNextVideo}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-sky-500 bg-opacity-75 text-white p-3 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none hidden md:block transition-all duration-300 ease-in-out hover:scale-110"
      >
        <MdChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};
