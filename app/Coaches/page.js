import Image from "next/image";

export default function EntraineursPage() {
  const coaches = [
    {
      nom: "Prénom Nom",
      categorie: "U6 - U7",
      fonction: "Éducateur",
      photo: "/noir.png",
    },
    {
      nom: "Prénom Nom",
      categorie: "U8 - U9",
      fonction: "Éducateur",
      photo: "/noir.png",
    },
    {
      nom: "Prénom Nom",
      categorie: "U10",
      fonction: "Éducateur",
      photo: "/noir.png",
    },
    {
      nom: "Prénom Nom",
      categorie: "U11",
      fonction: "Éducateur",
      photo: "/noir.png",
    },
    {
      nom: "Prénom Nom",
      categorie: "U12",
      fonction: "Éducateur",
      photo: "/noir.png",
    },
    {
      nom: "Micheal Mercier",
      categorie: "U13",
      fonction: "Éducateur",
      photo: "/MichaelMercier.jpg",
    },
    {
      nom: "Prénom Nom",
      categorie: "U14",
      fonction: "Éducateur",
      photo: "/noir.png",
    },
    {
      nom: "Prénom Nom",
      categorie: "U15",
      fonction: "Éducateur",
      photo: "/noir.png",
    },
    {
      nom: "Jérémy Vanderclause",
      categorie: "U16",
      fonction: "Éducateur",
      photo: "/Jérémy.jpg",
    },
    {
      nom: "Julien Van Cauwenberghe",
      categorie: "Réserve",
      fonction: "Éducateur",
      photo: "/Julien.jpg",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* FOND */}
      <div className="fixed inset-0 -z-20">
        <img
          src="/entraineurs.png"
          alt="FC Fleurus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/75 -z-10"></div>

      {/* CONTENU */}
      <div className="relative z-10 pt-24 md:pt-36 pb-16 md:pb-24 px-4 md:px-6">

        {/* TITRE */}
        <div className="text-center mb-20">

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-yellow-400 mb-6 drop-shadow-[0_0_25px_rgba(255,215,0,0.4)]">
            NOS ÉDUCATEURS
          </h1>

          <p className="text-zinc-200 text-lg md:text-2xl max-w-4xl mx-auto">
            Découvrez l'encadrement du FC Fleurus.
            Une équipe passionnée au service de la progression de nos joueurs.
          </p>

        </div>

        {/* GRILLE */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">

          {coaches.map((coach, index) => (
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
                hover:scale-105
                transition-all
                duration-300
                shadow-[0_0_25px_rgba(255,215,0,0.15)]
              "
            >

              {/* PHOTO */}
<div className="relative h-[420px] overflow-hidden">
  <Image
    src={coach.photo}
    alt={coach.nom}
    fill
    className="object-cover object-top"
  />
</div>

              {/* INFOS */}
              <div className="p-3 md:p-5 text-center">

<p className="text-yellow-400 font-black text-xs md:text-sm mb-1 uppercase">
  {coach.categorie}
</p>

<h2 className="text-sm sm:text-base md:text-lg font-black text-white mb-1 leading-tight">
  {coach.nom}
</h2>

<p className="text-zinc-300 text-xs md:text-sm font-semibold">
  {coach.fonction}
</p>

              </div>

            </div>
          ))}

        </div>

        {/* BAS DE PAGE */}
        <div className="max-w-5xl mx-auto mt-24">

          <div className="bg-black/80 backdrop-blur-md border border-yellow-500/20 rounded-[40px] p-6 md:p-10 text-center">

            <h2 className="text-4xl font-black text-yellow-400 mb-6">
              FC FLEURUS
            </h2>

            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
              Nos éducateurs accompagnent chaque joueur dans son développement
              technique, tactique et humain dans un environnement structuré,
              familial et ambitieux.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}