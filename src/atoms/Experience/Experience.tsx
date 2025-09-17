import './Experience.css'
import { experiencesdata as experiences } from '../../assets/data/Experience'
type ExperienceItem = {
  title: string
  role: string
  time: string
  highlights: string[]
}

type ExperienceProps = {
  darkMode: boolean
}

export const Experience = ({ darkMode }: ExperienceProps) => {
  return (
    <div
      className="experience-container"
      style={{
        color: darkMode ? 'white' : 'black',
        backgroundColor: darkMode ? '#1e1e2f' : '#E6F5FF',
      }}
    >
      <h2 className="experience-title">Experiences</h2>

      <div className="time-line">
        <div className="line"></div>

        {experiences.map((item, i) => (
          <div className="timeline-item" key={i}>
            <span className="timeline-role">{item.role}</span>

            <div className="timeline-popup">
              <h2>{item.title}</h2>
              <p>{item.time}</p>
              <ul>
                {item.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
