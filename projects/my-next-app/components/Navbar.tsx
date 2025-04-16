import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="font-bold text-lg">Min Webbplats</h1>
            <div className="flex gap-4">
                <Link href="/">Hem</Link>
                <Link href="/about">Om oss</Link>
                <Link href="/contact">Kontakt</Link>
            </div>
        </nav>
    );
}
