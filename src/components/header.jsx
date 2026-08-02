import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Studio", path: "/studio" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-lg">
      <nav className="max-w-350 mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          {/* Logo Box */}
          <div className="w-11 h-11 border border-white/50 bg-white/90 flex items-center justify-center">
            <span className="text-xl font-bold tracking-tighter text-black">
              C
            </span>
          </div>

          {/* Logo Text */}
          <div className="leading-none">
            <h1 className="text-black font-bold tracking-[0.15em] text-sm">
              CENTRIC
            </h1>

            <p className="text-black text-[9px] tracking-[0.3em] mt-1">
              DESIGN STUDIO
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden lg:flex items-center gap-x-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`whitespace-nowrap text-sm font-medium transition duration-300 ${isActive
                    ? "text-[#E8A72B]"
                    : "text-black hover:text-[#E8A72B]"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* ================= DESKTOP CTA ================= */}
        <Link
          to="/contact"
          className="hidden lg:flex items-center gap-3 bg-amber-500 hover:text-white hover:bg-black  text-black px-5 py-3 text-sm font-semibold transition duration-300"
        >
          START A PROJECT
          <ArrowRight size={16} />
        </Link>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#111111] border-t border-white/10 transition-all duration-300 ${menuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
          }`}
      >
        <div className="px-6 py-7">

          {/* Mobile Navigation */}
          <div className="flex flex-col">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={`py-4 border-b border-white/10 text-base transition ${isActive
                      ? "text-[#E8A72B]"
                      : "text-white hover:text-[#E8A72B]"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-6 flex items-center justify-center gap-3 bg-amber-500 text-black px-5 py-4 font-semibold text-sm hover:bg-white transition"
          >
            START A PROJECT
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;