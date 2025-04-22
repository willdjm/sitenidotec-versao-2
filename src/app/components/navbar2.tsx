"use client"

import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiHome, FiSettings, FiUser } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';  // Importando o ícone do WhatsApp
import Link from 'next/link';

export const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Tipando o estado dropdownOpen para garantir que ele tenha apenas as chaves específicas
  const [dropdownOpen, setDropdownOpen] = useState<{
    option1: boolean;
    option2: boolean;
    option3: boolean;
  }>({
    option1: false,
    option2: false,
    option3: false,
  });

  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Tipando 'dropdown' explicitamente
  const toggleDropdown = (dropdown: keyof typeof dropdownOpen) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown], // Aqui, a chave será validada
    }));
  };

  // Hook para detectar o scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white border-b border-sky-500/5 px-4 w-full max-w-full mx-auto transition-all duration-700 ease-in-out ${scrolling ? 'fixed top-0 left-0 right-0 shadow-lg z-30' : 'shadow-none'}`}>
      <div className="container mx-auto flex items-center justify-between py-6 max-w-7xl">
        {/* Logo */}
        <div className="text-sky-500 font-bold text-lg">
          <Link href="/">
            <picture>
              <img
                src='/logo-novo2.png'
                alt='Logo'
                className="h-14 lg:h-20 object-cover"
              />
            </picture>
          </Link>
        </div>

        {/* Menu Mobile Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-sky-500 focus:outline-none"
        >
          {menuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Opção 1 */}
          <Link
            href="/#"
            className="font-medium text-sky-500 relative group"
          >
            Início
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-500 group-hover:w-full"></span>
          </Link>

          {/* Opção 2 */}
          <Link
            href="#about"
            className="font-medium text-sky-500 relative group"
          >
            Sobre nós
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-500 group-hover:w-full"></span>
          </Link>

          {/* Opção 3 */}
          <div
            className="relative group"
            onMouseEnter={() => toggleDropdown('option2')}
            onMouseLeave={() => toggleDropdown('option2')}
          >
            <button className="text-sky-500 hover:text-sky-700 transition duration-300 font-medium">
              Produtos
            </button>
            {dropdownOpen.option2 && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10 transition-all duration-300">
                <ul>
                  <li className="flex items-center p-2 hover:bg-sky-500 hover:text-white">
                    <FiUser className="mr-2" /> <Link href="/#">Sub-opção 1</Link>
                  </li>
                  <li className="flex items-center p-2 hover:bg-sky-500 hover:text-white">
                    <FiHome className="mr-2" /> <Link href="/#">Sub-opção 2</Link>
                  </li>
                </ul>
              </div>
            )}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-500 group-hover:w-full"></span>
          </div>

          {/* Opção 4 */}
          <div
            className="relative group"
            onMouseEnter={() => toggleDropdown('option1')}
            onMouseLeave={() => toggleDropdown('option1')}
          >
            <button className="text-sky-500 hover:text-sky-700 transition duration-300 font-medium">
              Diferenciais
            </button>
            {dropdownOpen.option1 && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10 transition-all duration-300">
                <ul>
                  <li className="flex items-center p-2 hover:bg-sky-500 hover:text-white">
                    <FiHome className="mr-2" /> <Link href="/#">Sub-opção 1</Link>
                  </li>
                  <li className="flex items-center p-2 hover:bg-sky-500 hover:text-white">
                    <FiSettings className="mr-2" /> <Link href="/#">Sub-opção 2</Link>
                  </li>
                </ul>
              </div>
            )}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-500 group-hover:w-full"></span>
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
          {/* Ícone do WhatsApp ao lado do número */}
          <Link href="https://wa.me/551145083724" target="_blank" className="flex items-center text-sky-500 hover:text-sky-700 transition duration-300">
            <FaWhatsapp className="w-5 h-5 mr-1" />
            (11) 4508-3724
          </Link>

          <Link href="https://portal.nido.com.br" target="_blank" className="bg-sky-500 text-white py-3 px-6 rounded-md hover:bg-sky-600 transition duration-300">
            Portal do Cliente
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white p-6 space-y-6">
          <Link href="/#" className="font-medium text-sky-500">Início</Link>
          <Link href="/#" className="font-medium text-sky-500">Sobre nós</Link>
          <div>
            <button className="font-medium text-sky-500">Produtos</button>
            <div className="space-y-2">
              <Link href="/#" className="block font-medium text-sky-500">Sub-opção 1</Link>
              <Link href="/#" className="block font-medium text-sky-500">Sub-opção 2</Link>
            </div>
          </div>
          <div>
            <button className="font-medium text-sky-500">Diferenciais</button>
            <div className="space-y-2">
              <Link href="/#" className="block font-medium text-sky-500">Sub-opção 1</Link>
              <Link href="/#" className="block font-medium text-sky-500">Sub-opção 2</Link>
            </div>
          </div>

          <Link href="https://wa.me/551145083724" target="_blank" className="flex items-center text-sky-500 hover:text-sky-700 transition duration-300">
            <FaWhatsapp className="w-5 h-5 mr-1" />
            (11) 4508-3724
          </Link>
          <Link href="https://portal.nido.com.br" target="_blank" className="bg-sky-500 text-white py-3 px-6 rounded-md hover:bg-sky-600 transition duration-300">
            Portal do Cliente
          </Link>
        </div>
      )}
    </nav>
  );
};
