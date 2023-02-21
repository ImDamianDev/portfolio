//import styles
import './Works.css';

function Works() {

  return (
    <div id="works_section" className="container-fluid px-4 py-5">
      <h2 className="title-section pb-2">Works</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

        <div id="react-poke-app" className="card h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
          <div className="content">
            <h2 className="title">React-Poke-App</h2>
            <a href="https://github.com/ImDamianDev/react-poke-app"
            type="button" className="btn">
              View Repo
            </a>
            <a href="https://imdamiandev-react-poke-app.netlify.app/"
            type="button" className="btn">
              View Website
            </a>
          </div>
        </div>

        <div id="react-calculator" className="card h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
          <div className="content">
            <h2 className="title">React-Calculator</h2>
            <a href="https://github.com/ImDamianDev/react-calculator"
            type="button" className="btn">
              View Repo
            </a>
            <a href="https://imdamiandev-react-calculator.netlify.app/"
            type="button" className="btn">
              View Website
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Works;