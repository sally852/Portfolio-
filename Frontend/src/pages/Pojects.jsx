import './../styles/style.css';
import NavBar from"../components/NavBar.js"
import Projects from"../components/Projects.js"
import Footer from'../components/Footer.js'




function Me() {
    return (
      <div className="home">
        <NavBar/>
        <Projects/>
        <Footer/>
      </div>
    );
}
  
export default Me;