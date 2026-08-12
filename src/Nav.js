import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/" },
  { label: "Menu", to: "/" },
  { label: "Reservations", to: "/booking" },
  { label: "Order Online", to: "/" },
  { label: "Login", to: "/" },
];

function Nav({ isOpen, onNavigate }) {
  return (
    <nav className={isOpen ? "nav-links open" : "nav-links"}>
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
