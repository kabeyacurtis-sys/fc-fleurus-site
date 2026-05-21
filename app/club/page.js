export default function ClubPage() {
  return (
    <div className="w-screen min-h-screen bg-black text-white overflow-x-hidden">

<section className="relative w-full min-h-screen overflow-hidden">

  {/* IMAGE DE FOND */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/hero2.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "repeat",
      width: "100%",
      height: "100%",
    }}
  ></div>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/35"></div>

  {/* CONTENU */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

    {/* BADGE */}
    <div className="border border-yellow-400 rounded-full px-8 py-3 bg-black/40 backdrop-blur-md mb-8">
      <p className="text-yellow-400 text-lg md:text-2xl uppercase tracking-[4px] font-bold">
        FC FLEURUS • DEPUIS 2026
      </p>
    </div>

    {/* TITRE */}
    <h1 className="text-6xl md:text-[120px] font-black text-white-400 leading-none mb-8 drop-shadow-[0_0_25px_rgba(255,215,0,0.7)]">
      FOOTBALL CLUB FLEURUS
    </h1>

    {/* TEXTE */}
    <p className="text-white text-2xl md:text-4xl max-w-5xl mb-12 font-semibold drop-shadow-xl">
      Du football pour tous, partout et tout le temps.
    </p>

    {/* BOUTONS */}
    <div className="flex flex-col md:flex-row gap-6">

      <a
        href="/inscription"
        className="border-2 border-white text-white hover:bg-white hover:text-black font-black text-xl px-12 py-5 rounded-2xl transition-all duration-300"
      >
        Rejoindre le club
      </a>

    </div>

  </div>

</section>

{/* ORGANIGRAMME */}

<section className="py-28 px-6 bg-zinc-950 border-t border-yellow-500/10 border-b border-yellow-500/10">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">

      <h2 className="text-5xl md:text-6xl font-black text-yellow-400 mb-8">
        Organigramme du Club
      </h2>

      <p className="text-zinc-300 text-2xl max-w-4xl mx-auto leading-10">
        Une structure ambitieuse composée d’un comité motivé,
        passionné et tourné vers le développement du club.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-10">

      {/* PRESIDENT */}
      <div className="bg-black border border-yellow-500/20 rounded-3xl p-10 text-center hover:border-yellow-400 transition-all duration-300">

        <div className="w-36 h-36 rounded-full bg-zinc-800 mx-auto mb-8 flex items-center justify-center text-6xl">
          
        </div>

        <h3 className="text-3xl font-black mb-4">
          Président
        </h3>

        <p className="text-yellow-400 text-2xl font-semibold mb-5">
          Youri Kabeya
        </p>

        <p className="text-zinc-400 text-lg break-words">
          📩 Kabeya17.fleurus@gmail.com
        </p>

      </div>

      {/* DIRECTEUR SPORTIF */}
      <div className="bg-black border border-yellow-500/20 rounded-3xl p-10 text-center hover:border-yellow-400 transition-all duration-300">

        <div className="w-36 h-36 rounded-full bg-zinc-800 mx-auto mb-8 flex items-center justify-center text-6xl">
          
        </div>

        <h3 className="text-3xl font-black mb-4">
          Directeur Sportif
        </h3>

        <p className="text-yellow-400 text-2xl font-semibold mb-5">
          Curtis Kabeya
        </p>

        <p className="text-zinc-400 text-lg break-words">
          📩 Kabeyacurtis@hotmail.fr
        </p>

      </div>
    
      {/* COMMUNICATION */}
      <div className="bg-black border border-yellow-500/20 rounded-3xl p-10 text-center hover:border-yellow-400 transition-all duration-300">

        <div className="w-36 h-36 rounded-full bg-zinc-800 mx-auto mb-8 flex items-center justify-center text-6xl">
          
        </div>

        <h3 className="text-3xl font-black mb-4">
          Communication
        </h3>

        <p className="text-yellow-400 text-2xl font-semibold mb-5">
          Rudy Fournier
        </p>

        <p className="text-zinc-400 text-lg break-words">
          📩 Rudy.fournier90@gmail.com
        </p>

      </div>

    </div>

  </div>

</section>
 
{/* CONTENU */}
<div className="space-y-14">

  <h3 className="text-4xl md:text-5xl font-black text-yellow-400 mb-12">
    Une Vision Moderne
  </h3>

  <p className="text-zinc-300 text-xl leading-[45px]">
    Le FC Fleurus nourrit une ambition claire et durable :
    devenir une référence incontournable du football régional
    en construisant un projet sportif solide, humain et ambitieux.
    Plus qu’un simple club de football, le FC Fleurus souhaite
    bâtir une véritable institution locale capable de former,
    accompagner et faire évoluer chaque joueur dans un environnement
    sain, structuré et motivant.
  </p>

  <p className="text-zinc-300 text-xl leading-[45px]">
    Au cœur du projet du club se trouve la formation des jeunes.
    Le FC Fleurus considère que l’avenir du football passe avant
    tout par le développement des talents locaux.
    Le club souhaite mettre en place une structure de formation
    moderne et cohérente où chaque joueur pourra progresser étape
    par étape grâce à un encadrement de qualité et une vision
    sportive claire.
  </p>

  <p className="text-zinc-300 text-xl leading-[45px]">
    L’encadrement représente également une priorité essentielle
    pour le FC Fleurus. Le club veut s’appuyer sur des éducateurs
    compétents, passionnés et investis capables de transmettre
    les bonnes valeurs du sport dans un cadre de travail positif.
    Le respect, la discipline, le dépassement de soi,
    l’esprit d’équipe et le plaisir du jeu font partie
    intégrante de l’identité du club.
  </p>

  <p className="text-zinc-300 text-xl leading-[45px]">
    Le FC Fleurus ambitionne aussi de développer une identité
    sportive forte et reconnaissable à travers une philosophie
    de jeu dynamique, ambitieuse et tournée vers la progression.
    Le club souhaite construire des équipes compétitives capables
    de représenter fièrement les couleurs du FC Fleurus dans
    toutes les catégories.
  </p>

  <p className="text-zinc-300 text-xl leading-[45px]">
    Mais le projet du FC Fleurus va bien au-delà du terrain.
    Le club souhaite devenir un véritable acteur de la vie locale
    et renforcer les liens avec les habitants, les familles,
    les supporters et les partenaires de la région.
    En créant une ambiance familiale, conviviale et rassembleuse,
    le FC Fleurus veut fédérer tous les passionnés autour
    d’un projet commun.
  </p>

  <p className="text-zinc-300 text-xl leading-[45px]">
    À travers différents événements et initiatives locales,
    le FC Fleurus veut développer une image moderne,
    ambitieuse et positive.
    Le soutien des bénévoles, des parents, des supporters
    et des partenaires sera essentiel afin d’assurer
    la croissance et la stabilité du projet.
  </p>

  <p className="text-zinc-300 text-xl leading-[45px]">
    Le FC Fleurus souhaite construire un avenir durable basé
    sur des fondations solides : la formation,
    le travail, la passion et l’unité.
    Avec une vision claire et une ambition assumée,
    le club veut grandir progressivement tout en restant fidèle
    à ses valeurs humaines et familiales.
  </p>

</div>

      {/* INFRASTRUCTURES */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl md:text-6xl font-black text-yellow-400 mb-8">
              Infrastructures
            </h2>

            <p className="text-zinc-300 text-2xl max-w-4xl mx-auto leading-10">
              Le FC Fleurus souhaite offrir des installations modernes et
              adaptées au développement du football.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* SITE 1 */}
            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-500/20">

              <img
                src="/terrain.jpg"
                alt="Terrain FC Fleurus"
                className="w-full h-80 object-cover"
              />

              <div className="p-10">

                <h3 className="text-3xl font-black text-yellow-400 mb-6">
                  Terrain Principal
                </h3>

                <p className="text-zinc-300 text-xl leading-9">
                  Adresse : Rue du petit try 4, à 6220 Fleurus
                </p>

              </div>

            </div>

            {/* SITE 2 */}
            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-500/20">
              
               <img
                src="/terrain1.jpg"
                alt="Terrain FC Fleurus"
                className="w-full h-80 object-cover"
               />

              <div className="p-10">

                <h3 className="text-3xl font-black text-yellow-400 mb-6">
                  Installations Sportives
                </h3>

                <p className="text-zinc-300 text-xl leading-9">
                  Adresse : Rue de Fleurjoux 56, à 6220 Fleurus
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

{/* FOOTER */}
<footer className="border-t border-zinc-800 py-10 text-center text-zinc-500 text-sm">
  © 2026 FC Fleurus • Tous droits réservés
</footer>

</div>
);
}