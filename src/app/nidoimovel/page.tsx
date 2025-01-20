import { BannerPages } from "../components/bannersPages";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Notices } from "../noticias/components/notices";
import { CardsPage } from "./components/cardsPage";
import { Imovel } from "./components/nidoimovel";

export default function NIDOImovel() {
  return (
<main>
  <Navbar/>
    <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg" imageText="Texto"/>
  <Imovel/>
  <CardsPage/>
  <Notices numNotices={3} showPagination={false}  />
  <Footer/>
</main>
  );
}
