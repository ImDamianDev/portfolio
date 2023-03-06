import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {

  return (
    <div id="about-section">
      <h2 className="section-title pb-2 mb-4">Experiencia y Formación</h2>
      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Servicios mecánica</h3>
          <h5 className="vertical-timeline-element-subtitle mt-3">D&F Mecanica Automotriz</h5>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default About;