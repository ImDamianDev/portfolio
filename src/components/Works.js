//import styles
import './Works.css';
import WorksCard from './WorksCard'

const proyects = [
  {
    nombre_proyecto: "react-poke-app",
    repo_url: "https://github.com/ImDamianDev/react-poke-app",
    web_url: "https://imdamiandev-react-poke-app.netlify.app/"
  },
  {
    nombre_proyecto: "react-calculator",
    repo_url: "https://github.com/ImDamianDev/react-calculator",
    web_url: "https://imdamiandev-react-calculator.netlify.app/"
  },
  {
    nombre_proyecto: "react-chatbot-app",
    repo_url: "https://github.com/ImDamianDev/react-chatbot-app.git",
    web_url: "https://imdamiandev-react-chatbot-app.netlify.app/"
  }

]


function Works() {

  return (
    <div id="works_section" className="container-fluid px-4 py-4">
      <h2 className="section-title pb-2 mb-4">Works</h2>

      <div className="row">
        {proyects.map( (proyect) =>
        <WorksCard data={proyect} />
        )}
      </div>

    </div>
  );
}

export default Works;