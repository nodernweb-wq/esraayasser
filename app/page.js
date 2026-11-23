import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <About />
        <Work />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
