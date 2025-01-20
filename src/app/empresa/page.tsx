import { BannerPages } from "../components/bannersPages";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Notices } from "../noticias/components/notices";
import { CardsPage } from "./components/cardsPage";
import { About } from "./components/empresa";

export default function Empresa() {
  return (
<main>
  <Navbar/>
  <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg" imageText="Texto"/>
  <About/>
  <CardsPage/>
  <Notices numNotices={3} showPagination={false}  />
  <Footer/>
</main>
  );
}
