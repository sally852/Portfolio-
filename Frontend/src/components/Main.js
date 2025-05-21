import './../styles/style.css';
import Typewriter from './TypeWriter';
import Contact from './Contact';
import ShowProjects from './ShowProjects';
import About from './AboutMe'
  


function Main() {
  return (
    <div className="accueil">
      <div className="content">
        <p className="h3">Hi there,</p>
        <p className="h1">
          I'm <Typewriter text="Amina Sally" color="#D5BD96" />
        </p>
        <p className="h2">I'm a Junior web developer</p>
        <p className="h4">Passionate about building clean, modern websites.</p>
        <div className="buttons">
          <a href="#projects" className="primary">View My Work →</a>
          <a href="#about" className="secondary">About Me ❤️</a>
        </div>
      </div>

      
      <About />
      <ShowProjects />
      <Contact/>
      
    </div>
  );
}

export default Main;
