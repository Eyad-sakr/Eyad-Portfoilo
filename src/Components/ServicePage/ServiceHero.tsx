import { Link, useNavigate } from "react-router-dom"
import BrowserMockup from "../ui/BrowserMockup"
import type { Service } from "../../data/ServiceData"
export interface ServiceHeroProps {
  service: Service;
}
function ServiceHero({service}:ServiceHeroProps) {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
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
              Start a Project →
            </Link>
            <Link to="#"  onClick={(e) => {
            e.preventDefault();
            handleProjectsClick();
          }} className="btn btn-secondary">
              View Projects
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