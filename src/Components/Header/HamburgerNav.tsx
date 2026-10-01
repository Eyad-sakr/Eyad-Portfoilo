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
        <li>{t("header.services")}</li>
        <li>{t("header.about")}</li>
        <li>{t("header.skills")}</li>
        <li>{t("header.projects")}</li>
        <li>{t("header.contact")}</li>
        <HeaderCta/>
      </ul>
    </>
  );
}

export default HamburgerNav