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
          className={`fixed top-0 left-0 h-full w-72 bg-black border-r border-yellow-500/30 z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >

          {/* CONTENU MENU */}
          <div className="p-8 relative h-full">

            {/* LOGO */}
            <img
              src="/logo cercle.png"
              alt="FC Fleurus"
              className="w-40 mx-auto mb-12"
            />

            {/* BOUTON FERMER */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 text-4xl text-white hover:text-yellow-400 transition"
            >
              ×
            </button>

            {/* LIENS */}
            <div className="flex flex-col gap-7 text-2xl font-black uppercase tracking-[3px]">

              <a
                href="/"
                className="text-yellow-400 hover:text-white transition duration-300"
              >
                Accueil
              </a>

              <a
                href="/club"
                className="text-yellow-400 hover:text-white transition duration-300"
              >
                Club
              </a>

              <a
                href="/sponsors"
                className="text-yellow-400 hover:text-white transition duration-300"
              >
                Sponsors
              </a>

<a
  href="/evenements"
  className="text-yellow-400 hover:text-white transition duration-300"
>
  Événements
</a>

              <a
                href="/inscription"
                className="text-yellow-400 hover:text-white transition duration-300"
              >
                Inscription
              </a>

              <a
                href="/contact"
                className="text-yellow-400 hover:text-white transition duration-300"
              >
                Contact
              </a>

            </div>

          </div>

        </div>

{/* BOUTON MENU PREMIUM */}
<button
  onClick={() => setMenuOpen(true)}
  className="
    fixed top-5 left-5 z-40
    flex items-center gap-3
    bg-black/90
    backdrop-blur-xl
    border border-yellow-400
    px-6 py-4
    rounded-2xl
    shadow-[0_0_25px_rgba(255,215,0,0.35)]
    hover:shadow-[0_0_35px_rgba(255,215,0,0.55)]
    hover:border-yellow-300
    transition-all duration-300
    hover:scale-105
  "
>

  {/* ICONE */}
  <div className="
    w-10 h-10
    rounded-xl
    bg-yellow-400
    flex items-center justify-center
    text-black
    text-xl
    font-black
    shadow-md
  ">
    ☰
  </div>

  {/* TEXTE */}
  <span className="
    text-yellow-400
    text-lg
    font-black
    uppercase
    tracking-[2px]
  ">
    Menu
  </span>

</button>

        {/* OVERLAY */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-40"
          ></div>
        )}

        {/* CONTENU */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}