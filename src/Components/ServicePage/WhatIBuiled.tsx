 import type { ServiceHeroProps } from "./ServiceHero"; 
function WhatIBuiled({service}:ServiceHeroProps) {
  return (
    <div className="What-I-Build">
      <div className="Build-Heading">
        <h5>// What I Build</h5>
        <h1>
          What I <span>Build</span>
        </h1>
        <p>
          From first-time company sites to full brand refreshes, I build web
          presences that feel credible, load fast, and work everywhere.
        </p>
      </div>
      <div className="Serv-Cards">
        {service.cards.map((card)=>(
          <div className="Serv-Card glass-card" key={card.title}>
            <div className="Icon">
            <card.Icon/>
            <h2>{card.number}</h2>
            </div>
            <div className="Card-Con">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default WhatIBuiled