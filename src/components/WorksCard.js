//import styles
import './WorksCard.css';

function WorksCard(props) {

  return (
    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
      <div id={props.data.nombre_proyecto} className="card-proyect">
        <h2 className="proyect-title">{props.data.nombre_proyecto}</h2>
        <div className="proyect-links">
          <a href={props.data.repo_url}
            type="button" className="btn">
            Repo
          </a>
          <a href={props.data.web_url}
            type="button" className="btn">
            Website
          </a>
        </div>
      </div>
    </div>

  );
}

export default WorksCard;