import '../styles/Experience.css';

function Experience() {
  const experienceData = [
    {
      title: "Content Creator",
      company: "Zamal Collection",
      duration: "2025",
      description: "Creating engaging content for social media platforms."
    },
  ];

  return (
    <section id="experience">
      <div className='wrapper'>
        <h3>Experience</h3>
        <ul className="experience-list">
          {experienceData.map((job, index) => (
            <li className="experience-item" key={index}>
              <h4>{job.title}</h4>
              <p className="position">{job.company}</p>
              <p className="duration">{job.duration}</p>
              <p className="description">{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;