import { AboutMe } from "../composants/About";
import { Header } from "../composants/Header";
import { Experience } from "../composants/Experience";
import { Skills } from "../composants/Skills";

import { Education } from "../composants/Education";
import { Contact } from "../composants/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <Header />

      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <ToastContainer />
    </div>
  );
}

export default App;
