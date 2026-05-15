import {issues} from "@/data/home/issues";

export default function PainSection() {
  return (
    <section className="section-spacing">
      <h2 className="text-3xl">
        Not Everything Heavy Looks Loud
      </h2>

      <p className="pt-4">
        Many people carry emotional weight quietly.
      </p>

      <div className="grid gap-4 pt-4">
        {issues.map((issue) => (
          <article key={issue.title}>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}