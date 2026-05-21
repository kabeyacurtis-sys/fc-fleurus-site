"use client";

import "./globals.css";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="fr">
      <body className="bg-black text-white overflow-x-hidden">

        {/* MENU LATERAL */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-black border-r border-yellow-500/20 z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >

          {/* HEADER MENU */}
          <div className="p-8 relative">

            {/* LOGO */}
            <img
              src="/logo cercle.png"
              alt="FC Fleurus"
              className="w-40 mx-auto mb-10"
            />

            {/* BOUTON FERMER */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 text-4xl text-white hover:text-yellow-400 transition"
            >
              ×
            </button>

            {/* MENU */}
            <div className="flex flex-col gap-7 text-xl uppercase tracking-widest">

              <a
                href="/"
                className="hover:text-yellow-400 transition"
              >
                Accueil
              </a>

              <a
                href="/club"
                className="hover:text-yellow-400 transition"
              >
                Club
              </a>

              <a
                href="/sponsors"
                className="hover:text-yellow-400 transition"
              >
                Sponsors
              </a>

              <a
                href="/inscription"
                className="hover:text-yellow-400 transition"
              >
                Inscription
              </a>

              <a
                href="/contact"
                className="hover:text-yellow-400 transition"
              >
                Contact
              </a>

            </div>

          </div>
        </div>

        {/* BOUTON MENU FIXE */}
        <button
          onClick={() => setMenuOpen(true)}
          className="fixed top-6 left-6 z-40 bg-yellow-500 hover:bg-yellow-400 text-black font-black px-5 py-3 rounded-xl shadow-2xl transition"
        >
          ☰ MENU
        </button>

        {/* CONTENU DES PAGES */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}