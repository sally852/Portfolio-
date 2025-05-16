import './../styles/style.css';
import NavBar from"../components/NavBar.js"
import AboutMe from"../components/AboutMe.js"
import Footer from'../components/Footer.js'




function Me() {
    return (
      <div className="home">
        <NavBar/>
        <AboutMe/>
        <Footer/>
      </div>
    );
}
  
export default Me;