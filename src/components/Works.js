//import styles
import './Works.css';

function Works() {

  return (
    <div id="works_section">
      <div className="container px-4 py-5">
        <h2 className="title-section pb-2">Works</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

          <a href="https://github.com/ImDamianDev/react-poke-app.git">
            <div className="work-card col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-7 lh-1 fw-bold">React-Poke-App</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Works;