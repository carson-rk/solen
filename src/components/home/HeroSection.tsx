import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="section-spacing grid gap-4">
      <div className="content-width">
        <h1 className="text-4xl leading-tight max-w-3xl">
          Overwhelmed? Support That Adapts To You
        </h1>
      </div>

      <p className="text-xl max-w-2xl">
        A private space to pause, reflect,
        and find clarity.
      </p>

      <div className="flex gap-4">
        <Link
          className="px-2.5 py-2.5 rounded-lg bg-(--primary) text-white"
          href="/reflect"
        >
          Start Reflection
        </Link>

        <Link
          className="px-2.5 py-2.5 rounded-lg bg-(--primary) text-white"
          href="/support"
        >
          How It Works
        </Link>
      </div>
    </section>
  );
}