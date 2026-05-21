export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* IMAGE DE FOND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('/contact1.png')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* CONTENU */}
      <div className="relative z-10 py-24 px-6">

        {/* TITRE */}
        <div className="text-center mb-24">

          <h1 className="text-7xl md:text-9xl font-black text-yellow-400 uppercase mb-8">
            Contact
          </h1>

          <p className="max-w-5xl mx-auto text-2xl md:text-3xl text-zinc-300 leading-relaxed">
            Rejoignez la famille FC Fleurus et restez connecté avec toute
            l’actualité du club grâce à nos différents réseaux et moyens de contact.
          </p>

        </div>

        {/* BLOCS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-7xl mx-auto">

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/profile.php?id=61563713883247"
            target="_blank"
            className="relative group overflow-hidden rounded-2xl h-[420px]"
          >

            {/* IMAGE */}
            <img
              src="/facebook.png"
              alt="Facebook"
              className="relative group overflow-hidden rounded-2xl h-[650px]"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition duration-500"></div>

            {/* TEXTE */}
            <div className="absolute inset-0 flex items-center justify-center">

              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-white drop-shadow-2xl">
                
              </h2>

            </div>

          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/fc_fleurus"
            target="_blank"
            className="relative group overflow-hidden rounded-2xl h-[420px]"
          >

            {/* IMAGE */}
            <img
              src="/instagram.png"
              alt="Instagram"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition duration-500"></div>

            {/* TEXTE */}
            <div className="absolute inset-0 flex items-center justify-center">

              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-white drop-shadow-2xl">
                
              </h2>

            </div>

          </a>

          {/* EMAIL */}
          <a
            href="mailto:footballclubfleurus@hotmail.com"
            className="relative group overflow-hidden rounded-2xl h-[420px]"
          >

            {/* IMAGE */}
            <img
              src="/mail.png"
              alt="Email"
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition duration-500"></div>

            {/* TEXTE */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-white drop-shadow-2xl mb-6">
                
              </h2>

              <p className="text-xl md:text-2xl text-zinc-100 font-semibold break-words">
                
              </p>

            </div>

          </a>

        </div>

      </div>

    </main>
  );
}