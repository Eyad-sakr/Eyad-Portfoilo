 import { useTranslation } from "react-i18next";
import type { ServiceHeroProps } from "./ServiceHero"; 
function WhatsIncluded({service}:ServiceHeroProps) {
  const {t} = useTranslation();
  return (
     <div className="Whats-Included">
  <div className="Whats-Heading">
    <h5>{t("services.whatsIncluded.label")}</h5>
    <h1>{t("services.whatsIncluded.title1")} <span>{t("services.whatsIncluded.title2")}</span></h1>
  </div>
  <div className="Whats-Included-Cards">
    {service.whatsIncluded.map((card) => (
      <div
        className="Whats-Included-Card "
        key={card.title}
      >
        <div className="Whats-Included-Heading">
          <card.Icon />
          <span>{card.number}</span>
        </div>

        <div className="Whats-Included-Con">
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default WhatsIncluded