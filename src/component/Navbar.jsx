import img from "../assets/img1.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";



const Navbar = () => {
  return (
  <nav className="relative   bg-transparent mb-20 flex items-center justify-between py-2 w-full">
     <div className="flex ml-20 items-center">
        <img src={img} alt="logo" className="h-12 w-auto" />
     </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
      <a
      href="https://www.linkedin.com/in/seenu-a-574398293"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkeddIn"
      className="hover:text-blue-400 transition-colors cursor-pointer"
      >
      <FaLinkedin />
      </a>
      <a
      href="https://github.com/Seenu8507"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      className="hover:text-gray-300 transition-colors cursor-pointer"
      >
       <FaGithub />
       </a>
       <a
        href="https://www.instagram.com/cho_sweet_seenu/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
       className="hover:text-pink-400 transition-colors cursor-pointer"
     >
       <FaInstagram />
     </a>
     </div>
  </nav>
  );
};

export default Navbar;
