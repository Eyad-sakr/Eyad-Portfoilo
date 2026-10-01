 import { useTranslation } from "react-i18next";
import type { ServiceHeroProps } from "./ServiceHero"; 
function WhatIBuiled({service}:ServiceHeroProps) {
  const {t}  = useTranslation();
  return (
    <div className="What-I-Build">
      <div className="Build-Heading">
        <h5>{t("services.whatIBuild.label")}</h5>
        <h1>
          {t("services.whatIBuild.title1")} <span>{t("services.whatIBuild.title2")}</span>
        </h1>
        <p>
         {t("services.whatIBuild.description")}
        </p>
      </div>
      <div className="Serv-Cards">
        {service.cards.map((card)=>(
          <div className="Serv-Card glass-card" key={card.title}>
            <div className="Icon">
            <card.Icon/>
            <h2>{card.number}</h2>
            </div>
            <div className="Card-Con">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default WhatIBuiled