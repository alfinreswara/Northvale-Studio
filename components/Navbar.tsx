"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className={`site-header${isScrolled || isOpen ? " is-scrolled" : ""}`}>
        <a className="wordmark" href="#top" aria-label="Northvale Studio home">Northvale</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="nav-cta" href="mailto:hello@northvale.studio">Start a Project <span aria-hidden="true">↗</span></a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span>{isOpen ? "Close" : "Menu"}</span>
        </button>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
          >
            <nav aria-label="Mobile navigation">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.08 + index * 0.06 }}
                >
                  <span>0{index + 1}</span>{link.label}
                </motion.a>
              ))}
            </nav>
            <a className="mobile-contact" href="mailto:hello@northvale.studio">hello@northvale.studio <span aria-hidden="true">↗</span></a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
