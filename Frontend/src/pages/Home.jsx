import './../styles/style.css';
import NavBar from"./../components/NavBar.js"
import Main from"./../components/Main.js"
import Footer from'../components/Footer.js'




function Home() {
    return (
      <div>
        <NavBar/>
        <Main/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;