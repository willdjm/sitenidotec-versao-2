import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { About } from "./components/empresa";

export default function Empresa() {
  return (
<main className="bg-zinc-50">
<Navbar/>
  <BannerPages mobileImage="/banner-empresa.png" tabletImage="/banner-empresa.png" desktopImage="/banner-empresa.png"/>
  <About/>
  <Cards/>
  <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
