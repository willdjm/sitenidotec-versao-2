import { BannerPages } from "../components/bannersPages";
import { CardsPage } from "../components/cardsPage";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SitesParaImob } from "./components/sites";

export default function Sites() {
  return (
<main>
  <Navbar/>
      <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg"/>
  <SitesParaImob/>
  <CardsPage hideCards={[3]} />
  <Footer/>
</main>
  );
}
