"use client";

import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <div className="mx-auto max-w-screen-xl lg:p-10 p-4">
      <h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl dark:text-white border-b-2 border-sky-500 dark:border-white/10 w-full">
      Entre em contato
      </h1>
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3">
        {/* Card de Email */}
        <div className="flex flex-col items-center gap-3 p-8 bg-white rounded-2xl shadow-xl border transition-transform duration-300 ease-in-out transform hover:scale-105">
          <span>
            <FaEnvelope size={30} className="text-sky-500" />
          </span>
          <p className="text-xl text-sky-500">Email</p>
          <a className="text-base" href="mailto:contato@nido.com.br">contato@nido.com.br</a>
        </div>

        {/* Card de Telefone */}
        <div className="flex flex-col items-center gap-3 p-8 bg-white rounded-2xl shadow-xl border transition-transform duration-300 ease-in-out transform hover:scale-105">
          <span>
            <FaPhoneAlt size={30} className="text-sky-500" />
          </span>
          <p className="text-xl text-sky-500">Telefones</p>
          <a className="text-base" href="tel:+551145083724">+ 55 (11) 4508-3724</a>
          <a className="text-base" href="https://wa.me/5511953052059" target="_blank">+ 55 (11) 95305-2059</a>
        </div>

        {/* Card de Endereço */}
        <div className="flex flex-col items-center gap-3 p-8 bg-white rounded-2xl shadow-xl border transition-transform duration-300 ease-in-out transform hover:scale-105">
          <span>
            <FaMapMarkerAlt size={30} className="text-sky-500" />
          </span>
          <p className="text-xl text-sky-500">Endereço</p>
          <a
            className="text-base text-center"
            target="_blank"
            href="https://maps.app.goo.gl/81sezHCQf23LYQuDA"
          >
            Rua Machado Bitencourt, 205 - cj 96 - Vila Clementino, São Paulo - SP, 04044-904
          </a>
        </div>
      </div>
    </div>
  );
};
