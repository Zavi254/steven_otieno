import { useState, useEffect } from "react";
import brightnessIcon from "/assets/images/brightness_icon.png";
import moonIcon from "/assets/images/moon_icon.png";

const NavLinks = [
  { id: 1, name: "Work", href: "#work" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [showMenu, setShowMenu] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // Set dark mode on initial load
    document.documentElement.classList.add("dark");
    setDarkMode(true);
  }, []);

  return (
    <nav className={`text-customGray p-3 fixed left-0 top-0 right-0 z-10 lg:p-5 xl:ml-48 xl:mr-48 ${darkMode ? "bg-customBlack" : "bg-white"}`}>
      <ul className="flex items-center justify-between">
        <div>
          <a
            href="#"
            className="font-bebas dark:text-customGray text-customBlack font-bold text-3xl"
          >
            STEVEN OTIENO
          </a>
        </div>
        <button
          className="lg:hidden rounded focus:outline-none"
          onClick={toggleShowMenu}
        >
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <div
          className={`font-inter lg:bg-transparent bg-white lg:flex lg:relative lg:top-2 lg:p-0 absolute left-0 top-16 right-0 p-4 text-center transition ease-in-out ${
            showMenu ? "" : "hidden"
          }`}
        >
          {NavLinks.map((link) => (
            <li
              key={link.id}
              className="lg:mr-6 mb-5 text-black dark:text-customGray"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <div
            onClick={toggleDarkMode}
            className=" lg:block flex justify-center"
          >
            {darkMode ? (
              <img className="cursor-pointer" src={brightnessIcon} alt="" />
            ) : (
              <img className="cursor-pointer" src={moonIcon} alt="" />
            )}
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
