import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { MdLocationOn, MdPhone } from 'react-icons/md';

export function Footer() {


  return (
    // Container do Footer
    <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      
<div className='mx-auto  max-w-screen-xl'>
          {/* Container para ícones de redes sociais */}
          <div className="flex items-center justify-center border-b-2 border-sky-500 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Conecte-se conosco nas redes sociais:</span>
        </div>
        <div className="flex justify-center">
          {/* Ícones de redes sociais */}
          <a href="#!" className="me-6">
            <FaFacebookF size={18} />
          </a>
          <a href="#!" className="me-6">
            <FaTwitter size={18} />
          </a>
          <a href="#!" className="me-6">
            <FaInstagram size={18} />
          </a>
          <a href="#!" className="me-6">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      {/* Container principal do Footer, contendo 4 seções */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Seção de TW Elements */}
          <div>
            <Link href='/'>
<picture className="flex justify-center md:justify-start" >
    <img src="/logo.png" alt="" className="w-64 lg:w-full" />
</picture>
</Link>

            <p className='mt-6 tracking-wide'>
            Há mais de 10 anos especializada em soluções tecnológicas para o ramo imobiliário.
            </p>
          </div>

          {/* Seção de Produtos */}
          <div>
            <h6 className="mb-4 text-sky-500 flex justify-center font-semibold uppercase md:justify-start">
              Produtos
            </h6>
            <p className="mb-4">
              <a href="#!">Sistema NIDOImóvel</a>
            </p>
            <p className="mb-4">
              <a href="#!">Sistema NIDOAdm</a>
            </p>
            <p className="mb-4">
              <a href="#!">Sites para Imobiliárias</a>
            </p>
            <p className="mb-4">
              <a href="#!">Sistema para Corretores</a>
            </p>
          </div>

          {/* Seção de Links Úteis */}
          <div>
            <h6 className="mb-4 text-sky-500 flex justify-center font-semibold uppercase md:justify-start">
              Links Úteis
            </h6>
            <p className="mb-4">
              <a href="#!">Empresa</a>
            </p>
            <p className="mb-4">
              <a href="#!">Clientes e Parceiros</a>
            </p>
            <p className="mb-4">
              <a href="#!">Notícias</a>
            </p>
            <p>
              <a href="#!">Trabalhe Conosco</a>
            </p>
          </div>

{/* Seção de Contato */}
<div>
  <h6 className="mb-4 text-sky-500 flex justify-center font-semibold uppercase md:justify-start">
    Contato
  </h6>

  {/* Endereço */}
  <p className="mb-4 flex items-center justify-center md:justify-start">
    <span className="me-3">
      {/* Ícone de Localização */}
      <MdLocationOn size={20} />
    </span>
    <a href="https://maps.app.goo.gl/1GkP8KeiDfqf2pX86" target="_blank" rel="noopener noreferrer" className="">
    Vila Clementino - SP
    </a>
  </p>

  {/* E-mail */}
  <p className="mb-4 flex items-center justify-center md:justify-start">
    <span className="me-3">
      {/* Ícone de E-mail (Escuro) */}
      <MdEmail size={20} />
    </span>
    <a href="mailto:info@example.com" className="">
      faleconosco@nido.com.br
    </a>
  </p>

  {/* Telefone */}
  <p className="mb-4 flex items-center justify-center md:justify-start">
    <span className="me-3">
      {/* Ícone de Telefone */}
      <MdPhone size={20} />
    </span>
    <a href="tel:1145083724" className="">
      + 55 (11) 4508-3724
    </a>
  </p>

  {/* WhatsApp */}
  <p className="flex items-center justify-center md:justify-start">
    <span className="me-3">
      {/* Ícone de WhatsApp */}
      <FaWhatsapp size={20} />
    </span>
    <a href="https://wa.me/5511953052059" target="_blank" rel="noopener noreferrer" className="">
      + 55 (11) 95305-2059
    </a>
  </p>
</div>

        </div>
      </div>
</div>

{/* Seção de Copyright */}
<div className="bg-sky-500/90 text-white p-6 text-center">
  <span>© {new Date().getFullYear()}</span>
  <a className="font-semibold ml-2" href="https://www.nido.com.br/">
    NIDOTEC - Hub Imobiliária
  </a>
  <span>, inc. All rights reserved.</span>
</div>

    </footer>
  );
}
