import { Home } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto w-full border-b">
      <div className="flex sm:flex-row justify-between items-center px-4 sm:px-8 py-4">
        <Link className="flex items-center gap-4" href="/">
          <Home className="h-6 w-6" />
          <span className="hidden sm:inline font-medium">Rumah Impian</span>
        </Link>

        <nav className="sm:mt-0 flex gap-4">
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
            href="#"
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
      </div>
    </header>
  );
}
