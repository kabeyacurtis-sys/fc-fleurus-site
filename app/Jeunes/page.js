"use client";

import { useState } from "react";

export default function EntraineursPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const equipes = [
    {
      categorie: "U6 - U7",
      photo: "/stage2.png",
    },
  {
    categorie: "U8 - U9",
    photo: "/stage2.png",
  },
  {
    categorie: "U10",
    photo: "/stage2.png",
  },
  {
    categorie: "U11",
    photo: "/stage2.png",
  },
  {
    categorie: "U12",
    photo: "/stage2.png",
  },
  {
    categorie: "U13",
    photo: "/stage2.png",
  },
  {
    categorie: "U14",
    photo: "/stage2.png",
  },
  {
    categorie: "U15",
    photo: "/stage2.png",
  },
  {
    categorie: "U16 - U17",
    photo: "/stage2.png",
  },
  {
    categorie: "U19",
    photo: "/stage2.png",
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
            NOS ÉQUIPES DE JEUNES
          </h1>

          <p className="text-zinc-200 text-lg md:text-2xl max-w-4xl mx-auto">
            Découvrez toutes les équipes de jeunes du FC Fleurus.
          </p>

        </div>

        {/* GRILLE */}
<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {equipes.map((equipe, index) => (
<div
  key={index}
  onClick={() => setSelectedImage(equipe.photo)}
  className="
    relative
    overflow-hidden
    rounded-[35px]
    border
    border-yellow-500/40
    hover:border-yellow-400
    transition-all
    duration-300
    hover:scale-105
    shadow-[0_0_20px_rgba(255,215,0,0.15)]
    cursor-pointer
  "
>

      <img
  src={equipe.photo}
  alt={equipe.categorie}
  className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover cursor-pointer"
  onClick={() => setSelectedImage(equipe.photo)}
/>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/20 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">

        <h2 className="text-2xl md:text-3xl font-black text-yellow-400 uppercase">
          {equipe.categorie}
        </h2>

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
              Nos éducateurs accompagnent chaque jeune dans son apprentissage du football, en développant ses qualités
              techniques, son esprit d'équipe et sa confiance, dans un cadre familial, respectueux et motivant.
            </p>

          </div>

        </div>

      </div>

{selectedImage && (
  <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">

    <button
      onClick={() => setSelectedImage(null)}
      className="absolute top-6 right-6 text-white text-5xl font-bold hover:text-yellow-400"
    >
      ×
    </button>

    <img
  src={selectedImage}
  alt="Équipe"
  className="
    w-[95vw]
    max-w-7xl
    h-auto
    rounded-[30px]
    border-4
    border-yellow-400
    shadow-[0_0_40px_rgba(255,215,0,0.4)]
  "
/>

  </div>
)}

    </main>
  );
}