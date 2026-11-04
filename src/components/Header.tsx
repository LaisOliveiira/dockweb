
"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="container header-content">
        <a href="#inicio" className="logo" onClick={closeMenu}>
          <span className="logo-mark">DW</span>
          <span>
            Dock<span>Web</span>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contato"
            className="mobile-contact"
            onClick={closeMenu}
          >
            Solicitar orçamento <ArrowUpRight size={16} />
          </a>
        </nav>

        <a href="#contato" className="header-button desktop-contact">
          Solicitar orçamento <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
