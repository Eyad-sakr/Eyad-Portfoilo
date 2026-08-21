import SkillsMainHeading from "./TechSkillsMainHeading"
import SkillsCard from "./TechSkillsCard"
import FadeUp from "../FadeUp"
export default function Skills() {
  return (
  
  <section style={{ color:'white'}} id="Skills">
    <FadeUp>
    <SkillsMainHeading />
    </FadeUp>
   
    <SkillsCard/>
    </section>
    
    
  )
}
