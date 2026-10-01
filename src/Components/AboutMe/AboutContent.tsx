import { useTranslation } from "react-i18next";
import FadeUp from "../Animation/FadeUp";
import AboutStats from "./AboutStats";

function AboutContent() {
   const { t } = useTranslation();
  return (
    <div className="Content">
      <FadeUp>
      <span className="Main-Heading">{t('about.eyebrow')}</span>
        <h1>{t('about.headingPart1')}  {t('about.headingPart2')} <span>{t('about.headingPart3')}</span></h1>
        <p>{t('about.bio')}</p>
</FadeUp>
    <AboutStats/>
    </div>
    
  )
}

export default AboutContent;