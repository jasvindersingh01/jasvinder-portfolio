// src/pages/Home.jsx

import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";

const Home = () => {
  return (
    <main className="bg-[#050816] overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default Home;