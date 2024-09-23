export function Education() {
  const courses = [
    {
      title: "Concepteur développeur d’applications web et mobile",
      place: "Simplon, Montreuil",
      year: "09-2021",
    },
    // ... other courses
    {
      title: " Développeur web et web mobile",
      place: "Simplon, Montreuil",
      year: "09-2020",
    },

    // {
    //   title: "Master microbiologie fondamentale et appliquée ",
    //   place: "UBO, Brest",
    //   year: "07-2014 ",
    // },
  ];

  return (
    <div id="education" className="education">
      <h2>Diplomes et Formations</h2>

      {courses.map((course, idx) => (
        <div className="course" key={idx}>
          <h3>{course.title}</h3>
          <p>
            {course.place}, {course.year}
          </p>
        </div>
      ))}
    </div>
  );
}
