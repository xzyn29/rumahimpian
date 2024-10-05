import { Home } from "lucide-react"
import Link from "next/link"

export default function Header(){
  return(
    <header className="px-4 lg:px-6 h-14 flex items-center bg-white ">
      <Link className="flex items-center justify-center gap-4 sm:gap-6" href="/">
        <Home className="h-6 w-6"/>
        <span className="text-sm font-medium">Rumah Impian</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">Beranda</Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="/properti">Properti</Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">Tentang Kami</Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="https://wa.me/0821229944">Kontak</Link>
      </nav>
        
    </header>
  )
}