import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-scroll";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 backdrop-blur-sm p-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <img
            src="/logo.png"
            alt="Logo"
            height={40}
            width={40}
          />
          <nav className="hidden md:flex gap-6">
            <Link to="main" smooth={true} duration={500} className="cursor-pointer hover:text-zinc-500">
              Home
            </Link>
            <Link to="areas" smooth={true} duration={500} className="cursor-pointer hover:text-zinc-500">
              Áreas
            </Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-zinc-500">Contato</Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-zinc-500">
              Sobre
            </Link>
          </nav>
          <div className="md:hidden">
            <IconMenu2
              className="cursor-pointer h-5 w-5 md:hidden text-black/60 items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <div
              className={`absolute xl:hidden top-24 left-0 w-full flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              } bg-zinc-100`}
              style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
            >
              <Link to="main" smooth={true} duration={500} className="cursor-pointer">
                Home
              </Link>
              <Link to="areas" smooth={true} duration={500} className="cursor-pointer">
                Áreas
              </Link>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contato</Link>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer">
                Sobre
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ver detalhes deste menu responsivo
