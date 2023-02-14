//import styles
import './Hero.css';
//import profile picture
import ProfilePicture from '../img/undraw_pic_profile.svg'

function Hero() {

  return (
    <div className="Hero col-xxl-8">
      <div className="row flex-lg-row-reverse align-items-center py-5">
        <div className="col-10 col-sm-8 col-lg-6 container">
          <img src={ProfilePicture} className="d-block img-fluid" alt="profile img" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6 mt-4">

          <h1 className="display-5 fw-bold lh-1 mb-3">Hello, Im Damian</h1>
          
          <p className="lead mb-5">Web Developer</p>

          <a type="button" className="btn btn-outline-secondary btn-lg px-4 mb-5" href="#works_section">Works</a>

        </div>
      </div>
    </div>
  );
}

export default Hero;