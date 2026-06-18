import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OCurso from "@/components/OCurso";
import PorQueParticipar from "@/components/PorQueParticipar";
import Programa from "@/components/Programa";
import CorpoDocente from "@/components/CorpoDocente";
import ParaQuemE from "@/components/ParaQuemE";
import DataLocal from "@/components/DataLocal";
import Inscricao from "@/components/Inscricao";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OCurso />
        <PorQueParticipar />
        <Programa />
        <CorpoDocente />
        <ParaQuemE />
        <DataLocal />
        <Inscricao />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
