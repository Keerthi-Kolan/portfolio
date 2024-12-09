import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 position:sticky">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/keerthi-kolan/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Keerthi-Kolan">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
