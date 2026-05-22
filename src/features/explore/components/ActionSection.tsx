import Link from "next/link"

export default function ActionSection() {
    return (
        <section>
            <h2>
            You Do Not Need to Figure Everything Out Alone
            </h2>

            <p>
                Sometimes clarity begins with a pause. Alignwell helps you slow down long enough to understand what you are carrying and where support might help most.
            </p>

            <Link href="/reflect">
                Begin Reflection
            </Link>
            <Link href="/auth">
                Create Free Account
            </Link>
        </section>
    )
}