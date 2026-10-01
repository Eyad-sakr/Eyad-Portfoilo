import Skills from "./Skills"
import Herobutton from "./Herobutton"
import FadeUp from "../Animation/FadeUp"
import { useTranslation } from "react-i18next"
function Hero() {
      const { t } = useTranslation()
  
  return (
    
    <div  className="Hero ">
        <div className="container">
          <FadeUp>
            <h1  className="main-heading">
                 {t('hero.headingPart1')}
                        <br></br> 
                <span>{t('hero.headingPart2')}</span> 
               <span>{t('hero.headingPart3')}</span> 
            </h1>
            </FadeUp> 
            <FadeUp> 
            <Skills/>
            <p>{t('hero.bio')}</p>
            </FadeUp> 
            <FadeUp> 
            <Herobutton/>
            </FadeUp>
            <FadeUp>  
             <div className="Scroll">
              <div className="ScrollLine"></div>
              <span>{t('hero.scroll')}</span>
              </div>
              </FadeUp> 
           
        </div>
    </div>
  )
}

export default Hero