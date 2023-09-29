import { logos } from "../src/logos";

export function Skills() {
  return (
    <div className="skills">
      <h2>Compétences Techniques</h2>

      <h3>Front-end:</h3>
      <div className="logo-container">
        {logos
          .filter((logo) => logo.category === "Front-end")
          .map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="skill-logo"
            />
          ))}
      </div>

      <h3>Back-end:</h3>
      <div className="logo-container">
        {logos
          .filter((logo) => logo.category === "back-end")
          .map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="skill-logo"
            />
          ))}
      </div>

      <h3>Bonnes pratiques:</h3>
      <ul>
        {[
          "Refactoring",
          "Culture craft",
          "Clean code",
          "Architecture hexagonale",
          "TDD",
          "BDD",
          "Github",
          "Gitlab",
          "CI/CD",
        ].map((practice) => (
          <li key={practice}>{practice}</li>
        ))}
      </ul>

      <h3>Transversales:</h3>
      <ul>
        {[
          "Travail d'équipe et collaboration",
          " Adaptabilité",
          "Agile (Scrum, Kanban, Scrumban)",
          "Gestion du projet",
          " Autoformation ",
          "Autonomie",
          " Gestion du temps Organisée",
        ].map((transversal) => (
          <li key={transversal}>{transversal}</li>
        ))}
      </ul>

      <h3>Langues:</h3>
      <ul>
        <li>
          {" "}
          <strong>Français:</strong> Bilingue
        </li>
        <li>
          {" "}
          <strong>Anglais:</strong> Compétence professionnelle: lue et écrit
        </li>
      </ul>
    </div>
  );
}
