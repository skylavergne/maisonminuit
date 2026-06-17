const steps = [
  "Discovery",
  "Strategy",
  "Design",
  "Refinement",
  "Delivery"
];

export default function Process() {
  return (
    <section className="py-32 px-6 max-w-3xl mx-auto">
      
      <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-16 text-center">
        Process
      </h2>

      <div className="space-y-6 text-center">
        {steps.map((s, i) => (
          <p key={i} className="text-lg font-light">
            {i + 1}. {s}
          </p>
        ))}
      </div>

    </section>
  );
}