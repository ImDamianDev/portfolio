//import styles
import './Works.css';
import WorksCard from './WorksCard'
import proyects from '../data/proyects'

function Works() {

  return (
    <div id="works_section" className="container px-4 py-4">
      <h2 className="section-title pb-2 mb-4">Proyectos</h2>

      <div className="row">
        {proyects.map( (proyect) =>
        <WorksCard data={proyect} />
        )}
      </div>

    </div>
  );
}

export default Works;