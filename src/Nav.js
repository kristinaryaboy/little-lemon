import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Reservations", to: "/booking" },
  { label: "Order Online", to: "/order" },
  { label: "Login", to: "/login" },
];

function Nav({ isOpen, onNavigate }) {
  return (
    <nav
      id="main-nav"
      aria-label="Main navigation"
      className={isOpen ? "nav-links open" : "nav-links"}
    >
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} onClick={onNavigate}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
