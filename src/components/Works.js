//import styles
import './Works.css';
import WorksCard from './WorksCard'
import proyects from '../data/proyects'

function Works() {

  return (
    <div id="works_section">
      <div className="proyect-box container px-4">
        <h2 className="section-title">
          Proyectos
        </h2>

        <div className="row">
          {proyects.map((proyect) =>
            <WorksCard data={proyect} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Works;