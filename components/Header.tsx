"use client"; // For using hooks like useState

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative max-w-7xl mx-auto w-full border-b-4 z-50">
      <div className="flex sm:flex-row justify-between items-center px-4 sm:px-8 py-4">
        <Link className="flex items-center gap-4" href="/">
          <Image
            src="/logo-dark.png"
            alt="logo Rumah Impian"
            width={40}
            height={40}
          />
          <span className="hidden sm:inline font-medium">Rumah Impian</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-4">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Beranda
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/properti"
          >
            Properti
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/tentang-kami"
          >
            Tentang Kami
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="https://wa.me/0821229944"
          >
            Kontak
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b z-50">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="block py-2 hover:text-gray-600">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/properti"
                  className="block py-2 hover:text-gray-600"
                >
                  Properti
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="block py-2 hover:text-gray-600"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/0821229944" className="block py-2 hover:text-gray-600">
                  Kontak
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
