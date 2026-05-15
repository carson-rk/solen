import Link from "next/link";

export default function ActionSection() {
  return (
    <section className="section-spacing">
        <h2 className="text-3xl">
            Start where you are.
        </h2>
        <div className="grid gap-4 pt-4">
            <p>
                Support does not need to begin with a crisis. Sometimes it begins with honesty, reflection, and one small step toward clarity. Alignwell gives you a private space to start that process without pressure or judgment.
            </p>

            <div className="flex gap-4">
  
                <Link className="px-2.5 py-2.5 rounded-lg bg-(--primary) text-white" href="/sign-up">
                    Create Free Account
                </Link>

                <Link className="px-2.5 py-2.5 rounded-lg bg-(--primary) text-white" href="/explore">
                    Learn More
                </Link>
            </div>
        </div>
    </section>
  );
}