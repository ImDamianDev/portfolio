//import styles
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function NavBar() {

  return (
    <nav id="navbar" className='navbar navbar-expand-lg fixed-top'>
        <div className="container">

          <a className="navbar-brand" href="/">ImDamianDev</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={icon({name: 'bars', style: 'solid'})} size="2x"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item my-3 my-lg-0">
                <a className="nav-link" href="/">Inicio</a>
              </li>
              <li className="nav-item my-3 my-lg-0 ms-lg-5">
                <a className="nav-link" href="#about_section">Sobre mí</a>
              </li>
              <li className="nav-item my-3 my-lg-0 ms-lg-5">
                <a className="nav-link" href="#works_section">Proyectos</a>
              </li>
              <li className="nav-item my-3 my-lg-0 ms-lg-5">
                <a className="nav-link" href="#footer_section">Contacto</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
  );
}

export default NavBar;
