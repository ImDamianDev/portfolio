import React, { useEffect } from 'react';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

//import styles
import './WorksCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function WorksCard(props) {

  useEffect(() => {
    //init tooltip
    Array.from(document.querySelectorAll('a[data-bs-toggle="tooltip"]'))
      .forEach(tooltipNode => new Tooltip(tooltipNode))
  });

  return (
    <div className="col-12 col-lg-6 mb-4 mb-lg-4">
      <div id={props.data.nombre_proyecto} className="card-proyect">
        <h2 className="proyect-title">{props.data.nombre_proyecto}</h2>
        <div className="proyect-links">
          <a href={props.data.repo_url}
            type="button" className="btn" data-bs-toggle="tooltip" data-bs-placement="top"
            data-bs-custom-class="custom-tooltip"
            data-bs-title="Repositorio">
            <FontAwesomeIcon icon={brands('github')} size="2x" />
          </a>
          <a href={props.data.web_url}
            type="button" className="btn" data-bs-toggle="tooltip" data-bs-placement="top"
            data-bs-custom-class="custom-tooltip"
            data-bs-title="Ver Sitio Web">
            <FontAwesomeIcon icon={solid('desktop')} size="2x" />
          </a>
        </div>
      </div>
    </div>

  );
}

export default WorksCard;