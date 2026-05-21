export default function Page() {
  return (
    <main className="relative w-full h-screen overflow-hidden">

      {/* IMAGE */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/travaux.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "repeat",
      width: "100%",
      height: "100%",
    }}
  ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

    </main>
  );
}