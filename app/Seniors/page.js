export default function EquipeAPage() {
const staff = [
  {
    nom: "Carlo Settembrino",
    fonction: "Entraîneur Adjoint",
    photo: "/noir.png",
  },
  {
    nom: "Rino Varrichio",
    fonction: "Entraîneur Principal",
    photo: "/noir.png",
  },
  {
    nom: "Michael",
    fonction: "Délégué de l'équipe",
    photo: "/noir.png",
  },
];

  const joueurs = [
    { nom: "Philippe Laire", poste: "Gardien", photo: "/noir.png" },
    { nom: "Aissa Somja", poste: "Défenseur", photo: "/noir.png" },
    { nom: "Sinan Okur", poste: "Défenseur", photo: "/noir.png" },
    { nom: "Quentin Chassagne", poste: "Défenseur", photo: "/noir.png" },
    { nom: "Roman", poste: "Défenseur", photo: "/noir.png" },
    { nom: "Mirko", poste: "Défenseur", photo: "/noir.png" },
    { nom: "Noa Cannoletta", poste: "Défenseur", photo: "/noir.png" },
    { nom: "Amine Alhajli", poste: "Milieu", photo: "/noir.png" },
    { nom: "Tresor Touan", poste: "Milieu", photo: "/noir.png" },
    { nom: "Andrea Camellotto", poste: "Milieu", photo: "/noir.png" },
    { nom: "Randy Kabeya", poste: "Attaquant", photo: "/noir.png" },
    { nom: "Alexis Pulido", poste: "Attaquant", photo: "/noir.png" },
    { nom: "Joseph Diedhou", poste: "Attaquant", photo: "/noir.png" },
    { nom: "Jonathan Capitte", poste: "Attaquant", photo: "/noir.png" },
    { nom: "Alessio Cilluffo", poste: "Attaquant", photo: "/noir.png" },
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

      <div className="fixed inset-0 bg-black/80 -z-10"></div>

      <div className="relative z-10 pt-24 md:pt-36 pb-16 md:pb-24 px-4 md:px-6">

        {/* TITRE */}
        <div className="text-center mb-20">

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-yellow-400 mb-6 drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]">
            ÉQUIPE A
          </h1>

          <p className="text-zinc-200 text-lg md:text-2xl max-w-4xl mx-auto">
            Découvrez le staff et les joueurs de l'équipe première du FC Fleurus.
          </p>

        </div>

        {/* STAFF */}
        <div className="max-w-7xl mx-auto mb-24">

          <h2 className="text-4xl font-black text-yellow-400 text-center mb-12">
            STAFF TECHNIQUE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {staff.map((membre, index) => (
<div
  key={index}
  className="
    relative
    overflow-hidden
    rounded-[35px]
    border
    border-yellow-500/50
    bg-black
    hover:scale-105
    transition-all
    duration-300
    shadow-[0_0_20px_rgba(255,215,0,0.15)]
  "
>

  <img
    src={membre.photo}
    alt={membre.nom}
    className="w-full h-[220px] sm:h-[260px] md:h-[320px] object-cover"
  />

  {/* Ombre pour rendre le texte lisible */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

  {/* Texte sur la photo */}
  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">

    <p className="text-yellow-400 font-black text-xs sm:text-sm uppercase mb-2">
      {membre.fonction}
    </p>

    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-black leading-tight">
      {membre.nom}
    </h3>

  </div>

</div>
))}

          </div>

        </div>

        {/* JOUEURS */}
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-black text-yellow-400 text-center mb-12">
            EFFECTIF
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">

{joueurs.map((joueur, index) => (
  <div
    key={index}
    className="
overflow-hidden
rounded-[35px]
border
border-yellow-500/50
bg-black/95
hover:scale-105
transition-all
duration-300
shadow-[0_0_20px_rgba(255,215,0,0.15)]
"
  >

    {/* PHOTO */}
<img
  src={joueur.photo}
  alt={joueur.nom}
  className="w-full h-[170px] sm:h-[190px] md:h-[220px] object-cover"
/>

    {/* INFOS */}
<div className="bg-black px-4 py-5 text-center">

  <p className="text-yellow-400 font-black text-[10px] sm:text-xs md:text-sm mb-2 uppercase">
    {joueur.poste}
  </p>

  <h3 className="text-white text-sm sm:text-base md:text-lg font-black leading-tight">
    {joueur.nom}
  </h3>

</div>

  </div>
))}

          </div>

        </div>

      </div>

    </main>
  );
}