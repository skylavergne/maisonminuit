export default function Hero() {
  return (
    <section className="hero">

      {/* 🎬 VIDEO DE FONDO */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/minuit.mp4" type="video/mp4" />
      </video>

      {/* 🌑 OVERLAY */}
      <div className="hero-overlay" />

      {/* 🧠 CONTENIDO */}
      <div className="hero-content">

        <h1 className="logo text-6xl md:text-8xl">
          MAISON MINUIT
        </h1>

        <p className="textp mt-6 text-sm tracking-wide">
          A visual design and communication studio for brands and companies.
        </p>

      </div>

    </section>
  );
}