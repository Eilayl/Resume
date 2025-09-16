import './Skills.css';
import { skillsData, languages } from '../../assets/data/Skills';

export const Skills = (darkMode: {darkMode: boolean}) => {
  return (
    <div className={`skills-container ${darkMode ? 'dark' : 'light'}`}>
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skillsData.map((category, i) => (
          <div key={i} className="skill-card">
            <h3 className="skill-heading">{category.title}</h3>
            {category.items.map((item, j) => (
              <div key={j}>
                <div className="skill-row">
                  <span>
                    {item.name}{" "}
                    {item.note && <small>({item.note})</small>}
                  </span>
                  <span>{item.level}%</span>
                </div>
                <div className="progress">
                  <div
                    style={{
                      width: `${item.level}%`,
                      height: "100%",
                      background: "black",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Languages */}
      <div className="languages-card">
        <h3 className="skill-heading">Languages</h3>
        <div className="languages">
          {languages.map((lang, i) => (
            <span key={i} className="lang-item">
              {lang.name} <small>({lang.level})</small>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
