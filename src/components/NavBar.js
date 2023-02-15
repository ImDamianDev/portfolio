//import styles
import './NavBar.css';

function NavBar() {

  return (
    <div id="navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          <a className="navbar-brand" href="/">ImDamianDev</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#works_section">Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default NavBar;
