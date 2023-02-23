//import styles
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Footer() {
  return (
    <div id="footer_section" className="py-3">
      <div className="container">
        <footer className="py-3">
          <ul className="nav justify-content-center pb-3 mb-3">
            <li className="nav-item"><a href="https://github.com/ImDamianDev/" className="nav-link"><FontAwesomeIcon icon={brands('github')} size="2x"/></a></li>
            <li className="nav-item"><a href="https://www.linkedin.com/in/imdamian-dev/" className="nav-link"><FontAwesomeIcon icon={brands('linkedin')} size="2x"/></a></li>
            <li className="nav-item"><a href="mailto:imdamian.dev@gmail.com" className="nav-link"><FontAwesomeIcon icon={solid('envelope')} size="2x"/></a></li>
          </ul>
          <p className="text-center">Con &#x2665; desde Chile.</p>
          <p className="text-center">&#169; 2023 - Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;