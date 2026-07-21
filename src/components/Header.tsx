import { useEffect, useState } from "react";
import { siteContent } from "../content/siteContent";
import { siteConfig } from "../config/siteConfig";
import { BrandLogo } from "./BrandLogo";
import "./Header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`header ${scrolled ? "header--scrolled" : ""} ${menuOpen ? "header--menu-open" : ""}`}
    >
      <div className="container header__inner">
        <a href="#top" className="header__logo" aria-label={siteConfig.brandName}>
          <BrandLogo variant="primary" />
        </a>

        <nav
          id="mobile-navigation"
          className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}
          aria-label="メインナビゲーション"
        >
          <ul className="header__links">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary header__cta" onClick={() => setMenuOpen(false)}>
            まずは相談する
          </a>
        </nav>

        <button
          type="button"
          className="header__menu-btn"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
