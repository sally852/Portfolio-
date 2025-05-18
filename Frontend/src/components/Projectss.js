import { useParams } from 'react-router-dom';
import data from '../assets/Data.json';
import ImageCarousel from './ImageCarousel.js'


function Projectss (){
    const { id } = useParams();
    const project = data.find((item) => item.id === id);

    if (!project) {
        return;
    }

    return(
        <div className="continer">
            <ImageCarousel/>
            <div className='info'>
                <h2> {project.title}</h2>
                <p className='descrition'>{project.text}</p>
                <p>jkeidk jendkjd</p>
                <div className='tags'>
                    <ul>
                        {project.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>
           
        </div>
    );
}

export default Projectss;