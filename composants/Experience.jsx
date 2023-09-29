export function Experience() {
  const jobs = [
    {
      title: "Développeuse full stack JS / TS / React / Node ",
      company: "Wemanity , Paris",
      duration: "12-2021 - 07-2023",
      tasks: [
        "Créer des CRM",
        "Créer des API REST",
        "Effectuer des tests unitaires (Jest) et tests d'intégration ( Chai, Cypress)",
        "Créer des surfaces utilisateur avec React",
        "Créer des maquettes sur figma",
        // ... more tasks
      ],
    },
    // ... other jobs
  ];

  return (
    <div className="experience">
      <h2>Expériences professionnelles</h2>

      {jobs.map((job, idx) => (
        <div className="job" key={idx}>
          <h3>
            {job.title}
            <br />
            <span className="experienceCompany"> {job.company}</span>
          </h3>
          <p>{job.duration}</p>
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
