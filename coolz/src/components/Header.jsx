import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow p-2 flex justify-between items-center">
      <img src="src/components/himanshuverma.png" alt="my" />

      <nav className="space-x-6 flex items-center">
        {/* Hamburger Menu Toggle (Not a Link) */}

        <Link
          to="/"
          className="p-2 text-black border border-transparent rounded-[0.4px] transition-all duration-300 hover:border-blue-500 hover:bg-blue-500"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="p-2 text-black border border-transparent rounded-[0.4px] transition-all duration-300 hover:border-blue-500 hover:bg-blue-500"
        >
          About
        </Link>
        <Link
          to="/Programs"
          className="p-2 text-black border border-transparent rounded-[0.4px] transition-all duration-300 hover:border-blue-500 hover:bg-blue-500"
        >
          Branch
        </Link>
        <Link
          to="/contact"
          className="p-2 text-black border border-transparent rounded-[0.4px] transition-all duration-300 hover:border-blue-500 hover:bg-blue-500"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
