"use client";

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
  href="#inscription"
  className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-sm sm:text-lg md:text-xl px-8 md:px-12 py-3 md:py-5 rounded-2xl transition-all duration-300 shadow-[0_0_25px_rgba(255,215,0,0.4)] hover:scale-105"
>
  M'INSCRIRE AU STAGE
</a>

          </div>

        </div>

      </section>

      {/* REPRISE */}
<section className="py-20 px-6">

  <div className="max-w-6xl mx-auto bg-zinc-900 rounded-3xl p-10 text-center border border-yellow-400">

    <h2 className="text-5xl font-black text-yellow-400 mb-6">
      REPRISE DES ENTRAÎNEMENTS
    </h2>

    <p className="text-2xl font-bold text-white">
      Lundi 10 août 2026
    </p>

    <p className="text-zinc-300 text-lg mt-4">
      Découvrez ci-dessous les horaires officiels de toutes les catégories du FC Fleurus.
    </p>

  </div>

</section>

{/* HORAIRES */}
<section className="bg-zinc-950 py-20 px-6">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-center text-5xl font-black text-yellow-400 mb-12">
      HORAIRES DES ENTRAÎNEMENTS
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="bg-zinc-900 rounded-3xl p-8">
        <h3 className="text-yellow-400 text-3xl font-black mb-4">U7</h3>
        <p>Mardi : 17h30 - 18h45</p>
        <p>Jeudi : 17h30 - 18h45</p>
        <p>Match : Samedi 10h00</p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8">
        <h3 className="text-yellow-400 text-3xl font-black mb-4">U8</h3>
        <p>Mardi : 17h30 - 18h45</p>
        <p>Jeudi : 17h30 - 18h45</p>
        <p>Match : Samedi 10h00</p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8">
        <h3 className="text-yellow-400 text-3xl font-black mb-4">U10</h3>
        <p>Mercredi : 17h30 - 18h45</p>
        <p>Vendredi : 17h30 - 18h45</p>
        <p>Match : Samedi 10h00</p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8">
        <h3 className="text-yellow-400 text-3xl font-black mb-4">U12</h3>
        <p>Mardi : 17h30 - 18h45</p>
        <p>Jeudi : 17h30 - 18h45</p>
        <p>Match : Dimanche 11h30</p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8">
        <h3 className="text-yellow-400 text-3xl font-black mb-4">U13</h3>
        <p>Mercredi : 17h30 - 18h45</p>
        <p>Vendredi : 17h30 - 18h45</p>
        <p>Match : Dimanche 11h30</p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8">
        <h3 className="text-yellow-400 text-3xl font-black mb-4">U14</h3>
        <p>Mercredi : 18h45 - 20h00</p>
        <p>Vendredi : 18h45 - 20h00</p>
        <p>Match : Dimanche 09h30</p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8">
        <h3 className="text-yellow-400 text-3xl font-black mb-4">U16</h3>
        <p>Mardi : 18h45 - 20h00</p>
        <p>Jeudi : 17h30 - 18h45</p>
        <p>Match : Samedi 14h00</p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8">
        <h3 className="text-yellow-400 text-3xl font-black mb-4">Réserve</h3>
        <p>Mardi : 20h00 - 21h30</p>
        <p>Jeudi : 19h00 - 20h30</p>
        <p>Match : Samedi 16h30</p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8">
        <h3 className="text-yellow-400 text-3xl font-black mb-4">P4</h3>
        <p>Mardi : 20h00 - 21h30</p>
        <p>Jeudi : 20h00 - 21h30</p>
        <p>Match : Samedi 20h00</p>
      </div>

    </div>

  </div>

</section>

{/* GARDIENS & SPÉCIFIQUE */}
<section className="py-20 px-6">

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

    <div className="bg-zinc-900 rounded-3xl p-8">
      <h3 className="text-yellow-400 text-2xl font-black mb-4">
        Gardiens Groupe 1
      </h3>

      <p>Mercredi</p>
      <p>17h30 - 18h45</p>
      <p>U8 - U10 - U12</p>
    </div>

    <div className="bg-zinc-900 rounded-3xl p-8">
      <h3 className="text-yellow-400 text-2xl font-black mb-4">
        Gardiens Groupe 2
      </h3>

      <p>Mercredi</p>
      <p>18h45 - 20h00</p>
      <p>U13 - U14 - U16</p>
    </div>

    <div className="bg-zinc-900 rounded-3xl p-8">
      <h3 className="text-yellow-400 text-2xl font-black mb-4">
        Spécifique Technique
      </h3>

      <p>Mercredi : 18h45 - 20h00</p>
      <p>Vendredi : 17h30 - 18h45</p>
    </div>

  </div>

</section>

{/* COTISATION */}
<section className="py-20 px-6">

  <div className="max-w-5xl mx-auto bg-yellow-400 text-black rounded-3xl p-12 text-center">

    <h2 className="text-4xl font-black mb-8">
      COTISATION SAISON 2026 - 2027
    </h2>

    <p className="text-5xl font-black mb-8">
      350 €
    </p>

    <div className="space-y-4 text-xl font-bold">

      <p>
        ✅ Acompte de <span className="font-black">150 €</span> à payer avant le
        <span className="font-black"> 15 juillet 2026</span>
      </p>

      <p>
        ✅ Solde restant de <span className="font-black">200 €</span> à payer
        avant le <span className="font-black">15 août 2026</span>
      </p>

      <div className="mt-8 bg-black/10 rounded-2xl p-6">

        <p className="text-2xl font-black mb-3">
          Compte bancaire
        </p>

        <p className="text-3xl font-black mb-4">
          BE93 9640 1087 7567
        </p>

        <p className="text-lg font-bold">
          Communication :
        </p>

        <p className="text-lg">
          Nom + prénom + année de naissance de l'enfant
        </p>

      </div>

      <p className="mt-8 text-lg">
        Les équipements et packs du club seront remis uniquement après le paiement complet de la cotisation.
      </p>

    </div>

  </div>

</section>

{/* FORMULAIRE */}
<section
  id="inscription"
  className="bg-zinc-950 py-20 px-6"
>

  <div className="max-w-4xl mx-auto">

    <h2 className="text-center text-5xl font-black text-yellow-400 mb-12">
      INSCRIPTION AU STAGE
    </h2>

       {/* FORMULAIRE */}
<form
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = {
      type: e.target.type.value,
      nom: e.target.Nom.value,
      prenom: e.target.Prenom.value,
      date: e.target.Date.value,
      email: e.target.Email.value,
      adresse: e.target.Adresse.value,
      telephone: e.target.Telephone.value,
      demande: e.target.Demandes.value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const message = document.getElementById("success-message");

      message.classList.remove("hidden");

      setTimeout(() => {
        message.classList.add("hidden");
      }, 8000);

      e.target.reset();
    }
  }}

              className="space-y-8 md:space-y-10 max-w-3xl mx-auto"
          >

            {/* NOM */}
            <div className="flex flex-col gap-3">

              <label className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
                Nom :
              </label>

              <input
                type="text"
                name="Nom"
                placeholder="Votre nom"
                required
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
                required
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
                required
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
                required
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
                required
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
                required
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 md:px-6 py-4 md:py-5 text-white text-base md:text-xl focus:outline-none focus:border-yellow-400"
              />

            </div>

{/* type de demande */}
<div className="flex flex-col gap-3">

  <label className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
    Type de demande :
  </label>

  <select
    name="type"
    required
    className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-6 py-5 text-white"
  >
    <option value="">Choisir</option>
    <option value="Affiliation">Affiliation</option>
    <option value="Stage">Stage</option>
    <option value="Renseignement">Renseignement</option>
  </select>

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
<div className="text-center pt-4 md:pt-6 flex flex-col items-center gap-6">

  <button
    type="submit"
    className="
      bg-black
      text-yellow-400
      font-black
      text-lg sm:text-xl md:text-2xl
      px-10 md:px-14
      py-4 md:py-5
      rounded-2xl
      border-2 border-yellow-400
      shadow-[0_0_20px_rgba(255,215,0,0.4)]
      hover:bg-yellow-400
      hover:text-black
      transition-all duration-300
      hover:scale-105
    "
  >
    Valider la demande
  </button>

<div
  id="success-message"
  className="
    hidden
    fixed
    inset-0
    z-[9999]
    flex
    items-center
    justify-center
    bg-black/70
    backdrop-blur-sm
  "
>

  <div
    className="
      bg-yellow-400
      text-black
      max-w-xl
      mx-6
      p-10
      rounded-3xl
      border-4
      border-white
      text-center
      shadow-[0_0_80px_rgba(255,215,0,0.8)]
    "
  >

    <h2 className="text-3xl md:text-5xl font-black mb-6">
      ✅ INSCRIPTION ENVOYÉE
    </h2>

    <p className="text-lg md:text-2xl font-semibold leading-relaxed">
      Votre demande d'inscription a bien été enregistrée.
      <br />
      Le FC Fleurus vous contactera prochainement.
    </p>

  </div>

</div>

</div>

</form>

</div>

</section>

</div>
  );
}