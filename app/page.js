"use client";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* IMAGE DE FOND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/acceuil.png')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* EFFET LUMIÈRE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>

      {/* HEADER */}
      <header className="relative z-20 w-full absolute top-0 left-0">

        {/* MENU */}
        <nav className="w-full flex justify-center items-center gap-16 py-10 text-2xl md:text-3xl font-black uppercase tracking-[4px] text-white backdrop-blur-sm">

          <a
            href="/club"
            className="hover:text-yellow-400 transition duration-300"
          >
            Club
          </a>

          <a
            href="/galerie"
            className="text-yellow-400 hover:text-white transition duration-300"
          >
            Galerie
          </a>

          <a
            href="/contact"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </a>

          <a
            href="/sponsors"
            className="text-yellow-400 hover:text-white transition duration-300"
          >
            Sponsors
          </a>

          <a
            href="/inscription"
            className="hover:text-yellow-400 transition duration-300"
          >
            Inscription
          </a>

        </nav>

      </header>

      {/* CONTENU PRINCIPAL */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">

        {/* BADGE */}
        <div className="mb-10 border-2 border-yellow-400 bg-black/50 backdrop-blur-xl px-10 py-4 rounded-full shadow-[0_0_40px_rgba(255,215,0,0.4)]">

          <p className="text-yellow-400 text-2xl md:text-3xl uppercase tracking-[6px] font-black">
            FC FLEURUS • DEPUIS 2026
          </p>

        </div>

        {/* SOUS TITRE */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">

          Plus qu’un club, une famille.

        </h2>

        {/* TEXTE */}
        <p className="mt-8 max-w-5xl text-xl md:text-3xl text-zinc-200 leading-relaxed">

          Du football pour tous, partout et tout le temps.

        </p>

        {/* BOUTONS */}
        <div className="mt-16 flex flex-col md:flex-row gap-8">

          <a
            href="/club"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-2xl px-14 py-6 rounded-3xl transition-all duration-300 shadow-[0_0_40px_rgba(255,215,0,0.5)] hover:scale-105"
          >
            Découvrir le club
          </a>

          <a
            href="/inscription"
            className="border-2 border-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-black text-white font-black text-2xl px-14 py-6 rounded-3xl transition-all duration-300"
          >
            Rejoindre le club
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="absolute bottom-0 left-0 w-full z-20 border-t border-yellow-500/20 bg-black/60 backdrop-blur-md py-6 text-center text-zinc-300 text-lg">

        © 2026 FC Fleurus • Tous droits réservés

      </footer>

    </main>
  );
}