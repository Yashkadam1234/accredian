"use client";

import { useState, useEffect } from "react";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["programs", "benefits", "how", "testimonials"];
  const active = useActiveSection(sections);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "stats", label: "Stats", href: "#stats" },
    { id: "client", label: "Clients", href: "#clients" },
    { label: "Edge", href: "#features" },
    { id: "cta", label: "CTA", href: "#cta" },
    { label: "How it works", href: "#how" },
    { id: "faq", label: "FAQ", href: "#faq" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "bg-white"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#" className="text-xl font-semibold text-gray-900">
              accredian<span className="text-blue-600">.</span>
            </a>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`relative text-sm font-medium transition ${active === link.id
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                      }`}
                  >
                    {link.label}

                    {/* Active underline */}
                    {active === link.id && (
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="btn-primary text-sm"
              >
                Enquire Now
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition ${menuOpen ? "visible" : "invisible"
          }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transition-transform ${menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="p-6">

            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={() => setMenuOpen(false)}>✕</button>
            </div>

            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-base ${active === link.id
                        ? "text-blue-600 font-medium"
                        : "text-gray-700"
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-8 block text-center btn-primary"
            >
              Enquire Now
            </a>

          </div>
        </div>
      </div>
    </>
  );
}