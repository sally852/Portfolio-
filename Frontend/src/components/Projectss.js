import { useParams } from 'react-router-dom';
import data from '../assets/Data.json';
import ImageCarousel from './ImageCarousel.js'
import { Link } from 'react-router-dom';


function Projectss (){
    const { id } = useParams();
    const project = data.find((item) => item.id === id);
    const otherProjects = data.filter((p) => p.id.toString() !== id);

    if (!project) {
        return;
    }

    return(
        <div className="continer">
            <div className='projectt'>
                <ImageCarousel/>
                <div className='info'>
                    <h2> {project.title}</h2>
                    <p className='descrition'>{project.text}</p>
                    <p className="link" >
                        Project Github link:{" "}
                        <a   className="github-link" href={project.link} target="_blank" rel="noopener noreferrer">
                            {project.link}
                        </a>
                    </p>

                    <div className='tags'>
                        <ul>
                            {project.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="other-projects">
                <h3>Other Projects</h3>
                <ul className="scroll-container">
                {otherProjects.map((p) => (
                    <li key={p.id} className="project-card small">
                    <Link to={`/project/${p.id}`} className="card-link">
                        <img src={p.cover} alt={p.title} className="cover-img" />
                        <div className="text-overlay">
                        <h4>{p.title}</h4>
                        </div>
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}

export default Projectss;