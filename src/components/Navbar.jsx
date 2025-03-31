import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = ({ scrollToSection, refs }) => {
  return (
    <nav className="sticky top-0 z-50 bg-neutral-950 bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-center gap-6 py-4 px-8 text-lg">
        <button onClick={() => scrollToSection(refs.heroRef)}>Home</button>
        <button onClick={() => scrollToSection(refs.aboutRef)}>About</button>
        <button onClick={() => scrollToSection(refs.technologiesRef)}>
          Technologies
        </button>
        <button onClick={() => scrollToSection(refs.experienceRef)}>
          Experience
        </button>
        <button onClick={() => scrollToSection(refs.projectsRef)}>
          Projects
        </button>
        <button onClick={() => scrollToSection(refs.contactRef)}>
          Contact
        </button>
        <a
          href="https://www.linkedin.com/in/keerthi-kolan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Keerthi-Kolan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
