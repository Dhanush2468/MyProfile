import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    
              <div>
<a href="https://shrinkme.io/ref/110036665103617792226"><img src="https://shrinkme.io/banners/ref/320x50.png" title="Make short links and earn the biggest money" /></a>

        
                </div>
      
    </div>
  );
}

export default App;
