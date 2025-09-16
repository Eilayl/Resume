import './ProjectItem.css'

type ProjectItemProps = {
  title: string
  description: string
  img: string
  link: string
}

export const ProjectItem = ({ title, description, img, link }: ProjectItemProps) => {
  return (
    <div className="project-item">
      <span className="project-title">{title}</span>
      <div className="project-image" onClick={() => window.open(link, '_blank')}>
        <img src={img} alt={title} />
        <div className="overlay" />
      </div>
      <span className="project-description">{description}</span>
    </div>
  )
}
