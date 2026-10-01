import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

function ServiceCollaborate() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <div className="Collaborate">
      <div className="Collaborate-Heading">
        <h5>{t("services.Collaborate.label")}</h5>
        <h1>{t("services.Collaborate.title")}</h1>
        <p>{t("services.Collaborate.description")}</p>
      </div>
      <div className="Collaborate-button">
        <Link 
          to="#" 
          onClick={(e) => {
            e.preventDefault();
            handleContactClick();
          }}
          className="collaborate-button"
        >
          {t("services.Collaborate.button")}
        </Link>     
      </div>
    </div>
  );
}

export default ServiceCollaborate;