import { ProjectItem } from '../ProjectItem/ProjectItem'
import './Projects.css'
import deliFront from '../../assets/DeliFront.png'
import dynamicMachine from '../../assets/DynamicMachine.png'
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
          title="Dynamic Table"
          description="Dynamic table, that allowed to the developer easily add/remove variables by only 1 line
          the frontend puill the data from api and render it dynamically"
          img={dynamicMachine}
          link="https://dynamic-machine-frontend.onrender.com/"
        />
      </div>
    </div>
  )
}
