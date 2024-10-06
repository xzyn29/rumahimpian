import { Home } from "lucide-react"
import Link from "next/link"

export default function Header(){
  return(
    <header className=" flex flex-col py-6 gap-2 border-b justify-between items-center max-w-7xl mx-auto w-full sm:flex-row">
      <Link className="flex items-center gap-4 sm:gap-6" href="/">
        <Home className="h-6 w-6"/>
        <span className="text-sm font-medium">Rumah Impian</span>
        
      </Link>
      <nav className="ml-auto items-center flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">Beranda</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/properti">Properti</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">Tentang Kami</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="https://wa.me/0821229944">Kontak</Link>
      </nav>
        
    </header>
  )
}