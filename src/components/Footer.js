//import styles
import './Footer.css';

function Footer() {
  return (
    <div id="footer_section" className="py-3">
      <div className="container">
        <footer className="py-3">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="https://github.com/ImDamianDev/" className="nav-link">Github</a></li>
            <li className="nav-item"><a href="https://github.com/ImDamianDev/" className="nav-link text-muted">LinkedIn</a></li>
          </ul>
          <p className="text-center text-muted">Con cariño desde Chile</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;