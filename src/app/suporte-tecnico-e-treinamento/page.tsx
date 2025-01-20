import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SuporteTreinamento } from "./components/suporteTecnicoETreinamento";

export default function SuporteTecnicoETreinamento() {
  return (
<main>
  <Navbar/>
      <BannerPages mobileImage="/banner-treinamento.png" tabletImage="/banner-treinamento.png" desktopImage="/banner-treinamento.png"/>
  <SuporteTreinamento/>
  <Cards/>
  <Footer/>
</main>
  );
}
