import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experience from '../data/experience'

function Timeline() {

  return (
    <div id="timeline_section" className='container'>

      <h2 className="timeline-title">
        Experiencia y Formación
      </h2>

      <VerticalTimeline>

        {experience.map((experience) =>
          <VerticalTimelineElement
            className={"vertical-timeline-element-work " + experience.tipo}
            date={experience.fecha}
            contentStyle={{ background: 'var(--secondary-color)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  var(--secondary-color)' }}
            iconStyle={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}
            icon={!(experience.tipo === "formacion") ? <FontAwesomeIcon icon={solid('briefcase')} size="2x" /> : <FontAwesomeIcon icon={solid('graduation-cap')} size="2x" />}
          >
            <h3 className="vertical-timeline-element-title">{experience.cargo}</h3>
            <h5 className="vertical-timeline-element-subtitle mt-2">{experience.lugar}</h5>
            <span className={experience.tipo}>
              <FontAwesomeIcon icon={solid('graduation-cap')}/>
              Formación
            </span >
          </VerticalTimelineElement>
        )}



      </VerticalTimeline>

      <a
        type="button"
        className="btn btn-lg mx-xl-auto"
        href="https://drive.google.com/file/d/1xd6oV5QQ_wf8V_2P51-QpZ6u2E3Agmed/view?usp=share_link"
      >
        <FontAwesomeIcon icon={solid('download')} /> Descargar CV
      </a>

    </div>
  );
}

export default Timeline;