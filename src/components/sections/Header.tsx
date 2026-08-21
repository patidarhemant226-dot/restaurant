"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Arrow } from "../ui/Arrow";

const navItems = ["Menu", "Cuisines", "Our Story", "Experience", "Gallery"];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mediterra home">Mediterra<span>®</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#top">Home</a>{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>)}
        </nav>
        <a className="header-cta" href="#reserve">Reserve a table <Arrow /></a>
        <button type="button" className="menu-toggle" aria-label="Toggle navigation" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}><span /><span /></button>
      </header>
      <AnimatePresence>{mobileOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} aria-label="Mobile navigation">
        <a href="#top" onClick={closeMobileMenu}>Home</a>{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={closeMobileMenu}>{item}</a>)}
        <a className="mobile-reserve" href="#reserve" onClick={closeMobileMenu}>Reserve a table <Arrow /></a>
      </motion.nav>}</AnimatePresence>
    </>
  );
}
