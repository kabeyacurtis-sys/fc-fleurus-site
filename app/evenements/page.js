export default function EvenementsPage() {
  const events = [
    {
      titre: "Programme d'entrainement FC Fleurus",
      date: "10 août 2026",
      description:
        "Les entraînements du FC Fleurus reprendront dès le 10 août 2026. Rejoignez-nous pour une saison placée sous le signe du football, de la progression, du plaisir et de la passion, pour les jeunes.",
      image: "/stage2.png",
      lien: "/evenements/programmes-entrainements",
    },
    {
      titre: "Programme d'entrainement FC Fleurus",
      date: "10 août 2026",
      description:
        "Une semaine de football, jeux collectifs et perfectionnement pour les jeunes de 6 à 17 ans.",
      image: "/stage1.png",
      lien: "/evenements/stage-aout",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

{/* PHOTO DE FOND */}
<div className="fixed inset-0 -z-20">
  <img
    src="/evenement.png"
    alt="FC Fleurus"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>

      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/70 -z-10"></div>

      {/* CONTENU */}
      <div className="relative z-10 pt-40 pb-20 px-6">

        <div className="w-full max-w-[1400px] mx-auto">

          {/* TITRE */}
          <div className="text-center mb-20">

            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-yellow-400 mb-6 drop-shadow-[0_0_25px_rgba(255,215,0,0.5)]">
              ÉVÉNEMENTS
            </h1>

            <p className="text-zinc-200 text-lg md:text-2xl max-w-4xl mx-auto">
              Retrouvez tous les événements organisés par le FC Fleurus.
            </p>

          </div>

          {/* GRILLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

            {events.map((event, index) => (
              <div
                key={index}
                className="
                  bg-black/85
                  backdrop-blur-md
                  rounded-3xl
                  overflow-hidden
                  border
                  border-yellow-500/30
                  hover:border-yellow-400
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  shadow-[0_0_35px_rgba(255,215,0,0.15)]
                "
              >

                {/* IMAGE */}
<img
  src={event.image}
  alt={event.titre}
  className="w-full h-64 md:h-80 object-cover"
/>

                {/* TEXTE */}
                <div className="p-8">

                  <p className="text-yellow-400 font-bold mb-3 text-lg">
                    {event.date}
                  </p>

                  <h2 className="text-4xl font-black mb-4">
                    {event.titre}
                  </h2>

                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {event.description}
                  </p>

                  <a
                    href={event.lien}
className="
inline-block
mt-8
bg-white
text-black
font-black
px-8
py-4
rounded-2xl
hover:bg-yellow-400
hover:text-black
transition-all
duration-300
"
                  >
                    En savoir plus
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}