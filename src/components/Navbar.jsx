import React from "react";
import logo from "../assets/bambi-logo-trans-2.png";
import { NAVIGATION_LINKS, PROFILE } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";
// Ensure you import these

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2-xl  justify-around rounded-lg gap-6 py-3 backdrop-blur-lg lg:flex">
          <a href="/">
            <h2 className="font-bold space antialiased tracking-widest">
              {PROFILE.name}
            </h2>
          </a>

          <div>
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-fuchsia-400"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={logo} width={90} alt="logo" className="m-2" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden" // Corrected class
                onClick={toggleMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block w-full text-xl font-semibold"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
