import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="bg-sky-500 lg:py-20 py-12">
      <div className="max-w-screen-xl px-4 mx-auto lg:px-0">
        <div className="grid grid-cols-1 gap-6 lg:gap-16 lg:grid-cols-4 text-center lg:text-left">
          {/* Logo e Descrição */}
          <div className="flex flex-col gap-4 text-white items-center lg:items-start">
            <picture>
              <img src="/logonovo.png" alt="logo" />
            </picture>
            <p className="lg:text-justify">
              Há mais de 32 anos especializada em soluções tecnológicas para o ramo imobiliário.
            </p>
          </div>

          {/* Links de navegação */}
          <div className="grid grid-cols-1 lg:gap-5 gap-14 lg:col-span-3 sm:grid-cols-2 lg:grid-cols-4 items-center lg:items-start">
            {/* Institucional */}
            <div>
              <p className="text-lg text-white font-semibold uppercase">Institucional</p>
              <nav className="flex flex-col mt-4 space-y-4 text-base text-gray-300 items-center lg:items-start">
                <Link href="/#Inicio">Início</Link>
                <Link href="/#Inicio">Sobre nós</Link>
                <Link href="/#Inicio">Depoimentos</Link>
                <Link href="/#Inicio">Blog</Link>
              </nav>
            </div>

            {/* Produtos */}
            <div>
              <p className="text-lg text-white font-semibold uppercase">Produtos</p>
              <nav className="flex flex-col mt-4 space-y-4 text-base text-gray-300 items-center lg:items-start">
                <Link href="/#Inicio">Sistema NIDOImóvel</Link>
                <Link href="/#Inicio">Sistema NIDOAdm</Link>
                <Link href="/#Inicio">Site Para Imobiliárias</Link>
                <Link href="/#Inicio">Sistema para Corretores</Link>
              </nav>
            </div>

            {/* Descubra mais */}
            <div>
              <p className="text-lg text-white font-semibold uppercase">Descubra mais</p>
              <nav className="flex flex-col mt-4 space-y-4 text-base text-gray-300 items-center lg:items-start">
                <Link href="/#Inicio">Nossos Planos</Link>

                <Link href="/#Inicio">Nossos Clientes</Link>
                <Link href="/#Inicio">Parceiros NIDOTec</Link>
                <Link href="/#Inicio">Ofertas Especiais</Link>

              </nav>
            </div>

            {/* Contatos */}
            <div>
              <p className="text-lg text-white font-semibold uppercase">Contatos</p>
              <nav className="flex flex-col mt-4 space-y-4 text-base text-gray-300 items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <a href="https://wa.me/5511953052059" target="_blank" rel="noopener noreferrer">
                    +55 11 95305-2059
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <a href="mailto:contato@nido.com.br">
                    contato@nido.com.br
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start text-center lg:text-left">
                  <a href="https://maps.app.goo.gl/1GkP8KeiDfqf2pX86" target="_blank" rel="noopener noreferrer">
                    Rua Machado Bitencourt, 205 Conj 96 - Vila Clementino, São Paulo - 04044-904
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Separador */}
      <hr className="border-gray-200 my-8 w-full" />

      {/* Ícones sociais + Copyright */}
      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="flex justify-center gap-4 flex-wrap">
          {/* WhatsApp */}
          <a className="hover:opacity-75" href="https://wa.me/5511953052059" target="_blank" rel="noreferrer">
            <button className="bg-[#25D366] text-white p-2 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors">
              <FaWhatsapp className="text-xl sm:text-2xl" />
            </button>
          </a>

          {/* Instagram */}
          <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-colors">
              <FaInstagram className="text-xl sm:text-2xl" />
            </button>
          </a>

          {/* Facebook */}
          <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
            <button className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
              <FaFacebookF className="text-xl sm:text-2xl" />
            </button>
          </a>

          {/* LinkedIn */}
          <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
            <button className="bg-blue-700 text-white p-2 rounded-full shadow-lg hover:bg-blue-800 transition-colors">
              <FaLinkedinIn className="text-xl sm:text-2xl" />
            </button>
          </a>

          {/* X (Twitter) */}
          <a className="hover:opacity-75" href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
            <button className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-black transition-colors">
              <FaXTwitter className="text-xl sm:text-2xl" />
            </button>
          </a>

          {/* YouTube */}
          <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
            <button className="bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors">
              <FaYoutube className="text-xl sm:text-2xl" />
            </button>
          </a>
        </div>

        <div className="flex items-center justify-center text-white text-center px-4">
          <Link href="https://www.nido.com.br/" className="text-sm">
            © {new Date().getFullYear()} NIDOTEC - Hub Imobiliária - All rights reserved.
          </Link>
        </div>
      </div>
    </footer>
  );
};
