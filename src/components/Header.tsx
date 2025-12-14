import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Nom */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          Oussama Ben slima
        </Link>

        {/* Navigation */}
        <ul className="flex gap-6 text-sm">
          <li>
            <Link to="/journey" className="hover:text-cyan-400 transition">
              Parcours
            </Link>
          </li>
          <li>
            <Link to="/life" className="hover:text-cyan-400 transition">
              Life
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  )
}
