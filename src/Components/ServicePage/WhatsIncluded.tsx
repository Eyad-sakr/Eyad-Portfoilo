 import type { ServiceHeroProps } from "./ServiceHero"; 
function WhatsIncluded({service}:ServiceHeroProps) {
  return (
     <div className="Whats-Included">
  <div className="Whats-Heading">
    <h5>// What's Included</h5>
    <h1>What's <span>Included</span></h1>
  </div>
  <div className="Whats-Included-Cards">
    {service.whatsIncluded.map((card) => (
      <div
        className="Whats-Included-Card "
        key={card.title}
      >
        <div className="Whats-Included-Heading">
          <card.Icon />
          <span>{card.number}</span>
        </div>

        <div className="Whats-Included-Con">
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default WhatsIncluded