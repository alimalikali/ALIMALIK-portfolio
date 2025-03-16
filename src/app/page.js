import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Skills from "@/sections/Skills";
import Work from "@/sections/Work";

export default function Home() {
  return (
    <>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
    </>
  );
}
