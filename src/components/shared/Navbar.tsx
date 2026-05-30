import Link from "next/link";

export default function Navbar() {
    return (
        <header>
            <nav className="content-width flex items-center justify-between py-6 px-2">

                {/* LOGO */}
                <Link href="/" className="text-2xl font-(--font-heading)">
                    Solen
                </Link>

                {/* DESKTOP LINKS */}
                <div className="hidden">
                    <Link href="/explore">
                        Explore
                    </Link>

                    <Link href="/stories">
                        Stories
                    </Link>

                    <Link href="/support">
                        Support
                    </Link>
                </div>

                {/* MOBILE BUTTON */}
                <div className="flex gap-4 items-center">
                    <Link className="flex items-center justify-center text-(--primary)" href={"/"}>

                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <rect
                                width="30"
                                height="30"
                                x="10"
                                y="20"
                                fill="currentColor"
                            />

                            <rect
                                width="30"
                                height="30"
                                x="10"
                                y="60"
                                fill="currentColor"
                            />

                            <rect
                                width="10"
                                height="30"
                                x="60"
                                y="20"
                                fill="currentColor"
                            />

                            <rect
                                width="30"
                                height="10"
                                x="50"
                                y="30"
                                fill="currentColor"
                            />

                            <rect
                                width="30"
                                height="30"
                                x="50"
                                y="60"
                                fill="currentColor"
                            />
                        </svg>

                    </Link>

                </div>

            </nav>
        </header>
    )
}
