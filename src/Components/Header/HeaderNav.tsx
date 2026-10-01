import { useTranslation } from "react-i18next";
import HeaderCta from "./HeaderCta";

function HeaderNav() {
  const { t } = useTranslation();

  return (
    <nav className="DesktopNav">
      <ul>
        <li>
          <a href="#Services">{t("header.services")}</a>
        </li>

        <li>
          <a href="#About">{t("header.about")}</a>
        </li>

        <li>
          <a href="#Skills">{t("header.skills")}</a>
        </li>

        <li>
          <a href="#Projects">{t("header.projects")}</a>
        </li>

        <li>
          <a href="#Contact">{t("header.contact")}</a>
        </li>
       <HeaderCta/>
      </ul>
    </nav>
  );
}

export default HeaderNav;