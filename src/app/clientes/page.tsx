import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { Clientes } from "./components/clientes";

export default function PageClientes() {
  return (
<main className="bg-zinc-50">
<Navbar/>
      <BannerPages mobileImage="/banner-clientes-mobile.png" tabletImage="/banner-clientes.png" desktopImage="/banner-clientes.png"/>
  <Clientes/>
  <Cards titleText="Faça parte você também"/>
  <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
