import { processSteps } from "@/data/home/process";

export default function ProcessSection() {
  return (
    <section className="section-spacing">
      <h2 className="text-3xl">
        How It Works
      </h2>

      <div className="grid gap-4 pt-4">
        {processSteps.map((step) => (
          <article key={step.step}>
            <h3>{step.step}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}