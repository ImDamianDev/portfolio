import './About.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experience from '../data/experience'

function About() {

  return (
    <div id="about_section" className='container'>
      <h2 className="about-title pb-3 mb-4">
        Sobre mí
      </h2>

      <p>
        Soy un profesional con formación en electrónica e ingeniería mecánica, con una sólida experiencia en el sector automotriz y en atención al cliente. Me apasiona la tecnología y el aprendizaje constante.
      </p>

      <p>
        En 2022, realicé un programa de formación intensiva de desarrollo de aplicaciones JavaScript en modalidad bootcamp, lo que me permitió comprender la programación como una habilidad esencial.
      </p>

      <p>Aprendí diversas tecnologías de desarrollo web, tales como HTML, CSS, JavaScript, Bootstrap, Git, Github, Node.js, entre otras, permitidome desarrollar proyectos de software como este mismo portafolio.
      </p>

      <p>
        Me entusiasma seguir avanzando en mi carrera profesional, aplicar mis habilidades en el desarrollo de software y seguir aprendiendo nuevas tecnologías para poder ofrecer soluciones digitales de la más alta calidad.
      </p>

      <h2 className="about-title py-3 my-4">Experiencia y Formación</h2>
      <VerticalTimeline>

        {experience.map((experience) =>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={experience.fecha}
            contentStyle={{ background: 'var(--secondary-color)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  var(--secondary-color)' }}
            iconStyle={{ background: 'var(--secondary-color)' }}
          >
            <h3 className="vertical-timeline-element-title">{experience.cargo}</h3>
            <h5 className="vertical-timeline-element-subtitle mt-3">{experience.lugar}</h5>
          </VerticalTimelineElement>
        )}



      </VerticalTimeline>
    </div>
  );
}

export default About;