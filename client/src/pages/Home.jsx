import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import TechStack from "../components/sections/Skills";

const Home = () => {
  return (
    <main className="bg-[#050816] overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;