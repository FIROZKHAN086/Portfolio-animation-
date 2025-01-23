import React, { useEffect } from "react";
import { gsap } from "gsap";

function Nav() {
  useEffect(() => {
    // GSAP animation for nav bar fade-in on load
    gsap.fromTo(
      ".navbar",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <nav
      className="navbar bg-zinc-800 bg-opacity-70 backdrop-blur-md fixed w-screen text-white py-4 px-8 flex justify-between items-center z-50 shadow-lg"
    >
      <div className="text-2xl font-bold text-red-500">LOGO</div>
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#home" className="hover:text-orange-500">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-orange-500">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-orange-500">
            About me
          </a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-orange-500">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-orange-500">
            Contact me
          </a>
        </li>
      </ul>
      <a
        href="mailto:firozkhan192006@gmail.com"
        className="bg-orange-500 text-black py-2 px-4 rounded-lg hover:bg-orange-600"
      >
        Hire Me
      </a>
    </nav>
  );
}

export default Nav;
