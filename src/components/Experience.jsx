import '../styles/Experience.css';

function Experience() {
  return (
    <section id="experience">
      <div className='wrapper'>
        <h3>Experience</h3>
        <ul className="experience-list">
          <li className="experience-item">
            <h4>Zamal Collection</h4>
            <p className="position">Content Creator</p>
            <p className="duration">1 Month | 2025</p>
            <p className="description">Created engaging content for social media platforms</p>
          </li>
          <li className="experience-item">
            <h4>MA-As Shiroji</h4>
            <p className="position">Website Project</p>
            <p className="duration">4 Months | 2024</p>
            <p className="description">Developed and maintained the organization's website</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience;