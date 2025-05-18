import data from './../assets/Data.json';
import { useState } from 'react';
import './../styles/style.css';





const ProjectSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? data : data.slice(0, 4);

  return (
    <section className="my-projects">
      <h2>My Projects</h2>
      <ul className="projects-list">
        {visibleProjects.map((project) => (
          <li key={project.id} className="project-card">
            <img src={project.cover} alt={project.title} className="cover-img" />
            <div className="text-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </li>
        ))}
      </ul>

      {data.length > 4 && (
        <div className="see-more-container">
          <button className="see-more" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'See less' : 'See more'}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;

