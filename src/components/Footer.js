//import styles
import './Footer.css';

function Footer() {
  return (
    <div id="footer_section" className="py-3">
      <div className="container">
        <footer className="py-3">
          <ul className="nav justify-content-center pb-3 mb-3">
            <li className="nav-item"><a href="https://github.com/ImDamianDev/" className="nav-link"><i className="bi bi-github"></i></a></li>
            <li className="nav-item"><a href="https://github.com/ImDamianDev/" className="nav-link">LinkedIn</a></li>
          </ul>
          <p className="text-center">Con cariño desde Chile</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;