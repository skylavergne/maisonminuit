const services = [
  {
    title: "Brand Identity",
    desc: "Visual systems that define how your brand is seen and remembered."
  },
  {
    title: "Creative Direction",
    desc: "Coherent visual languages across digital and physical touchpoints."
  },
  {
    title: "Startup Storytelling",
    desc: "Narratives that communicate value with clarity and precision."
  },
  {
    title: "Pitch Deck Design",
    desc: "Investor-ready presentations that structure your vision."
  },
  {
    title: "Web Design",
    desc: "Clean and high-impact digital experiences for modern brands."
  }
];

export default function Services() {
  return (
    <section className="services-section" id="services">

      <div className="services-header">
        <span>SERVICES</span>
      </div>

      <div className="services-list">
        {services.map((s, i) => (
          <div key={i} className="service-item">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}