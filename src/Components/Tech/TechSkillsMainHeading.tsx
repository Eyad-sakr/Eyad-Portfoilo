import { useTranslation } from "react-i18next"

export default function SkillsMainHeading() {
  const {t} = useTranslation();
  return (
    <div className="Skills-heading">
        <h5>{t('Techskills.eyebrow')}</h5>
        <h1>{t('Techskills.headingPart1')}  {t('Techskills.headingPart2')} <span>{t('Techskills.headingPart3')}</span></h1>
    </div>
  )
}
