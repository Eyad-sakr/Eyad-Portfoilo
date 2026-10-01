 import { useTranslation } from "react-i18next";
import type { ServiceHeroProps } from "./ServiceHero"; 

function HowIWork({service}:ServiceHeroProps) {
  const {t} = useTranslation();
  return (
    <div className="How-I-Work">
        <div className="How-I-Work-Heading">
    <h5>{t("services.developmentProcess.label")}</h5>
    <h1>{t("services.developmentProcess.title1")}  <span>{t("services.developmentProcess.title2")}</span></h1>
  </div>
  <div className="TimeLine">
    {service.process.map((card)=>(
        <div key={card.number} className="TimeLine-Step">
        <span>{card.number}</span>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        </div>
    ))}

  </div>

    </div>
  )
}

export default HowIWork