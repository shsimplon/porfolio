import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeBurger = () => {
    setIsBurgerOpen(false);
  };

  return (
    <nav className="navbar">
      <div
        className="burger-menu"
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
      >
        ☰
      </div>

      <ul className={`nav-list ${isBurgerOpen ? "open" : ""}`}>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="#about-me" onClick={closeBurger}>
            À propos
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeBurger}>
            Compétences
          </a>
        </li>
        <li className="dropdown" onClick={() => setIsOpen(!isOpen)}>
          Plus
          {isOpen && (
            <div className="overlay" onClick={toggleModal}>
              <ul className="dropdown-content">
                <li>
                  <a href="#experience" onClick={closeBurger}>
                    Expériences
                  </a>
                </li>
                <li>
                  <a href="#education" onClick={closeBurger}>
                    Éducation
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={closeBurger}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
