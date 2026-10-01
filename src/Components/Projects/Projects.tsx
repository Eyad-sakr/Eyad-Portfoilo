import { useTranslation } from "react-i18next"
import FadeUp from "../Animation/FadeUp"
import ProjectsCards from "./ProjectsCards"

function Projects() {
  const {t} = useTranslation();
  return (
    <section id="Projects">
<div className="Projects-Heading">
  <FadeUp>
        <h5>{t('projects.eyebrow')}</h5>
        <h1>{t('projects.headingPart1')} <span>{t('projects.headingPart2')}</span></h1>
        </FadeUp>
</div>
<ProjectsCards/>
    </section>
  )
}

export default Projects