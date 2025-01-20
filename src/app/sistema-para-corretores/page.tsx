import { BannerPages } from "../components/bannersPages";
import { CardsPage } from "../components/cardsPage";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SistemaParaCorretores } from "./components/sistemaParaCorretores";

export default function SistemaCorretores() {
  return (
<main>
  <Navbar/>
      <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg"/>
  <SistemaParaCorretores/>
  <CardsPage hideCards={[4]} />
  <Footer/>
</main>
  );
}
