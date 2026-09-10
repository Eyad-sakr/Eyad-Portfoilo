import FadeUp from "../Animation/FadeUp";

function SkillsCard() {
    const SkillsTech =[
        
        {id:1,Name:'Html', icon:'/html5.png',Level:'Expert'},
        {id:2,Name:'Css', icon:'/css3.png',Level:'Expert'},
        {id:3,Name:'JS', icon:'/js.png',Level:'Expert'},
        {id:4,Name:'Type Script', icon:'/typescript.png',Level:'Advanced'},
        {id:5,Name:'React', icon:'/react.png',Level:'Advanced'},
        {id:6,Name:'REST APIs', icon:'/rest-api.png',Level:'Intermediate'},
        {id:7,Name:'Responsive Design', icon:'/responsive-design.png',Level:'Expert'},
        {id:9,Name:'C#', icon:'/c-sharp.png',Level:'Familiar'},
        {id:10,Name:'Git/GitHup', icon:'/git.png',Level:'Intermediate'},
        {id:11,Name:'Tailwind', icon:'/tailwind.png',Level:'Intermediate'},
    ]
  return (
    <div className="Card-Container">

       {SkillsTech.map(skill=>(
        <FadeUp key={skill.id}>
         <div className="Skill-Card glass-panel glass-panel-purple" >
          <div className="icon">
            <img src={skill.icon} alt="Skill image" />
          </div>
          <h2>{skill.Name}</h2>
          <div className={`Skill-Level ${skill.Level.toLocaleLowerCase()}`}>
            {skill.Level}
          </div> 
            </div>
            
          </FadeUp>

       ))}
    </div>
  )
}

export default SkillsCard;