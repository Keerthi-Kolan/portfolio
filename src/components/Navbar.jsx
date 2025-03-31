import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ scrollToSection, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", ref: refs.heroRef },
    { label: "About", ref: refs.aboutRef },
    { label: "Technologies", ref: refs.technologiesRef },
    { label: "Experience", ref: refs.experienceRef },
    { label: "Projects", ref: refs.projectsRef },
    { label: "Contact", ref: refs.contactRef },
  ];

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false); // close menu after click on mobile
  };

  return (
    <nav className="sticky top-0 z-50 bg-neutral-950 bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <div className="hidden md:flex gap-6 text-lg">
          <a
            href="https://www.linkedin.com/in/keerthi-kolan/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Keerthi-Kolan"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-lg">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(item.ref)}
              className="hover:text-cyan-400 transition"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 pb-4 md:hidden text-lg">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(item.ref)}
              className="hover:text-cyan-400 transition"
            >
              {item.label}
            </button>
          ))}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/keerthi-kolan/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Keerthi-Kolan"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
