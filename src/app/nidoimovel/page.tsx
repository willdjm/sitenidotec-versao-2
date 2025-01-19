import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Notices } from "../components/notices";
import { CardsPage } from "./components/cardsPage";
import { Imovel } from "./components/nidoimovel";

export default function NIDOImovel() {
  return (
<main>
  <Navbar/>
  <Imovel/>
  <CardsPage/>
  <Notices numNotices={4} />
  <Footer/>
</main>
  );
}
