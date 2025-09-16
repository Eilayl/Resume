import './Experience.css'

type ExperienceItem = {
  title: string
  role: string
  time: string
  highlights: string[]
}

type ExperienceProps = {
  darkMode: boolean
  experiences: ExperienceItem[]
}

export const Experience = ({ darkMode, experiences }: ExperienceProps) => {
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
              <h4>{item.title}</h4>
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
