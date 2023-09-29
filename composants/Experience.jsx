export function Experience() {
  const jobs = [
    {
      title: "Développeuse full stack JS / TS / React / Node",
      company: "Wemanity , Paris",
      duration: "12-2021 - 07-2023",
      tasks: [
        "Créer des CRM",
        "Créer des API REST",
        "Effectuer des tests unitaires (Jest) et tests d'intégration ( Chai, Cypress)",
        "Créer des surfaces utilisateur avec React",
        "Créer des maquettes sur figma",
      ],
    },
    {
      title: "Développeuse full stack Nodejs / Typescript",
      company: "Greniers d'Abondance (projet Crater) , Paris",
      duration: "02-2023 - 07-2023",
      lien: "https://crater.resiliencealimentaire.org",
      tasks: [
        "Travailler sur la partie front-end",
        "Développement d'un site full LitJS/VueJS",
        "Développer, Maintenir et améliorer les interfaces utilisateur existantes",
      ],
    },

    {
      title: "Développeuse full stack NodeJS / NextJS/ Javascript",
      company: "Fermes d'Avenir, Paris",
      duration: "10-2022 - 01-2023",
      lien: "https://labonnepioche.fermesdavenir.org",
      tasks: [
        "Contribuer au design de l'application",
        "Créer un espace statistiques avec Chart.js",
        " Suivre le trafic du site",
      ],
    },
  ];

  const isLink = (text) => {
    return text.startsWith("http://") || text.startsWith("https://");
  };

  return (
    <div className="experience">
      <h2>Expériences professionnelles</h2>

      {jobs.map((job, idx) => (
        <div className="job" key={idx}>
          <h3>
            {job.title}
            <br />
            <span className="experienceCompany">{job.company}</span>
          </h3>
          <p>{job.duration}</p>
          {job.lien && isLink(job.lien) ? (
            <p>
              <a href={job.lien} target="_blank" rel="noopener noreferrer">
                {job.lien}
              </a>
            </p>
          ) : null}

          <ul>
            {job.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
