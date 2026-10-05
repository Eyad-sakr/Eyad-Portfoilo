import { useTranslation } from "react-i18next";
import HeaderCta from "./HeaderCta";
interface proptype {
  isOpen:boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function HamburgerNav({ isOpen, setIsOpen }:proptype) {
      const {t} = useTranslation();
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`Hamburger ${isOpen ? "active" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
       <a href="#Services"> <li>{t("header.services")}</li></a>
       <a href="#About"> <li>{t("header.about")}</li></a>
        <a href="#Skills"><li>{t("header.skills")}</li></a>
        <a href="#Projects"><li>{t("header.projects")}</li></a>
        <a href="#Contact"><li>{t("header.contact")}</li></a>
        <HeaderCta/>
      </ul>
    </>
  );
}

export default HamburgerNav