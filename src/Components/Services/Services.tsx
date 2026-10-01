
import { getServices } from "../../data/ServiceData";
import FadeUp from "../Animation/FadeUp";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
function Services() {
          const { t } = useTranslation()
    const services = getServices(t);
  return (
    <section id="Services">
<div className="Services-Heading">
  <FadeUp>
        <h5>{t('services.eyebrow')}</h5>
        <h1>{t('services.heading')} <span>{t('services.headingAccent')}</span></h1>
        </FadeUp>
</div>
<div className="services-Cards">
    {services.map((service)=>(
    <div className="Service-Card glass-card" key={service.id}>
        <div className="Service-Head">
           <span>{<service.Icon/>}</span>
            <span className="Service-Number">{service.number}</span>
        </div>
        <div className="Service-content">
            <div className="Description">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
            </div>
            <div className="Tags">
                {service.tags.map((tag)=>(
                    <span key={tag}>{tag}</span>
                ))}
            </div>
        </div>
        <div className="Service-end">
          <Link to={`/Service/${service.id}`}>
          <ArrowRight />
          </Link>
        </div>
    </div>
    ))}
</div>
    </section>
  )
}

export default Services