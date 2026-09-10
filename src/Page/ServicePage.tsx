import {  useParams } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import { services } from "../data/ServiceData";
import Header from "../Components/Header/Header";
import ServiceHero from "../Components/ServicePage/ServiceHero";
import WhatIBuiled from "../Components/ServicePage/WhatIBuiled";
import WhatsIncluded from "../Components/ServicePage/WhatsIncluded";
import SectionDivider from "../Components/ui/SectionDivider";
import HowIWork from "../Components/ServicePage/HowIWork";
import Projects from "../Components/Projects/Projects";
import ServiceCollaborate from "../Components/ServicePage/ServiceCollaborate";

  
  
function Service() {
  
    const {id} = useParams();
const service = services.find((s) => s.id === Number(id));
    if(!service)return (
    <><Header />
   <div>Service  Not Found </div>
    <Footer /></>

  )
  else return(<>
  <Header />
    <section id="Service" key={service.id}>
      <ServiceHero service={service} />
        <SectionDivider/>
      <WhatIBuiled service={service}/>
        <SectionDivider/>
      <WhatsIncluded service={service}/>
        <SectionDivider/>
      <HowIWork service={service}/>
        <SectionDivider/>
     <div className="wraaper">
      <Projects/>
     </div>
        <SectionDivider/>
      <ServiceCollaborate/>

    </section>
  <Footer />
</>
  )
}

export default Service