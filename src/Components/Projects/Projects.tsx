import FadeUp from "../Animation/FadeUp"
import ProjectsCards from "./ProjectsCards"

function Projects() {
  return (
    <section id="Projects">
<div className="Projects-Heading">
  <FadeUp>
        <h5>// SELECTED WORK</h5>
        <h1>Featured <span>Projects</span></h1>
        </FadeUp>
</div>
<ProjectsCards/>
    </section>
  )
}

export default Projects