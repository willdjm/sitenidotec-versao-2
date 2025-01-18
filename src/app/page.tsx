import { Banner } from "./components/banners";
import { Cards } from "./components/cards";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Notices } from "./components/notices";

export default function Home() {
  return (
<main>
  <Navbar/>
  <Banner/>
  <Cards/>
  <Notices/>
  <Footer/>
</main>
  );
}
