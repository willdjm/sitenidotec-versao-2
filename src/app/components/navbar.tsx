"use client"

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { MdPhone } from "react-icons/md";
import { FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronDown, FaTimes, FaWhatsapp } from "react-icons/fa";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Para controlar o dropdown do "Serviços"
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Corrigido para HTMLDivElement

  // Função para fechar o dropdown se clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="bg-white mx-auto max-w-screen-xl">
        {/* Top Section - Logo, Contact and SAC */}
        <div className="flex items-center justify-between p-4 gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href='/'>
            <picture>
            <img src="/logo-nido-porto.png" alt="Logo" className="h-full sm:h-24" />
            </picture>
            </Link>
          </div>

          {/* Desktop Phone and SAC */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="tel:+551145083724">
              <p className="text-gray-800 hover:text-sky-500 ">
                <MdPhone className="inline-block mr-2" size={18} />
                (11) 4508-3724
              </p>
            </Link>
            <Link href="https://wa.me/5511953052059" target="_blank">
              <p className="text-gray-800 hover:text-sky-500">
      <FaWhatsapp className="inline-block mr-2" size={20} />
      (11) 95305-2059
              </p>
            </Link>
            <a href="http://portal.nido.com.br/index.php/site/login" target="_blank" className="bg-sky-500 text-white px-4 py-2 rounded-md text-sm hover:bg-sky-500/90">
              Área do Cliente
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-800 hover:text-sky-500 text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white absolute top-0 left-0 w-full h-screen flex flex-col p-6 space-y-6 shadow-lg z-50">
            {/* Close Button and Logo */}
            <div className="flex justify-between items-center mb-6 gap-4">
              {/* Logo on the left */}
              <picture>
              <img src="/logo-nido-porto.png" alt="Logo" className="h-full sm:h-24" />
              </picture>

              {/* Close Button on the right */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 hover:text-sky-500 text-2xl"
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
              <Link href="/">
                <p className="text-gray-800 hover:text-sky-500 py-1">Home</p>
              </Link>
              <Link href="/empresa">
                <p className="text-gray-800 hover:text-sky-500 py-1">Empresa</p>
              </Link>
              <Link href="/nidoimovel">
                <p className="text-gray-800 hover:text-sky-500 py-1">NIDOImóvel</p>
              </Link>
              <Link href="/nidoadm">
                <p className="text-gray-800 hover:text-sky-500 py-1">NIDOAdm</p>
              </Link>
              <Link href="/sites-imobiliarias">
                <p className="text-gray-800 hover:text-sky-500 py-1">Sites para Imobiliárias</p>
              </Link>
              <Link href="/sistemas-corretores">
                <p className="text-gray-800 hover:text-sky-500 py-1">Sistemas para Corretores</p>
              </Link>
              <Link href="/clientes">
                <p className="text-gray-800 hover:text-sky-500 py-1">Suporte Técnico e Treinamento</p>
              </Link>
              <Link href="/parceiros">
                <p className="text-gray-800 hover:text-sky-500 py-1">Gestão de TI</p>
              </Link>
              <Link href="/clientes">
                <p className="text-gray-800 hover:text-sky-500 py-1">Clientes</p>
              </Link>
              <Link href="/parceiros">
                <p className="text-gray-800 hover:text-sky-500 py-1">Parceiros</p>
              </Link>
              <Link href="/contato">
                <p className="text-gray-800 hover:text-sky-500 py-1">Contato</p>
              </Link>

              {/* Contact Info and SAC */}
              <div className="mt-6">
              <Link href="tel:+551145083724">
              <p className="text-gray-800 hover:text-sky-500 ">
                <MdPhone className="inline-block mr-2" size={18} />
                (11) 4508-3724
              </p>
            </Link>
                <Link href="https://wa.me/5511953052059" target="_blank">
              <p className="text-gray-800 hover:text-sky-500 my-3">
      <FaWhatsapp className="inline-block mr-2" size={20} />
      (11) 95305-2059
              </p>
            </Link>
                <div className="flex space-x-4 mt-4">
                  <Link href="https://facebook.com">
                    <FaFacebookF size={20} className="text-gray-800 hover:text-sky-500" />
                  </Link>
                  <Link href="https://instagram.com">
                    <FaInstagram size={20} className="text-gray-800 hover:text-sky-500" />
                  </Link>
                  <Link href="https://linkedin.com">
                    <FaLinkedinIn size={20} className="text-gray-800 hover:text-sky-500" />
                  </Link>
                </div>
                <div className="mt-6">
                <Link href="http://portal.nido.com.br/index.php/site/login" className="bg-sky-500 text-white px-4 py-2 rounded-md text-sm hover:bg-sky-500/90">
                  Área do Cliente
                </Link>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center space-x-8 py-4 border-t  border-gray-200 text-center w-full">
          <Link href="/">
            <p className="text-gray-800 hover:text-sky-500">Home</p>
          </Link>
          <Link href="/empresa">
            <p className="text-gray-800 hover:text-sky-500">Empresa</p>
          </Link>
          <Link href="/nidoimovel">
            <p className="text-gray-800 hover:text-sky-500">NIDOImóvel</p>
          </Link>
          <Link href="/nidoadm">
            <p className="text-gray-800 hover:text-sky-500">NIDOAdm</p>
          </Link>
          <Link href="/sites-para-imobiliaria">
            <p className="text-gray-800 hover:text-sky-500">Sites para Imobiliárias</p>
          </Link>
          <Link href="/sistema-para-corretores">
            <p className="text-gray-800 hover:text-sky-500">Sistemas para Corretores</p>
          </Link>

          {/* Services Section with Dropdown */}
          <div className="relative">
            <p
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-800 hover:text-sky-500 flex items-center justify-between cursor-pointer"
            >
              <span>Serviços</span>
              <FaChevronDown size={16} className={`${isDropdownOpen ? "transform rotate-180" : ""}`} />
            </p>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="ml-4 space-y-2 mt-2 absolute left-0 bg-white shadow-lg w-48 border border-gray-300 rounded-md z-50"
              >
                <Link href="/suporte-tecnico-e-treinamento">
                  <p className="text-gray-800 hover:text-sky-500 px-4 py-2">Suporte Técnico</p>
                </Link>
                <Link href="/gestao-de-ti">
                  <p className="text-gray-800 hover:text-sky-500 px-4 py-2">Treinamento e Gestão de TI</p>
                </Link>
              </div>
            )}
          </div>

          <Link href="/clientes">
            <p className="text-gray-800 hover:text-sky-500">Clientes</p>
          </Link>
          <Link href="/parceiros">
            <p className="text-gray-800 hover:text-sky-500">Parceiros</p>
          </Link>
          <Link href="/contato">
            <p className="text-gray-800 hover:text-sky-500">Contato</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
