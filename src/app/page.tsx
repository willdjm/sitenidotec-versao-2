import { Banner } from "./components/banners";
import { Cards } from "./components/cards";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { NoticesList } from "./noticias/components/noticiasLista";

export default function Home() {
  return (
<main>
  <Navbar/>
  <Banner/>
      <Cards showTitle={false}/>
  <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
