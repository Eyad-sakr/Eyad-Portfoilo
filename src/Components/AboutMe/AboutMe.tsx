import AboutContent from "./AboutContent"
import AboutBoxImg from "./AboutBoxImg"
import FadeUp from "../Animation/FadeUp"

function AboutMe() {
  return (
  <FadeUp>
    <section id="About"  className="AboutMe" >
        <AboutBoxImg /> 
        <AboutContent />
    </section>
    </FadeUp>
  )
}

export default AboutMe