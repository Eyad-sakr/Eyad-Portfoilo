import { useTranslation } from "react-i18next"
import FadeUp from "../Animation/FadeUp"

const statClasses = ["Projects", "Happy-Clients", "Client"]

function AboutStats() {
  const { t } = useTranslation()
  const stats = t('about.stats', { returnObjects: true }) as { value: string; label: string }[]

  return (
    <FadeUp>
      <div className="AboutStats">
        {stats.map((stat, index) => (
          <div className={`${statClasses[index]} glass-card`} key={index}>
            <div className="StatsDott"></div>
            <div>{stat.value}</div>
            <div>{stat.label}</div>
          </div>
        ))}
      </div>
    </FadeUp>
  )
}

export default AboutStats