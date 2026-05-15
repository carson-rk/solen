import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="section-spacing">
            <div className="pt-4">
                <h2 className="text-3xl">
                Support That Adapts
                </h2>
            </div>
            <div className="pt-4 flex flex-col gap-4 items-center">
                <p>
                Alignwell is a guided support system designed to help students and young people understand where they are emotionally and what kind of support may help them move forward. Through peer connection, guided reflection, anonymous check-ins, curated support content, and counselor referral pathways, the platform helps users navigate difficult seasons with more clarity and less isolation.
                </p>
    
                <Link className="px-2.5 py-2.5 rounded-lg bg-(--primary) text-white" href="/support">
              Explore Alignwell
                </Link>
             </div>
        </section>
    );
}