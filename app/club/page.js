export default function ClubPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* IMAGE DE FOND */}
<div
  className="absolute inset-0 w-full h-full"
  style={{
    backgroundImage: "url('/hero2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  }}
></div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* CONTENU */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6">

          {/* BADGE */}
          <div className="border border-yellow-400 rounded-full px-4 sm:px-6 md:px-8 py-2 md:py-3 bg-black/40 backdrop-blur-md mb-6 md:mb-8">

            <p className="text-yellow-400 text-sm sm:text-lg md:text-2xl uppercase tracking-[2px] md:tracking-[4px] font-bold">
              FC FLEURUS • DEPUIS 2026
            </p>

          </div>

          {/* TITRE */}
          <h1 className="text-4xl sm:text-6xl md:text-[120px] font-black text-white leading-none mb-6 md:mb-8 drop-shadow-[0_0_25px_rgba(255,215,0,0.7)] px-2">
            FOOTBALL CLUB FLEURUS
          </h1>

          {/* TEXTE */}
          <p className="text-white text-lg sm:text-2xl md:text-4xl max-w-5xl mb-10 md:mb-12 font-semibold drop-shadow-xl px-4">
            Du football pour tous, partout et tout le temps.
          </p>

          {/* BOUTON */}
          <div className="flex flex-col md:flex-row gap-6">

            <a
              href="/inscription"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-black text-sm sm:text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-2xl transition-all duration-300"
            >
              Rejoindre le club
            </a>

          </div>

        </div>

      </section>

      {/* ORGANIGRAMME */}
      <section className="py-16 md:py-28 px-4 sm:px-6 bg-zinc-950 border-t border-yellow-500/10 border-b border-yellow-500/10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 md:mb-20">

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-yellow-400 mb-6 md:mb-8">
              Organigramme du Club
            </h2>

            <p className="text-zinc-300 text-base sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed md:leading-10 px-2">
              Une structure ambitieuse composée d’un comité motivé,
              passionné et tourné vers le développement du club.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

            {/* PRESIDENT */}
            <div className="bg-black border border-yellow-500/20 rounded-3xl p-6 md:p-10 text-center hover:border-yellow-400 transition-all duration-300">

              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-zinc-800 mx-auto mb-6 md:mb-8 flex items-center justify-center text-4xl md:text-6xl">
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">
                Président
              </h3>

              <p className="text-yellow-400 text-lg md:text-2xl font-semibold mb-4 md:mb-5">
                Youri Kabeya
              </p>

              <p className="text-zinc-400 text-sm md:text-lg break-words">
                📩 Kabeya17.fleurus@gmail.com
              </p>

            </div>

            {/* DIRECTEUR SPORTIF */}
            <div className="bg-black border border-yellow-500/20 rounded-3xl p-6 md:p-10 text-center hover:border-yellow-400 transition-all duration-300">

              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-zinc-800 mx-auto mb-6 md:mb-8 flex items-center justify-center text-4xl md:text-6xl">
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">
                Directeur Sportif
              </h3>

              <p className="text-yellow-400 text-lg md:text-2xl font-semibold mb-4 md:mb-5">
                Curtis Kabeya
              </p>

              <p className="text-zinc-400 text-sm md:text-lg break-words">
                📩 Kabeyacurtis@hotmail.fr
              </p>

            </div>

            {/* COMMUNICATION */}
            <div className="bg-black border border-yellow-500/20 rounded-3xl p-6 md:p-10 text-center hover:border-yellow-400 transition-all duration-300">

              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-zinc-800 mx-auto mb-6 md:mb-8 flex items-center justify-center text-4xl md:text-6xl">
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">
                Communication
              </h3>

              <p className="text-yellow-400 text-lg md:text-2xl font-semibold mb-4 md:mb-5">
                Rudy Fournier
              </p>

              <p className="text-zinc-400 text-sm md:text-lg break-words">
                📩 Rudy.fournier90@gmail.com
              </p>

            </div>

             {/* DIRECTEUR COMMERCIAL */}
            <div className="bg-black border border-yellow-500/20 rounded-3xl p-6 md:p-10 text-center hover:border-yellow-400 transition-all duration-300">

              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-zinc-800 mx-auto mb-6 md:mb-8 flex items-center justify-center text-4xl md:text-6xl">
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">
                Directeur Commercial
              </h3>

              <p className="text-yellow-400 text-lg md:text-2xl font-semibold mb-4 md:mb-5">
                Olivier Vande Velde
              </p>

              <p className="text-zinc-400 text-sm md:text-lg break-words">
                📩 Olivdv1@hotmail.be
              </p>

            </div>

            {/* CELLULE SPORTIVE */}
<div className="bg-black border border-yellow-500/20 rounded-3xl p-6 md:p-10 text-center hover:border-yellow-400 transition-all duration-300">

  <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-zinc-800 mx-auto mb-6 md:mb-8 flex items-center justify-center text-4xl md:text-6xl">
  </div>

  <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">
    Cellule Sportive
  </h3>

  <p className="text-yellow-400 text-lg md:text-2xl font-semibold mb-4 md:mb-5">
    Frank Vandessel
  </p>

  <p className="text-zinc-400 text-sm md:text-lg mb-2">
    Coordinateur CREO et RCA
  </p>

  <p className="text-zinc-400 text-sm md:text-lg break-words">
    📩 Frank.fleurus@outlook.be
  </p>

</div>

{/* CELLULE SPORTIVE */}
<div className="bg-black border border-yellow-500/20 rounded-3xl p-6 md:p-10 text-center hover:border-yellow-400 transition-all duration-300">

  <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-zinc-800 mx-auto mb-6 md:mb-8 flex items-center justify-center text-4xl md:text-6xl">
  </div>

  <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">
    Cellule Sportive
  </h3>

  <p className="text-yellow-400 text-lg md:text-2xl font-semibold mb-4 md:mb-5">
    Massimiliano Negro
  </p>

  <p className="text-zinc-400 text-sm md:text-lg mb-2">
    Coordinatieur
  </p>

  <p className="text-zinc-400 text-sm md:text-lg break-words">
    📩 Massimiliano@inmano.com
  </p>

</div>

          </div>

        </div>

      </section>

      {/* CONTENU */}
      <section className="py-16 md:py-24 px-4 sm:px-6">

        <div className="max-w-6xl mx-auto space-y-10 md:space-y-14">

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-400 mb-8 md:mb-12">
            Une Vision Moderne
          </h3>

          <div className="space-y-8">

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed md:leading-[45px]">
              Le FC Fleurus nourrit une ambition claire et durable :
              devenir une référence incontournable du football régional
              en construisant un projet sportif solide, humain et ambitieux.
              Plus qu’un simple club de football, le FC Fleurus souhaite
              bâtir une véritable institution locale capable de former,
              accompagner et faire évoluer chaque joueur dans un environnement
              sain, structuré et motivant.
            </p>

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed md:leading-[45px]">
              Au cœur du projet du club se trouve la formation des jeunes.
              Le FC Fleurus considère que l’avenir du football passe avant
              tout par le développement des talents locaux.
            </p>

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed md:leading-[45px]">
              L’encadrement représente également une priorité essentielle
              pour le FC Fleurus.
            </p>

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed md:leading-[45px]">
              Le FC Fleurus ambitionne aussi de développer une identité
              sportive forte et reconnaissable.
            </p>

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed md:leading-[45px]">
              Mais le projet du FC Fleurus va bien au-delà du terrain.
            </p>

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed md:leading-[45px]">
              À travers différents événements et initiatives locales,
              le FC Fleurus veut développer une image moderne,
              ambitieuse et positive.
            </p>

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed md:leading-[45px]">
              Le FC Fleurus souhaite construire un avenir durable basé
              sur des fondations solides.
            </p>

          </div>

        </div>

      </section>

      {/* INFRASTRUCTURES */}
      <section className="py-16 md:py-28 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 md:mb-20">

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-yellow-400 mb-6 md:mb-8">
              Infrastructures
            </h2>

            <p className="text-zinc-300 text-base sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed md:leading-10 px-2">
              Le FC Fleurus souhaite offrir des installations modernes et
              adaptées au développement du football.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* SITE 1 */}
            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-500/20">

              <img
                src="/terrain.jpg"
                alt="Terrain FC Fleurus"
                className="w-full h-[220px] sm:h-[300px] md:h-80 object-cover"
              />

              <div className="p-6 md:p-10">

                <h3 className="text-2xl md:text-3xl font-black text-yellow-400 mb-4 md:mb-6">
                  Terrain Principal
                </h3>

                <p className="text-zinc-300 text-base md:text-xl leading-relaxed md:leading-9">
                  Adresse : Rue du petit try 4, à 6220 Fleurus
                </p>

              </div>

            </div>

            {/* SITE 2 */}
            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-500/20">

              <img
                src="/terrain1.jpg"
                alt="Terrain FC Fleurus"
                className="w-full h-[220px] sm:h-[300px] md:h-80 object-cover"
              />

              <div className="p-6 md:p-10">

                <h3 className="text-2xl md:text-3xl font-black text-yellow-400 mb-4 md:mb-6">
                  Installations Sportives
                </h3>

                <p className="text-zinc-300 text-base md:text-xl leading-relaxed md:leading-9">
                  Adresse : Rue de Fleurjoux 56, à 6220 Fleurus
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-6 md:py-10 text-center text-zinc-500 text-xs sm:text-sm px-4">
        © 2026 FC Fleurus • Tous droits réservés
      </footer>

    </div>
  );
}