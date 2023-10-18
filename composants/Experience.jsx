export function Experience() {
  const jobs = [
    {
      title: "Développeuse full stack JS / TS / React / Node",
      company: "Wemanity , Paris",
      duration: "10-2021 - 04-2023",
      tasks: [
        "Créer des CRM",
        "Créer des API REST",
        "Effectuer des tests",
        "Créer des surfaces utilisateur avec React",
      ],
    },
    {
      title: "Développeuse full stack Nodejs / Typescript",
      company: "Projet open source, Greniers d'Abondance, Paris",
      duration: "04-2023 - 07-2023",
      lien: "https://crater.resiliencealimentaire.org",
      tasks: [
        "Travailler sur la partie front-end",
        "Développer, Maintenir et améliorer les interfaces utilisateur existantes",
      ],
    },

    {
      title: "Développeuse full stack NodeJS / NextJS / Javascript",
      company: "Projet associatif, Fermes d'Avenir, Paris",
      duration: "12-2022 - 01-2023",
      lien: "https://labonnepioche.fermesdavenir.org",
      tasks: [
        "Contribuer au design de l'application",
        "Créer un espace statistiques avec Chart.js",
        "Suivre le trafic du site",
      ],
    },
  ];

  const isLink = (text) => {
    return text.startsWith("http://") || text.startsWith("https://");
  };

  return (
    <div id="experience" className="experience">
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
