export default function ContactPage() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden text-white">

      {/* IMAGE DE FOND */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('/contact1.png')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* CONTENU */}
      <div className="relative z-10 py-14 md:py-24 px-4 sm:px-6">

        {/* TITRE */}
        <div className="text-center mb-14 md:mb-24">

          <h1 className="text-4xl sm:text-6xl md:text-9xl font-black text-yellow-400 uppercase mb-6 md:mb-8">
            Contact
          </h1>

          <p className="max-w-5xl mx-auto text-base sm:text-xl md:text-3xl text-zinc-300 leading-relaxed px-2">
            Rejoignez la famille FC Fleurus et restez connecté avec toute
            l’actualité du club grâce à nos différents réseaux et moyens de contact.
          </p>

        </div>

   {/* BLOCS */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto items-stretch">

  {/* FACEBOOK */}
  <a
    href="https://www.facebook.com/profile.php?id=61563713883247"
    target="_blank"
    className="relative group rounded-2xl bg-black overflow-hidden h-[320px] flex items-center justify-center border border-yellow-500/20"
  >

    {/* IMAGE */}
    <img
      src="/facebook.png"
      alt="Facebook"
      className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-500"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500"></div>

  </a>

  {/* INSTAGRAM */}
  <a
    href="https://instagram.com/fc_fleurus"
    target="_blank"
    className="relative group rounded-2xl bg-black overflow-hidden h-[320px] flex items-center justify-center border border-yellow-500/20"
  >

    {/* IMAGE */}
    <img
      src="/instagram.png"
      alt="Instagram"
      className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-500"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500"></div>

  </a>

  {/* EMAIL */}
  <a
    href="mailto:footballclubfleurus@hotmail.com"
    className="relative group rounded-2xl bg-black overflow-hidden h-[320px] flex items-center justify-center border border-yellow-500/20"
  >

    {/* IMAGE */}
    <img
      src="/mail.png"
      alt="Email"
      className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-500"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500"></div>

  </a>

</div>

      </div>

    </main>
  );
}