import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/TopBar.css";

export default function TopBar() {
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-container">
        <h2 onClick={() => nav("/")} className="logo">
          SOS Transpaletes
        </h2>

        {/* Botão hamburguer */}
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav links */}
        <nav className={`topbar-nav ${menuOpen ? "show" : ""}`}>
          <Link to="/pallet" onClick={() => setMenuOpen(false)}>
            Paleteira
          </Link>
          <Link to="/forklift" onClick={() => setMenuOpen(false)}>
            Empilhadeira
          </Link>
          <Link to="/history" onClick={() => setMenuOpen(false)}>
            Histórico
          </Link>
        </nav>
      </div>
    </header>
  );
}
