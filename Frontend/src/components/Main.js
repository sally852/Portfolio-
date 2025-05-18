import './../styles/style.css';
import Typewriter from './TypeWriter';

import ShowProjects from './ShowProjects';





function Main() {
    return(
        
        <div  className="accueil">
            <div className="content">
                <p className='h3'>Hi there,</p>
                <p className='h1'>
                    I'm{' '}
                    <Typewriter text="Amina Sally" color="#0065FC" /> {/* ← Choisis ta couleur ici */}
                </p>
                <p className='h2'>l'm a Junior web developer </p>
                <p  className='h'>Passionate about building clean, modern websites.</p>
                <button>know more about me</button>
            </div>
            <div>
                <div className='about'>
                    <h2>About me</h2>
                    <p>I'm a junior web developer with a solid grasp of HTML, CSS, JavaScript, and React. I enjoy turning ideas into simple, responsive websites that are easy to use and visually clean.
                    I started learning web development through self-study and personal projects, and I'm always looking to grow by exploring new tools and technologies. I like writing clean code and focusing on user experience.
                    Outside of coding, I explore UI/UX design, follow tech trends, and love learning new things that help me build better websites.</p>
                </div>
                <div className='skills'>
                    <h2>My skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>React</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <ShowProjects/>
        </div>
    );
}
export default Main;