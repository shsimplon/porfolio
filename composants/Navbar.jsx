import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="#about-me">À propos</a>
        </li>
        <li>
          <a href="#skills">Compétences</a>
        </li>
        <li className="dropdown" onClick={() => setIsOpen(!isOpen)}>
          Plus
          {isOpen && (
            <div className="overlay" onClick={toggleModal}>
              <ul className="dropdown-content">
                <li>
                  <a href="#experience">Expériences</a>
                </li>
                <li>
                  <a href="#education">Éducation</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
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
