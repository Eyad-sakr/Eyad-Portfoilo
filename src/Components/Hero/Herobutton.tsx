import { useTranslation } from "react-i18next"

function Herobutton() {
    const { t } = useTranslation()

  return (<div className="buttons">
  <a href="#Projects">{t('hero.viewProjects')}</a>
  <a href="#Contact">{t('hero.contactMe')}</a>
</div>
  )
}

export default Herobutton