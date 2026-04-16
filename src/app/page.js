import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import AboutAndrew from "@/components/AboutAndrew";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Programs />
        <Testimonials />
        <AboutAndrew />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
