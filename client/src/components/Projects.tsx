import { projects } from "../data/projects";
import Project from "./Project";

export default function Projects() {
  return (
    <>

      <div id="projects" className="projectsContainer">
        <h2 className="projectsTitle">My Projects</h2>
        {projects.map((project) => <Project key={project.title} {...project} />)}
      </div>
    </>
  )
}

