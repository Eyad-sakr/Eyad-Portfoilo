 import type { ServiceHeroProps } from "./ServiceHero"; 

function HowIWork({service}:ServiceHeroProps) {
  return (
    <div className="How-I-Work">
        <div className="How-I-Work-Heading">
    <h5>// Development Process</h5>
    <h1>How I  <span>Work</span></h1>
  </div>
  <div className="TimeLine">
    {service.process.map((card)=>(
        <div key={card.number} className="TimeLine-Step">
        <span>{card.number}</span>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        </div>
    ))}

  </div>

    </div>
  )
}

export default HowIWork