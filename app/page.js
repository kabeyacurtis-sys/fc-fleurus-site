export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden text-white">

      {/* IMAGE DE FOND */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/acceuil.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* EFFET LUMIÈRE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>

      {/* HEADER */}
      <header className="relative z-20 w-full absolute top-0 left-0">

        {/* MENU */}
        <nav className="hidden md:flex w-full justify-center items-center gap-10 lg:gap-16 py-8 lg:py-10 text-2xl lg:text-3xl font-black uppercase tracking-[4px] text-white backdrop-blur-sm px-4">

          <a
            href="/"
            className="text-white hover:text-yellow-400 transition duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          >
            Accueil
          </a>

          <a
            href="/club"
            className="text-white hover:text-yellow-400 transition duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          >
            Club
          </a>

          <a
            href="/galerie"
            className="text-white hover:text-yellow-400 transition duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          >
            Galerie
          </a>

          <a
            href="/contact"
            className="text-white hover:text-yellow-400 transition duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          >
            Contact
          </a>

          <a
            href="/sponsors"
            className="text-white hover:text-yellow-400 transition duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          >
            Sponsors
          </a>

          <a
            href="/inscription"
            className="text-white hover:text-yellow-400 transition duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          >
            Inscription
          </a>

        </nav>

      </header>

      {/* CONTENU PRINCIPAL */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 md:px-6">

        {/* BADGE */}
        <div className="mb-8 md:mb-10 border-2 border-yellow-400 bg-black/50 backdrop-blur-xl px-5 md:px-10 py-3 md:py-4 rounded-full shadow-[0_0_40px_rgba(255,215,0,0.4)]">

          <p className="text-yellow-400 text-sm sm:text-lg md:text-3xl uppercase tracking-[2px] md:tracking-[6px] font-black">
            FC FLEURUS • DEPUIS 2026
          </p>

        </div>

        {/* SOUS TITRE */}
        <h2 className="mt-4 md:mt-6 text-2xl sm:text-4xl md:text-5xl font-bold text-white px-2">

          Plus qu’un club, une famille.

        </h2>

        {/* TEXTE */}
        <p className="mt-6 md:mt-8 max-w-5xl text-base sm:text-xl md:text-3xl text-zinc-200 leading-relaxed px-4">

          Du football pour tous, partout et tout le temps.

        </p>

        {/* BOUTONS */}
        <div className="mt-10 md:mt-16 flex flex-col md:flex-row gap-5 md:gap-8 w-full md:w-auto px-4">

          <a
            href="/club"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base sm:text-xl md:text-2xl px-8 md:px-14 py-4 md:py-6 rounded-3xl transition-all duration-300 shadow-[0_0_40px_rgba(255,215,0,0.5)] hover:scale-105 text-center"
          >
            Découvrir le club
          </a>

          <a
            href="/inscription"
            className="border-2 border-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-black text-white font-black text-base sm:text-xl md:text-2xl px-8 md:px-14 py-4 md:py-6 rounded-3xl transition-all duration-300 text-center"
          >
            Rejoindre le club
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="absolute bottom-0 left-0 w-full z-20 border-t border-yellow-500/20 bg-black/60 backdrop-blur-md py-4 md:py-6 text-center text-zinc-300 text-sm md:text-lg px-4">

        © 2026 FC Fleurus • Tous droits réservés

      </footer>

    </main>
  );
}