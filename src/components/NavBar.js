//import styles
import './NavBar.css';

//state
import { useState } from 'react'

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function NavBar() {

  const [collapsed, setCollapsed] = useState(false)

  const toogleMenu = () => {
    setCollapsed(!collapsed)
  }

  const contactSection = (section) => {
    switch (section) {
      case 'home':
        window.location.href = '#hero-section';
        setCollapsed(!collapsed);
        break;
      case 'about':
        window.location.href = '#about_section';
        setCollapsed(!collapsed);
        break;
      case 'proyects':
        window.location.href = '#works_section';
        setCollapsed(!collapsed);
        break;
      case 'contact':
        window.location.href = '#footer_section';
        setCollapsed(!collapsed);
        break
      default:
        alert("default")
    }

  }

  return (
    <nav id="navbar" className='navbar navbar-expand-lg fixed-top'>
      <div className="container">

        <a className="navbar-brand" href="/">ImDamianDev</a>

        <button
          onClick={toogleMenu}
          className="navbar-toggler"
          type='button'
        >
          <FontAwesomeIcon icon={icon({ name: 'bars', style: 'solid' })} size="2x" />
        </button>

        <div className={`collapse navbar-collapse ${collapsed ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item my-3 my-lg-0 ms-lg-5">
              <button className="nav-link" onClick={() => contactSection('home')}>Inicio</button>
            </li>
            <li className="nav-item my-3 my-lg-0 ms-lg-5">
              <button className="nav-link" onClick={() => contactSection('about')}>Sobre mí</button>
            </li>
            <li className="nav-item my-3 my-lg-0 ms-lg-5">
              <button className="nav-link" onClick={() => contactSection('proyects')}>Proyectos</button>
            </li>
            <li className="nav-item my-3 my-lg-0 ms-lg-5">
              <button className="nav-link" onClick={() => contactSection('contact')}>Contacto</button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;
