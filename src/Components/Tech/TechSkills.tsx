  import SkillsMainHeading from "./TechSkillsMainHeading"
  import SkillsCard from "./TechSkillsCard"
  import FadeUp from "../Animation/FadeUp"
  export default function TechSkills() {
    return (
    
    <section style={{ color:'white',position:"relative",overflow:"hidden"}} id="Skills">
      {/* Glow */}
    <div className="ambient-blue ambient-blue-skills" />
    <div className="ambient-purple ambient-purple-skills" />
 <div className="crystal-scene crystal-bottom-right">
  <div className="crystal">
    <span className="crystal-face face-front" />
    <span className="crystal-face face-back" />
    <span className="crystal-face face-right" />
    <span className="crystal-face face-left" />
    <span className="crystal-face face-top" />
    <span className="crystal-face face-bottom" />
  </div>
</div>
    <div className="Skills-Container">
      <FadeUp>
      <SkillsMainHeading />
      </FadeUp>
    
      <SkillsCard/>
    </div>
      </section>
      
      
    )
  }
