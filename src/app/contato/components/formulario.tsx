'use client'

import { useState } from 'react';

type FormData = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  celular: string;
  mensagem: string;
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    celular: '',
    mensagem: '',
  });

  // Função para lidar com as mudanças nos campos de entrada
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para a API ou backend
    console.log('Dados do formulário enviados:', formData);
  };

  return (
    <section className="text-gray-600 body-font relative mt-10 lg:mt-0">
      <div className="container px-5 lg:py-10 mx-auto max-w-screen-xl flex flex-wrap">
        
        {/* Lado esquerdo: Formulário de Contato */}
        <div className="w-full lg:w-1/2 bg-white p-0 lg:p-4">
          <h2 className="text-xl text-sky-500 mb-4">Preencha o formulário, teremos prazer em atender você.</h2>
          <form onSubmit={handleSubmit}>
            {/* Campo Nome */}
            <div className="relative mb-4">
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome"
                className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Campo Empresa */}
            <div className="relative mb-4">
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Empresa"
                className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Campo E-mail */}
            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Campo Telefone */}
            <div className="relative mb-4">
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="Telefone"
                className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Campo Celular */}
            <div className="relative mb-4">
              <input
                type="text"
                id="celular"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                placeholder="Celular"
                className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Campo Mensagem */}
            <div className="relative mb-4">
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Mensagem"
                className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Botão de Enviar */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>

        {/* Lado direito: Mapa */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.144324386248!2d-46.638169999999995!3d-23.5991564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce581f6405551f%3A0xccc6f8913333f60b!2sNido%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1737317616331!5m2!1spt-BR!2sbr"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-full rounded-lg" 
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Localização"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
