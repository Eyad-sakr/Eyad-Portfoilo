import { Link, useNavigate } from "react-router-dom"
import BrowserMockup from "../ui/BrowserMockup"
import type { Service } from "../../data/ServiceData"
import { useTranslation } from "react-i18next";
export interface ServiceHeroProps {
  service: Service;
}
function ServiceHero({service}:ServiceHeroProps) {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'Contact' } });
  };
   const handleProjectsClick = () => {
    navigate('/', { state: { scrollTo:'Projects' } });
  };

  return (
     <div className="Serv-Hero">
      <div className="Serv-Hero-Content">
         <h6 className="section-badge">
            {service.badge.at(0)} {service.badge.at(1)}
          </h6>
          <h1 className="service-title">
            {service.title} <span className="highlight">{service.highlight}</span>
          </h1>
          <p className="service-description">{service.description}</p>
          <div className="service-cta-group">
            <Link to="#"  onClick={(e) => {
            e.preventDefault();
            handleContactClick();
          }} className="btn btn-primary">
              {t("services.StartProject")}
            </Link>
            <Link to="#"  onClick={(e) => {
            e.preventDefault();
            handleProjectsClick();
          }} className="btn btn-secondary">
               {t("services.viewProjects")}
            </Link>
          </div>
      </div>
      <div className="BrowserMockup">
        <BrowserMockup/>
      </div>
        </div>
      
  )
}

export default ServiceHero