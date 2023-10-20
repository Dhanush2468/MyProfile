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
      <Footer /></br></br></br></br></br>
    
            <div style="width: 200px; height: 30px;">
  <a href="https://shrinkme.io/ref/110036665103617792226">
    <img src="https://shrinkme.io/banners/ref/320x50.png" alt="Make short links and earn the biggest money" style="max-width: 100%; max-height: 100%;" />
  </a>
</div>
      
    </div>
  );
}

export default App;
