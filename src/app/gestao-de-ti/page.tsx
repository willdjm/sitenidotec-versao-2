import { BannerPages } from "../components/bannersPages";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { GestaoTI } from "./components/gestaoDeTi";

export default function GestaoDeTI() {
  return (
<main>
  <Navbar/>
      <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg" imageText="Texto"/>
  <GestaoTI/>

  <NoticesList numNotices={3} showPagination={false}  />
  <Footer/>
</main>
  );
}
