import { explainProcess } from "@/data/explore/explain";

export default function ExplainSection() {
    return (
        <section>
            <h2>
                A Simpler Way to Navigate Emotional Weight
            </h2>
            
            <p>
                Alignwell works like a weather station. It does not define who you are. It simply helps you understand the emotional conditions you may be moving through so you can respond with more clarity and less isolation.
            </p>

            <div>
                {explainProcess.map((process) => (
                    <article key={process.step}>
                        <h3>{process.step}</h3>
                        <p>{process.summary}</p>
                        <p>{process.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}