import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SuporteTreinamento } from "./components/suporteTecnicoETreinamento";

export default function SuporteTecnicoETreinamento() {
  return (
<main>
  <Navbar/>
      <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg"/>
  <SuporteTreinamento/>
  <Cards/>
  <Footer/>
</main>
  );
}
