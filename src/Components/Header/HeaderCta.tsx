import { useTranslation } from "react-i18next";

function HeaderCta() {
     const {t,i18n} = useTranslation();
     const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(newLanguage);
  };  
  return (
     <div className="Header-Cta">
          <a href="#Contact">
           <button className="Cta-Button">{t("header.hireMe")}</button>
           </a>
           <button className="Cta-Button" onClick={changeLanguage}>
        {i18n.language === "en" ? "AR" : "EN"}
      </button>
         </div>
  )
}

export default HeaderCta