import Link from "next/link";

export default function HeroSection() {
    return (
        <section>
            <p>
                A guided support space for students and young people
            </p>

            <h1>
                Support That Meets You Where You Are
            </h1>

            <p>
                Not every difficult season needs the same kind of support. Alignwell helps you understand what you may be carrying and where to move next.
            </p>

            <Link href="/reflect">
                Start Reflection
            </Link>
        </section>
    )
}