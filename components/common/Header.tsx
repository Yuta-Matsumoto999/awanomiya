import Link from "next/link"

export default function Header() {
    return (
        <header className="w-screen bg-gray-800">
            <nav className="flex items-center px-5 py-3 text-gray-400 font-bold">
                <Link href="/" className="p-3">
                    HOME
                </Link>
                <Link href="/blog" className="p-3">
                    BLOG
                </Link>
                <Link href="/news" className="p-3">
                    NEWS
                </Link>
                <Link href="/contact" className="p-3">
                    Contact
                </Link>
            </nav>
        </header>
    )
}