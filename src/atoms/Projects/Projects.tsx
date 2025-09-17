import { ProjectItem } from '../ProjectItem/ProjectItem'
import './Projects.css'
import deliFront from '../../assets/DeliFront.png'

export const Projects = () => {
  return (
    <div className="projects-container">
      <span className="projects-title">Projects</span>
      <div className="projects">
        <ProjectItem
          title="Delizariz"
          description="Delivery App"
          img={deliFront}
          link="https://delifront-1.onrender.com/"
        />
        <ProjectItem
          title="Portfolio"
          description="Personal Website"
          img={deliFront}
          link="https://example.com"
        />
        <ProjectItem
          title="Shop"
          description="E-Commerce Platform"
          img={deliFront}
          link="https://example.com"
        />
        <ProjectItem
          title="Shop"
          description="E-Commerce Platform"
          img={deliFront}
          link="https://example.com"
        />
        <ProjectItem
          title="Shop"
          description="E-Commerce Platform"
          img={deliFront}
          link="https://example.com"
        />
        <ProjectItem
          title="Shop"
          description="E-Commerce Platform"
          img={deliFront}
          link="https://example.com"
        />
      </div>
    </div>
  )
}
