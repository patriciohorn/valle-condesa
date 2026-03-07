import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo-vc.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const leftNavItems = [
    { label: "Macroproyecto", ref: "/macroproyecto", color: "" },
    { label: "Habitacional", ref: "/habitacional", color: "" },
    { label: "Comercial", ref: "/comercial", color: "" },
  ];
  const rightNavItems = [
    { label: "Industrial", ref: "/industrial", color: "" },
    { label: "Parque Condesa", ref: "/gran-parque-condesa", color: "" },
    { label: "Contacto", ref: "/contacto", color: "" },
  ];

  const allItems = [...leftNavItems, ...rightNavItems];
  return (
    <nav className=" absolute top-0 left-0 w-full z-10 py-6 px-5 md:px-0">
      <div className="flex items-center max-w-7xl mx-auto text-white">
        {/* Desktop Left Side NavBar */}
        <ul className="hidden lg:flex lg:justify-start lg:gap-x-8 lg:flex-1">
          {leftNavItems.map((item) => (
            <li>
              <a
                href={item.ref}
                className="border-white px-5 py-2 border  hover:border-white whitespace-nowrap transition-all duration-200 ease-out rounded-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo  */}
        <div className="shrink-0">
          <a href="/">
            <img
              src={Logo.src}
              alt="logo Valle Condesa"
              className=" h-12 md:h-16 w-auto"
            />
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          id="mobile-menu-btn"
          className="lg:hidden ml-auto p-3 rounded-md hover:bg-white/30 transition-colors duration-200 cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={20} className={isOpen ? "hidden" : "flex"} />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            <div
              className="w-full min-h-screen bg-black/40 absolute inset-0"
              onClick={() => setIsOpen(!isOpen)}
            ></div>
            <div
              className={`${
                isOpen ? "translate-x-0" : "translate-x-full"
              } flex flex-col gap-y-8 bg-white shadow-md shadow-white h-screen w-3/4 px-5 py-8 absolute top-0 left-0 animate-fade-right animate-duration-200 animate-ease-linear`}
            >
              <div className="flex justify-between items-center">
                {/* Logo  */}
                <div className="shrink-0">
                  <a href="/">
                    <img
                      src={Logo.src}
                      alt="logo Valle Condesa"
                      className=" h-12 md:h-16 w-auto"
                    />
                  </a>
                </div>
                <button
                  id="mobile-menu-btn"
                  className="lg:hidden ml-auto p-3 rounded-md hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                  aria-label="Toggle menu"
                  aria-expanded="false"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <X size={20} className="w-5 h-5 text-black" />
                </button>
              </div>

              <ul>
                {allItems.map(({ label, ref }) => (
                  <li className="text-black text-lg px-2.5 py-3">
                    <a href={ref}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Right Side NavBar */}
        <ul className="hidden lg:flex lg:justify-end lg:gap-x-8 lg:flex-1 z-20">
          {rightNavItems.map((item) => (
            <li>
              <a
                href={item.ref}
                className="border-white px-5 py-2 border  hover:border-white whitespace-nowrap transition-all duration-200 ease-out rounded-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
