"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
            <ul className="flex gap-6 text-lg">
                <li><Link href="/">Hem</Link></li>
                <li><Link href="/about">Om oss</Link></li>
                <li><Link href="/contact">Kontakt</Link></li>
            </ul>
        </nav>
    );
}
