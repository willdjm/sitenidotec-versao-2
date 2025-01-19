import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Notices } from "../components/notices";
import { CardsPage } from "./components/cardsPage";
import { SitesParaImob } from "./components/sites";

export default function Sites() {
  return (
<main>
  <Navbar/>
  <SitesParaImob/>
  <CardsPage/>
  <Notices numNotices={4} />
  <Footer/>
</main>
  );
}
