import { BannerPages } from "../components/bannersPages";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Notices } from "../noticias/components/notices";
import { CardsPage } from "./components/cardsPage";
import { GestaoTI } from "./components/gestaoDeTi";

export default function GestaoDeTI() {
  return (
<main>
  <Navbar/>
      <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg" imageText="Texto"/>
  <GestaoTI/>
  <CardsPage/>
  <Notices numNotices={3} showPagination={false}  />
  <Footer/>
</main>
  );
}
