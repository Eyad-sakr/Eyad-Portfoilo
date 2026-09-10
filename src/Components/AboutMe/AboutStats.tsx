import FadeUp from "../Animation/FadeUp"

function AboutStats() {

  return (<FadeUp>
  <div className="AboutStats">
    <div className="Experience glass-card">
        <div className="StatsDott"></div>
        <div>1+</div>
        <div>Years Experience</div>
    </div>
    <div className="Projects glass-card">
         <div className="StatsDott"></div>
        <div>3+</div>
        <div>Projects Built</div>
    </div>
    <div className="Happy-Clients glass-card">
         <div className="StatsDott"></div>
        <div>2+</div>
        <div>Happy Clients</div>
    </div>
    <div className="Client glass-card">
        <div className="StatsDott"></div>
        <div>99%</div>
        <div>Client Satisfaction</div>
    </div> 
    </div>
    </FadeUp>
  )
}

export default AboutStats