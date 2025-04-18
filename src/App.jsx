import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const technologiesRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen text-neutral-300 bg-black">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-[-1]"></div>
      </div>

      {/* Sticky Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          aboutRef,
          heroRef,
          projectsRef,
          technologiesRef,
          experienceRef,
          contactRef,
        }}
      />

      {/* Page Content */}
      <div className="container mx-auto px-8 pb-24">
        <div ref={heroRef} className="scroll-mt-28">
          <Hero />
        </div>
        <div ref={aboutRef} className="scroll-mt-28">
          <About />
        </div>
        <div ref={technologiesRef} className="scroll-mt-28">
          <Technologies />
        </div>
        <div ref={experienceRef} className="scroll-mt-28">
          <Experience />
        </div>
        <div ref={projectsRef} className="scroll-mt-28">
          <Projects />
        </div>
        <div ref={contactRef} className="scroll-mt-28">
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default App;
