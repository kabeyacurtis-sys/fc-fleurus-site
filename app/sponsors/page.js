export default function SponsorsPage() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-black text-white">

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* CONTENU */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 py-14 md:py-20">

        {/* TITRE PRINCIPAL */}
        <div className="text-center mb-16 md:mb-28">

          <p className="text-yellow-400 uppercase tracking-[3px] md:tracking-[6px] font-bold mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
            Partenaires Officiels
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase mb-6 md:mb-8 leading-tight">
            Sponsors du Club
          </h1>

          <p className="max-w-5xl mx-auto text-zinc-300 text-base sm:text-lg md:text-2xl leading-relaxed px-2">
            Cette page est entièrement dédiée aux partenaires et sponsors
            qui accompagnent le FC Fleurus dans son développement.
            Découvrez les entreprises et marques qui soutiennent le projet du club
            ainsi que les différentes collaborations officielles.
          </p>

        </div>

        {/* SECTION SPONSOR PRINCIPAL */}
        <section className="mb-20 md:mb-32">

          <div className="text-center mb-10 md:mb-20">

            <p className="text-yellow-400 uppercase tracking-[3px] md:tracking-[5px] font-bold mb-3 md:mb-4 text-sm sm:text-base md:text-lg">
              Sponsor Principal
            </p>

            <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-6 md:mb-8 leading-tight">
              Football Club de Fleurus
            </h2>

          </div>

          {/* IMAGE COMPLETE */}
          <div className="w-full flex justify-center">

            <img
              src="/URSPORT.png"
              alt="Sponsors FC Fleurus"
              className="w-full max-w-[1800px] rounded-2xl md:rounded-3xl object-cover border-2 md:border-4 border-yellow-500 shadow-[0_0_50px_rgba(234,179,8,0.25)]"
            />

          </div>

        </section>

{/* SECTION EQUIPEMENTIER */}
<section className="mt-24 md:mt-36">

  {/* TITRE */}
  <div className="text-center mb-12 md:mb-20">

    <p className="text-yellow-400 uppercase tracking-[3px] md:tracking-[6px] font-bold mb-4 text-sm md:text-lg">
      Équipementier Officiel
    </p>

    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-6 leading-tight">
      UR SPORTS
    </h2>

    <p className="max-w-5xl mx-auto text-zinc-300 text-base sm:text-lg md:text-2xl leading-relaxed px-2">
      Le FC Fleurus est fier d’annoncer son partenariat officiel avec
      UR Sports en tant qu’équipementier du club pour les 2 prochaines saisons.
      Cette collaboration permettra au club de proposer une gamme moderne,
      élégante et performante destinée aux joueurs, staffs et supporters.
    </p>

  </div>

  {/* LOGO */}
  <div className="flex justify-center mb-10 md:mb-14">

    <div className="w-[95px] h-[95px] md:w-[130px] md:h-[130px] bg-zinc-900 border border-yellow-500/20 rounded-2xl p-2 flex items-center justify-center">

      <img
        src="/equipementier.png"
        alt="UR Sports"
        className="w-full h-full object-contain rounded-xl"
      />

    </div>

  </div>

  {/* GRID PHOTOS */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">

    {/* PHOTO 1 */}
    <div className="aspect-square bg-zinc-900 border border-yellow-500/20 rounded-2xl p-3 flex items-center justify-center">
      <img
        src="/maillotdom.png"
        alt="Maillot domicile"
        className="w-full h-full object-contain"
      />
    </div>

    {/* PHOTO 2 */}
    <div className="aspect-square bg-zinc-900 border border-yellow-500/20 rounded-2xl p-3 flex items-center justify-center">
      <img
        src="/maillotext.png"
        alt="Maillot extérieur"
        className="w-full h-full object-contain"
      />
    </div>

    {/* PHOTO 3 */}
    <div className="aspect-square bg-zinc-900 border border-yellow-500/20 rounded-2xl p-3 flex items-center justify-center">
      <img
        src="/training.png"
        alt="Training"
        className="w-full h-full object-contain"
      />
    </div>

    {/* PHOTO 4 */}
    <div className="aspect-square bg-zinc-900 border border-yellow-500/20 rounded-2xl p-3 flex items-center justify-center">
      <img
        src="/pull.png"
        alt="Pull"
        className="w-full h-full object-contain"
      />
    </div>

    {/* PHOTO 5 */}
    <div className="aspect-square bg-zinc-900 border border-yellow-500/20 rounded-2xl p-3 flex items-center justify-center">
      <img
        src="/polo.png"
        alt="Polo"
        className="w-full h-full object-contain"
      />
    </div>

    {/* PHOTO 6 */}
    <div className="aspect-square bg-zinc-900 border border-yellow-500/20 rounded-2xl p-3 flex items-center justify-center">
      <img
        src="/veste.png"
        alt="Veste"
        className="w-full h-full object-contain"
      />
    </div>

    {/* PHOTO 7 */}
    <div className="aspect-square bg-zinc-900 border border-yellow-500/20 rounded-2xl p-3 flex items-center justify-center">
      <img
        src="/sac.png"
        alt="Sac"
        className="w-full h-full object-contain"
      />
    </div>

    {/* PHOTO 8 */}
    <div className="aspect-square bg-zinc-900 border border-yellow-500/20 rounded-2xl p-3 flex items-center justify-center">
      <img
        src="/ballon.png"
        alt="Ballon"
        className="w-full h-full object-contain"
      />
    </div>

  </div>

</section>

      </div>

    </main>
  );
}