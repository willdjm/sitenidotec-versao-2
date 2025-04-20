
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Clientes } from "./components/Clientes";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Nidoadm } from "./components/Nidoadm";

import { Notices } from "./components/Notices";
import { Parceiros } from "./components/Parceiros";
import { Plans } from "./components/Plans";
import { Produtos } from "./components/Produtos";
import { Testimonial } from "./components/testimonial";

export default function Home() {
  return (
<main>
  <Navbar/>
  <Banner/>

  <About/>
  <Produtos/>
  <Nidoadm/>

<Clientes/>
<Parceiros/>
<Plans/>
<Notices/>
<Testimonial/>
<Contact/>
  <Footer/>

</main>
  );
}
