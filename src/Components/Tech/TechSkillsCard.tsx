import { useTranslation } from "react-i18next"
import FadeUp from "../Animation/FadeUp"

type Skill = {
  id: number
  name: string
  icon: string
  levelKey: string
  level: string
}

function SkillsCard() {
  const { t } = useTranslation()
const skills = t('Techskills.items', { returnObjects: true }) as unknown as Skill[]
  return (
    <div className="Card-Container">
      {skills.map((skill) => (
        <FadeUp key={skill.id}>
          <div className="Skill-Card glass-panel glass-panel-purple">
            <div className="icon">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <h2>{skill.name}</h2>
            <div className={`Skill-Level ${skill.levelKey}`}>
              {skill.level}
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  )
}

export default SkillsCard