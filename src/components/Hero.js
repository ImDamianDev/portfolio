//import styles
import './Hero.css';
//import profile picture
import ProfilePicture from '../img/profile_picture_imdamiandev.png'

function Hero() {

  return (
    <div id="hero-section" className="Hero">
      <div className="row flex-lg-row-reverse align-items-center py-5">
        <div className="col-10 col-sm-8 col-lg-6 container">
          <img src={ProfilePicture} className="d-block img-fluid" alt="profile img" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6 mt-4">

          <h1 className="display-5 fw-bold lh-1">
            Hola, soy Damian
          </h1>

          <div class="typewriter-container">
            <div class="typewriter">
              Desarrollador web entusiasta.
            </div>
          </div>

          <a type="button" className="btn btn-outline-secondary btn-lg px-4 mb-5" href="#works_section">Mas</a>
          <a type="button" className="btn btn-outline-secondary btn-lg px-4 mb-5 ms-3" href="#works_section">Proyectos</a>

        </div>
      </div>
    </div>
  );
}

export default Hero;