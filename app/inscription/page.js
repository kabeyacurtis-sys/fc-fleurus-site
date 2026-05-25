export default function ClubPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative w-full min-h-screen overflow-hidden">

        {/* IMAGE DE FOND */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/inscription.png')",
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
          <h1 className="text-4xl sm:text-6xl md:text-[120px] font-black text-yellow-400 leading-none mb-6 md:mb-8 drop-shadow-[0_0_25px_rgba(255,215,0,0.7)] px-2">
            Football Club FLEURUS
          </h1>

          {/* TEXTE */}
          <p className="text-white text-lg sm:text-2xl md:text-4xl max-w-5xl mb-10 md:mb-12 font-semibold drop-shadow-xl px-4">
            Du football pour tous, partout et tout le temps.
          </p>

          {/* BOUTON */}
          <div className="mt-6 md:mt-10">

            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-black text-sm sm:text-lg md:text-xl px-8 md:px-12 py-3 md:py-5 rounded-2xl transition-all duration-300"
            >
              Contact
            </a>

          </div>

        </div>

      </section>

      {/* FORMULAIRE */}
      <section
        id="formulaire"
        className="relative py-14 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-black to-zinc-950"
      >

        <div className="max-w-5xl mx-auto bg-zinc-900/70 border border-yellow-500/20 rounded-3xl p-6 sm:p-8 md:p-16 backdrop-blur-md shadow-2xl">

          {/* TITRE */}
          <div className="text-center mb-10 md:mb-16">

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-yellow-400 mb-4 md:mb-6">
              Inscription FC Fleurus
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2">
              Complétez le formulaire ci-dessous afin d’inscrire un joueur au sein du club.
            </p>

          </div>

          {/* FORMULAIRE */}
          <form
            action="https://formsubmit.co/footballclubfleurus@hotmail.com"
            method="POST"
            className="space-y-8 md:space-y-10 max-w-3xl mx-auto"
          >

            {/* CONFIG MAIL */}
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="hidden"
              name="_subject"
              value="Nouvelle inscription FC Fleurus"
            />

            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/inscription"
            />

            {/* NOM */}
            <div className="flex flex-col gap-3">

              <label className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
                Nom :
              </label>

              <input
                type="text"
                name="Nom"
                placeholder="Votre nom"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 md:px-6 py-4 md:py-5 text-white text-base md:text-xl focus:outline-none focus:border-yellow-400"
              />

            </div>

            {/* PRENOM */}
            <div className="flex flex-col gap-3">

              <label className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
                Prénom :
              </label>

              <input
                type="text"
                name="Prenom"
                placeholder="Votre prénom"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 md:px-6 py-4 md:py-5 text-white text-base md:text-xl focus:outline-none focus:border-yellow-400"
              />

            </div>

            {/* DATE */}
            <div className="flex flex-col gap-3">

              <label className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
                Date de naissance :
              </label>

              <input
                type="text"
                name="Date"
                placeholder="jj/mm/aaaa"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 md:px-6 py-4 md:py-5 text-white text-base md:text-xl focus:outline-none focus:border-yellow-400"
              />

            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-3">

              <label className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
                Adresse e-mail :
              </label>

              <input
                type="email"
                name="Email"
                placeholder="Votre adresse e-mail"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 md:px-6 py-4 md:py-5 text-white text-base md:text-xl focus:outline-none focus:border-yellow-400"
              />

            </div>

            {/* ADRESSE */}
            <div className="flex flex-col gap-3">

              <label className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
                Adresse du domicile :
              </label>

              <input
                type="text"
                name="Adresse"
                placeholder="Votre adresse complète"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 md:px-6 py-4 md:py-5 text-white text-base md:text-xl focus:outline-none focus:border-yellow-400"
              />

            </div>

            {/* TELEPHONE */}
            <div className="flex flex-col gap-3">

              <label className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
                Numéro de téléphone :
              </label>

              <input
                type="text"
                name="Telephone"
                placeholder="+32 ..."
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 md:px-6 py-4 md:py-5 text-white text-base md:text-xl focus:outline-none focus:border-yellow-400"
              />

            </div>

            {/* DEMANDES */}
            <div className="flex flex-col gap-3">

              <label className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
                Demandes particulières :
              </label>

              <textarea
                rows="6"
                name="Demandes"
                placeholder="Écrivez ici vos demandes ou informations supplémentaires..."
                className="w-full bg-zinc-950 border border-zinc-700 rounded-3xl px-4 md:px-6 py-4 md:py-6 text-white text-base md:text-xl resize-none focus:outline-none focus:border-yellow-400"
              ></textarea>

            </div>

{/* BOUTON */}
<div className="text-center pt-4 md:pt-6 flex justify-center">

              <button
               type="submit"
               className="bg-white hover:bg-zinc-100 text-black font-black text-lg sm:text-xl md:text-2xl px-10 md:px-14 py-4 md:py-5 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105 border-2 border-white flex items-center justify-center min-w-[260px]"
               >
              <span className="text-black">
      Valider la demande
                </span>
              </button>

            </div>

          </form>

        </div>

      </section>

    </div>
  );
}