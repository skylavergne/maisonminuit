const work = [
  {
    name: "VELORA",
    desc: "Fintech brand identity & landing page"
  },
  {
    name: "NOIR LABS",
    desc: "Creative tech startup branding"
  },
  {
    name: "ATLAS STUDIO",
    desc: "Design system for venture-backed startup"
  }
];

export default function Work() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      
      <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-16">
        Selected Work
      </h2>

      <div className="space-y-16">
        {work.map((w, i) => (
          <div key={i} className="border-t pt-8">
            <h3 className="text-2xl font-light">{w.name}</h3>
            <p className="text-gray-500 mt-2">{w.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}