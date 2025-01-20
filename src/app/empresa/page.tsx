import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { About } from "./components/empresa";

export default function Empresa() {
  return (
<main>
  <Navbar/>
  <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg"/>
  <About/>
  <Cards/>
  <NoticesList numNotices={3} showPagination={false}  />
  <Footer/>
</main>
  );
}
