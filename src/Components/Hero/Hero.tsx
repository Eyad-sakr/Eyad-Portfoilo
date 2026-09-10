import Skills from "./Skills"
import Herobutton from "./Herobutton"
import FadeUp from "../Animation/FadeUp"
function Hero() {
  return (
    
    <div  className="Hero ">
        <div className="container">
          <FadeUp>
            <h1  className="main-heading">
                 Crafting 
                        <br></br> 
                <span>Digital</span> 
               <span>Experiences</span> 
            </h1>
            </FadeUp> 
            <FadeUp> 
            <Skills/>
            <p>Frontend Developer focused on crafting premium, high-performance web experiences with clean code, smooth interactions, and pixel-perfect design.</p>
            </FadeUp> 
            <FadeUp> 
            <Herobutton/>
            </FadeUp>
            <FadeUp>  
             <div className="Scroll">
              <div className="ScrollLine"></div>
              <span>Scroll</span>
              </div>
              </FadeUp> 
           
        </div>
    </div>
  )
}

export default Hero