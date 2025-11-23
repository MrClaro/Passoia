import { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo-header.png";
import icon from "../../assets/icon.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuClass = menuOpen ? "is-open" : "";

  return (
    <header>
      <img src={logo} alt="logo marca da pagina" />

      <img
        src={icon}
        alt={menuOpen ? "Fechar Menu" : "Abrir Menu"}
        className="menu-toggle"
        onClick={toggleMenu}
      />

      <ul className={menuClass}>
        <li>
          <a href="#looks" target="_self" onClick={toggleMenu}>
            LOOKS
          </a>
        </li>
        <li>
          <a href="#releases" target="_self" onClick={toggleMenu}>
            LANÇAMENTOS
          </a>
        </li>
        <li>
          <a href="#news" target="_self" onClick={toggleMenu}>
            NOVIDADES
          </a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
