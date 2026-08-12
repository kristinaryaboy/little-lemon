import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/Logo1.jpg";
import Nav from "./Nav";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <button
        className="hamburger"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <Link to="/" className="logo">
        <img src={logo} alt="Little Lemon logo" />
      </Link>

      <Nav isOpen={menuOpen} onNavigate={() => setMenuOpen(false)} />

      <button className="cart" aria-label="Basket">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      </button>
    </header>
  );
}

export default Header;
