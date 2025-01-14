import Contact from "@/components/Contact";
import Expertree from "@/components/Expertree";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Expertree />
      <Contact />
      <Footer />
    </>
  );
}
