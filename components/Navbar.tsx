"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <a className="wordmark" href="#top" aria-label="Northvale Studio home">Northvale<small>Studio</small></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <a className="nav-cta" href="mailto:hello@northvale.studio">Start a Project <span aria-hidden="true">↗</span></a>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="menu-button" type="button" aria-label="Open navigation menu">
            Menu <Menu size={16} aria-hidden="true" />
          </button>
        </SheetTrigger>
        <SheetContent className="mobile-menu" showCloseButton={false} aria-describedby={undefined}>
          <div className="mobile-menu-heading">
            <SheetTitle className="mobile-menu-title">Northvale Studio</SheetTitle>
            <SheetClose asChild><button className="menu-close" type="button" aria-label="Close navigation menu"><X size={20} aria-hidden="true" /></button></SheetClose>
          </div>
          <nav aria-label="Mobile navigation">
            {links.map((link, index) => (
              <SheetClose asChild key={link.href}>
                <a href={link.href}><span aria-hidden="true">0{index + 1}</span>{link.label}</a>
              </SheetClose>
            ))}
          </nav>
          <SheetClose asChild>
            <a className="mobile-contact" href="mailto:hello@northvale.studio">hello@northvale.studio <span aria-hidden="true">↗</span></a>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </header>
  );
}
